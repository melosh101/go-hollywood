CREATE SCHEMA "go-hollywood";
--> statement-breakpoint
CREATE SEQUENCE "go-hollywood"."movieRatingsID" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1;--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "go-hollywood"."movie_rating" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"rating" integer NOT NULL
);
