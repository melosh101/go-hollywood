import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { movieRatings } from "~/server/db/schema";
import { TRPCError } from "@trpc/server";

export const ratingsRouter = createTRPCRouter({
    addRating: protectedProcedure
    .input(z.object({rating: z.number()}))
    .mutation(async ({input, ctx}) => {
        const user = ctx.db.query.movieRatings.findFirst({
            where: eq(movieRatings.rating, input.rating)
        });

        if(!!user) {
            throw new TRPCError({message: "Rating already exists", code: "BAD_REQUEST"});
        }  

        const rating = await ctx.db.insert(movieRatings).values({
            rating: input.rating,
            userId: ctx.session.userId
        });

        return rating;

    }),

    getUserRating: protectedProcedure
    .query(async ({ctx}) => {
        const rating = await ctx.db.query.movieRatings.findMany({
            where: eq(movieRatings.userId, ctx.session.userId)
        });

        return rating;
    }),

    getRating: publicProcedure
    .query(async ({input, ctx}) => {
        const rating = await ctx.db.query.movieRatings.findMany();
        
        return rating;
    })
});