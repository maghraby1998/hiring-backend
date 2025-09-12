import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async users() {
    return this.prisma.user.findMany();
  }

  async createUser(data) {
    const saltOrRounds = 10;
    const password = data.password;
    const hash = await bcrypt.hash(password, saltOrRounds);

    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        age: 27,
        password: hash,
      },
    });
  }

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.prisma.user.findFirst({
      where: { email: username },
    });

    if (user) {
      const isMatch = await bcrypt.compare(pass, user.password);

      if (!isMatch) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.email };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      throw new UnauthorizedException();
    }
  }
}
