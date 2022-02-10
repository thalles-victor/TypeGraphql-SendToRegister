import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';


//Types created by us.
import { GreetResolver } from './Resolvres';


//Use process.env.PORT for  the o heroku create your port.
const PORT = process.env.PORT || 4000;  
export const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [GreetResolver]
  })

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, Graphql PlayGround avaliable at ${url}`)
}