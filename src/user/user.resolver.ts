import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';
import { Public } from 'src/decorators/public.decorator';
import { SignInDto } from './dtos/sign-in-.dto';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query()
  async users() {
    return this.userService.users();
  }

  @Mutation()
  async createUser(@Args('input') input) {
    return this.userService.createUser(input);
  }

  @Mutation()
  @Public()
  async signIn(@Args('input') input: SignInDto) {
    return this.userService.signIn(input.email, input.password);
  }
}
