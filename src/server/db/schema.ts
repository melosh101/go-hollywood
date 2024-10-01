import { relations, sql } from "drizzle-orm";
import {} from "drizzle-orm/node-postgres";
import { integer, pgSchema, text } from "drizzle-orm/pg-core";


export const goHollyWoodSchema = pgSchema("go-hollywood")


export const movieRatings = goHollyWoodSchema.table(
  "movie_rating",
  {
    id: text("id")
      .notNull()
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    userId: text("user_id")
      .notNull(),
    rating: integer("rating").notNull(),
  }
);