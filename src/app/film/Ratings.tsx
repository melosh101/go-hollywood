"use client"

import { api } from "~/trpc/react"

export default function Ratings() {
    const rating = api.ratings.getRating.useQuery();
    void api.ratings.getRating.usePrefetchQuery()
    let starArray = []

    if(!rating.data) {
        return <li>loading ratings</li>
    }
    for (let i = 0; i < Math.round(rating.data.rating); i++) {
        starArray.push(<img src="/stars/Star_filled.svg"/>)
    }

    const missing = 5-starArray.length;

    for (let i = 0; i <= missing; i++) {
        starArray.push(<img src="/stars/Star.svg"/>)
    }
    return <>
        
        {starArray.map((star) => star)}
    </>
}