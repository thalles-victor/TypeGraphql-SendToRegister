import { InputType, Field, ObjectType, ID } from 'type-graphql';

@InputType()
export class UserInput {
  @Field()
  email: string;

  @Field()
  name: string;
}

@ObjectType()
export class UserObject {
  @Field(type=> ID)
  id: number;

  @Field()
  email: string;

  @Field({nullable: true})
  name?: string;
}