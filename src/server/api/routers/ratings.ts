import { z } from "zod";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";
import { eq } from "drizzle-orm";
import { movieRatings } from "~/server/db/schema";
import { TRPCError } from "@trpc/server";
import { roundByStep } from "~/lib/utils";

export const ratingsRouter = createTRPCRouter({
    addRating: protectedProcedure
    .input(z.object({rating: z.number().min(0).max(5)}))
    .mutation(async ({input, ctx}) => {
        const user = ctx.db.query.movieRatings.findFirst({
            where: eq(movieRatings.rating, input.rating)
        });

        if(!!user) {
            throw new TRPCError({message: "Rating already exists", code: "BAD_REQUEST"});
        }  

        const rating = await ctx.db.insert(movieRatings).values({
            rating: input.rating,
            userId: ctx.session.id
        });

        return rating;

    }),

    getUserRating: protectedProcedure
    .query(async ({ctx}) => {
        const rating = await ctx.db.query.movieRatings.findMany({
            where: eq(movieRatings.userId, ctx.session.id)
        });

        return rating;
    }),

    getRating: publicProcedure
    .query(async ({input, ctx}) => {
        const ratings = await ctx.db.query.movieRatings.findMany();
        let userRating = 0;
        let sum = 0;
        for (let i of ratings) {
            sum += i.rating;
            if(i.userId === ctx.session?.id) userRating = i.rating
        }

        console.log(ratings)
        return {
            rating: roundByStep(sum/ratings.length, 0.5),
            rating_count: ratings.length,
            userRating,
        };
    })
});