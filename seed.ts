import { env } from "~/env";
import { db } from "~/server/db"
import {movieRatings} from "~/server/db/schema"
import {faker} from "@faker-js/faker"
if(env.NODE_ENV === "production") {
    throw new Error("cannot seed in production");
}

/**
 * @param {number} value
 * @param {number} step
 */
function roundByStep(value:number, step:number) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

console.log("hello world")
type newRating = typeof movieRatings.$inferInsert

for(let i = 0; i<=100; i++) {
    console.log(`inserting i=${i}`)
    const seed: newRating = {
        id: 1,
        userId: faker.string.uuid(),
        rating: faker.number.float({max: 5, multipleOf: 0.5})
    }
    await db.transaction(async (tx) => {
        console.log("inside trans")
        await tx.insert(movieRatings).values(seed)
    })
    console.log(`inserted ${"hello"} as ${i}`)
}

console.log("Seeding finished")