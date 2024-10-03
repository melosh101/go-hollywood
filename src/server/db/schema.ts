import { sql } from "drizzle-orm";
import { integer, pgSchema, pgSequence, serial, text } from "drizzle-orm/pg-core";


export const goHollyWoodSchema = pgSchema("go-hollywood")

export const movieRatingsSeq = goHollyWoodSchema.sequence("movieRatingsID");

export const movieRatings = goHollyWoodSchema.table(
  "movie_rating",
  {
    id: serial("id")
      .primaryKey(),
    userId: text("user_id")
      .notNull(),
    rating: integer("rating").notNull(),
  }
);