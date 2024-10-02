import { relations, sql } from "drizzle-orm";
import {} from "drizzle-orm/node-postgres";
import { integer, pgSchema, pgSequence, text } from "drizzle-orm/pg-core";


export const goHollyWoodSchema = pgSchema("go-hollywood")

export const movieRatingsSeq = goHollyWoodSchema.sequence("movieRatingsID");

export const movieRatings = goHollyWoodSchema.table(
  "movie_rating",
  {
    id: integer("id")
      .notNull()
      .primaryKey()
      .default(sql`nextval('moveieRatingsID')`),
    userId: text("user_id")
      .notNull(),
    rating: integer("rating").notNull(),
  }
);