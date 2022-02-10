import { Resolver, Query } from 'type-graphql';

//Types created by us.
import { TypeMessage } from './ObjectsTypes';

@Resolver()
export class GreetResolver {
  @Query( returns => TypeMessage )
  async getMessage(): Promise<TypeMessage> {
    return { text: "Hello, TypeGraphQL" }
  }
}