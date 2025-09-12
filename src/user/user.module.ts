import { Logger, Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { PrismaService } from 'prisma.service';

@Module({
  providers: [UserResolver, UserService, PrismaService, Logger],
})
export class UserModule {}
