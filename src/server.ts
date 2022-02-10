import 'reflect-metadata';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';

import { RegisterResolver } from './Resolvers';

const PORT = process.env.PORT || 4000;

export const bootstrap = async () => {

  const schema = await buildSchema({
    resolvers: [RegisterResolver]
  })

  const server = new ApolloServer({ schema });

  const { url } = await server.listen(PORT);
  console.log(`Server is running, Graphql PlayGround avaliable at ${url}`)
}