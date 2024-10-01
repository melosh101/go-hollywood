CREATE SCHEMA "go-hollywood";
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "go-hollywood"."movie_rating" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"rating" integer NOT NULL
);
