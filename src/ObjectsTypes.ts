import { ObjectType, Field } from 'type-graphql';


@ObjectType()
export class TypeMessage {
  @Field()
  text: string;
}