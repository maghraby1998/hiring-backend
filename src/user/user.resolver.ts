import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class UserResolver {
  @Query()
  async users() {
    return [{ id: 1, name: 'Ahmed' }];
  }
}
