import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async users() {
    return this.prisma.user.findMany();
  }

  async createUser(data) {
    return this.prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        age: 27,
      },
    });
  }
}
