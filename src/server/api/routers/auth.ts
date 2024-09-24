import { eq } from "drizzle-orm";
import { z } from "zod";
import bcrypt from "bcrypt";

const saltRounds = 17;

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { users } from "~/server/db/schema";

export const authRouter = createTRPCRouter({
    auth: publicProcedure
    .input(z.object({username: z.string(), password: z.string()}))
    .query(async ({ctx, input}) => {
        const {username, password} = input;

        let hash: string = "";
        bcrypt.hash(password, saltRounds, async (err, generatedHash) => {
            if(err) {
                throw err;
            }
            hash = generatedHash;
        }) 

        const user = await ctx.db.query.users.findFirst({
            where: eq(users.name, username),
        });

        if(!user) {
            return false;
        }

        if(user.password === hash) {
            return user;
        }


    })
});
