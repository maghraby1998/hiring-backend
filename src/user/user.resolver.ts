import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserService } from './user.service';

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
}
