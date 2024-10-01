"use client"

import { api } from "~/trpc/react"

export default function Ratings() {
    const rating = api.ratings.getRating.useQuery();
    if(!rating.isSuccess) {
        return <li>loading ratings</li>
    }
    rating
    let starArray = []
    for (let i = 0; i < Math.round(rating.data.rating); i++) {
        starArray.push(<img src="/stars/Star.svg"/>)
    }
    return <>
    
    </>
}