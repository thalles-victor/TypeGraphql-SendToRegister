import { 
  Resolver,
  Query,
  Mutation,
  Arg
 } from 'type-graphql';
import { PrismaClient } from '@prisma/client';


import {
  UserInput,
  UserObject
} from './Types';

const prisma = new PrismaClient();

@Resolver()
export class RegisterResolver {
  @Mutation( returns => [UserObject] )
  async resgister(
    @Arg("data") data: UserInput
  ): Promise<UserObject[] | null>{

    //Register user
    await prisma.user.create({
      data: {
        email: data.email,
        name: data.name
      }
    })

    //Return all uses
    const user = await prisma.user.findMany()
    console.log(
      user
    )
    if(!user) return null

    return user;
  }
}
