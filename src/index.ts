import 'reflect-metadata';
import { ID, Field, ObjectType, Resolver, Query, buildSchema, InputType, Mutation, Arg} from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@ObjectType()
class TypeMessage {
  @Field()
  text: string;

}

@InputType()
class UserInput {
  @Field()
  email: string;

  @Field()
  name: string;
}

@ObjectType()
class UserObject {
  @Field(type=> ID)
  id: number;

  @Field()
  email: string;

  @Field({nullable: true})
  name?: string;
}

@Resolver()
class RecipeResolver {
  @Query( returns => TypeMessage )
  async getMessage(){
    return { text: "Hello, TypeGraphQL" }
  }

  @Mutation( returns => [UserObject] )
  async resgister(
    @Arg("data") data: UserInput
  ): Promise<UserObject[] | undefined>{
    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name
      }
    })

    //
    const user = await prisma.user.findMany()
    console.log(
      user
    )
    if(!user) return undefined

    //

    return user;

  }
}

const PORT = process.env.PORT || 4000;

const bootstrap = async () => {

  const schema = await buildSchema({
    resolvers: [RecipeResolver]
  })

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, Graphql PlayGround avaliable at ${url}`)
}

bootstrap();