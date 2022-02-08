import 'reflect-metadata';
import { ID, Field, ObjectType, Resolver, Query, buildSchema} from 'type-graphql';
import { ApolloServer } from 'apollo-server';



@ObjectType()
class Recipe {
  @Field( type => ID )
  id: string;

  @Field()
  title: string;

  @Field()
  description?: string

  @Field()
  creationDate: Date;

  @Field( type => [String] )
  ingredients: string[];
}

@ObjectType()
class TypeMessage {
  @Field()
  text: string;

}

@Resolver()
class RecipeResolver {
  @Query( returns => TypeMessage )
  async getMessage(){
    return { text: "Hello, TypeGraphQL" }
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