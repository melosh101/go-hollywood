import { HydrateClient } from "~/trpc/server"
import Navbar from "../_components/Navbar"
import Footer from "../_components/Footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../_components/ui/card"
import moment from "moment"
import "moment/locale/da"
import React from "react"
import Button from "./Button"
import { redirect } from "next/navigation"


export type theater = {
  name: string,
  location: string,
  website: string,
  note?: string,
  price: number,
  time: string[]
}
export const theaters: theater[] = [
  {
    "name": "Havnar Bio",
    "location": "Thorshavn",
    "website": "https://www.bio.fo/",
    "price": 120,
    "time": [
      "2024-09-27T14:30:00+02:00",
      "2024-09-28T17:00:00+02:00",
      "2024-09-30T19:30:00+02:00"
    ]
  },
  {
    "name": "Grand Teatret",
    "location": "1410 København K",
    "website": "https://grandteatret.dk/",
    "price": 130,
    "time": [
      "2024-09-27T15:00:00+02:00",
      "2024-09-29T17:30:00+02:00",
      "2024-10-01T20:00:00+02:00"
    ]
  },
  {
    "name": "CinemaxX",
    "location": "1560 København V",
    "website": "https://cinemaxx.dk/koebenhavn/",
    "price": 100,
    "time": [
      "2024-09-26T14:45:00+02:00",
      "2024-09-28T17:15:00+02:00",
      "2024-09-30T19:45:00+02:00"
    ]
  },
  {
    "name": "Big Bio Nordhavn",
    "location": "2150 Nordhavn",
    "website": "https://nordhavn.bigbio.dk/",
    "price": 140,
    "time": [
      "2024-09-29T14:15:00+02:00",
      "2024-09-30T16:45:00+02:00",
      "2024-10-02T19:15:00+02:00"
    ]
  },
  {
    "name": "Empire Bio",
    "location": "2200 København N",
    "website": "https://www.empirebio.dk/",
    "price": 90,
    "time": [
      "2024-09-26T15:15:00+02:00",
      "2024-09-28T17:45:00+02:00",
      "2024-10-01T20:15:00+02:00"
    ]
  },
  {
    "name": "ATLAS Biograferne",
    "location": "2610 Rødovre",
    "website": "https://www.atlasbio.dk/",
    "price": 110,
    "time": [
      "2024-09-27T14:00:00+02:00",
      "2024-09-29T16:30:00+02:00",
      "2024-10-02T19:00:00+02:00"
    ]
  },
  {
    "name": "Big Bio",
    "location": "2730 Herlev",
    "website": "https://herlev.bigbio.dk/",
    "price": 150,
    "time": [
      "2024-09-25T14:45:00+02:00",
      "2024-09-28T17:15:00+02:00",
      "2024-10-01T19:45:00+02:00"
    ]
  },
  {
    "name": "Gentofte Kino",
    "location": "2820 Gentofte",
    "website": "https://gentoftekino.dk/",
    "price": 80,
    "time": [
      "2024-09-25T14:30:00+02:00",
      "2024-09-27T17:00:00+02:00",
      "2024-09-30T19:30:00+02:00"
    ]
  },
  {
    "name": "Reprise Teatret",
    "location": "2840 Holte",
    "website": "https://reprisen.rudersdal.dk/",
    "price": 70,
    "time": [
      "2024-09-26T15:00:00+02:00",
      "2024-09-29T17:30:00+02:00",
      "2024-10-01T20:00:00+02:00"
    ]
  },
  {
    "name": "MovieHouse Hellerup",
    "location": "2900 Hellerup",
    "website": "https://hellerup.moviehouse.dk/",
    "price": 140,
    "note": "Additional fee applies",
    "time": [
      "2024-09-26T14:15:00+02:00",
      "2024-09-28T16:45:00+02:00",
      "2024-10-02T19:15:00+02:00"
    ]
  },
  {
    "name": "MovieHouse Helsingør",
    "location": "3000 Helsingør",
    "website": "https://helsingor.moviehouse.dk/",
    "price": 130,
    "note": "Additional fee applies",
    "time": [
      "2024-09-25T15:30:00+02:00",
      "2024-09-27T18:00:00+02:00",
      "2024-09-30T20:30:00+02:00"
    ]
  },
  {
    "name": "Humle Bio",
    "location": "3050 Humlebæk",
    "website": "https://www.humlebio.dk/",
    "price": 100,
    "time": [
      "2024-09-28T14:45:00+02:00",
      "2024-09-30T17:15:00+02:00",
      "2024-10-02T19:45:00+02:00"
    ]
  },
  {
    "name": "Kosmorama",
    "location": "3300 Frederiksværk",
    "website": "https://frederiksvaerk.biografkompagniet.dk/",
    "price": 90,
    "time": [
      "2024-09-26T15:00:00+02:00",
      "2024-09-29T17:30:00+02:00",
      "2024-10-01T20:00:00+02:00"
    ]
  },
  {
    "name": "Birkerød Bio",
    "location": "3460 Birkerød",
    "website": "https://www.birkeroedbio.dk/",
    "price": 70,
    "time": [
      "2024-09-27T14:30:00+02:00",
      "2024-09-29T17:00:00+02:00",
      "2024-10-02T19:30:00+02:00"
    ]
  },
  {
    "name": "PARKteatret",
    "location": "3600 Frederikssund",
    "website": "https://www.parkteatret.dk",
    "price": 80,
    "time": [
      "2024-09-25T14:15:00+02:00",
      "2024-09-28T16:45:00+02:00",
      "2024-10-01T19:15:00+02:00"
    ]
  },
  {
    "name": "Rønne Bio",
    "location": "3700 Rønne",
    "website": "https://www.ronnebio.dk/",
    "price": 100,
    "time": [
      "2024-09-26T14:30:00+02:00",
      "2024-09-28T17:00:00+02:00",
      "2024-09-30T19:00:00+02:00"
    ]
  },
  {
    "name": "Kino Ro's Torv",
    "location": "4000 Roskilde",
    "website": "https://www.kinorostorv.dk/",
    "price": 110,
    "time": [
      "2024-09-27T15:00:00+02:00",
      "2024-09-29T18:00:00+02:00",
      "2024-10-01T20:30:00+02:00"
    ]
  },
  {
    "name": "MovieHouse Ringsted",
    "location": "4100 Ringsted",
    "website": "https://ringsted.moviehouse.dk/",
    "note": "Additional fee applies",
    "price": 130,
    "time": [
      "2024-09-26T14:30:00+02:00",
      "2024-09-28T16:00:00+02:00",
      "2024-10-02T18:30:00+02:00"
    ]
  },
  {
    "name": "MovieHouse Slagelse",
    "location": "4200 Slagelse",
    "website": "https://slagelse.moviehouse.dk/",
    "note": "Additional fee applies",
    "price": 140,
    "time": [
      "2024-09-25T15:00:00+02:00",
      "2024-09-27T17:30:00+02:00",
      "2024-09-30T20:00:00+02:00"
    ]
  },
  {
    "name": "Kulturbiografen",
    "location": "4300 Holbæk",
    "website": "https://www.kulturbiografen.dk/",
    "price": 90,
    "time": [
      "2024-09-26T15:15:00+02:00",
      "2024-09-28T17:45:00+02:00",
      "2024-10-02T20:15:00+02:00"
    ]
  },
  {
    "name": "Kino - Den Blå Engel",
    "location": "4400 Kalundborg",
    "website": "https://www.kino-kalundborg.dk/",
    "price": 80,
    "time": [
      "2024-09-27T14:30:00+02:00",
      "2024-09-29T17:00:00+02:00",
      "2024-10-01T19:30:00+02:00"
    ]
  },
  {
    "name": "Biografen Kanten",
    "location": "4640 Faxe",
    "website": "https://faxe.biografkompagniet.dk/",
    "price": 70,
    "time": [
      "2024-09-25T15:00:00+02:00",
      "2024-09-27T17:30:00+02:00",
      "2024-09-30T19:00:00+02:00"
    ]
  },
  {
    "name": "Bio Næstved",
    "location": "4700 Næstved",
    "website": "https://naestved.biografkompagniet.dk/",
    "price": 110,
    "time": [
      "2024-09-26T15:30:00+02:00",
      "2024-09-28T18:00:00+02:00",
      "2024-10-02T20:30:00+02:00"
    ]
  },
  {
    "name": "Biografcafeen",
    "location": "4760 Vordingborg",
    "website": "https://www.biografcafeen.dk/",
    "price": 90,
    "time": [
      "2024-09-25T14:45:00+02:00",
      "2024-09-27T17:15:00+02:00",
      "2024-09-30T19:45:00+02:00"
    ]
  },
  {
    "name": "Lalandia Bio",
    "location": "4970 Rødby",
    "website": "https://www.lalandiabio.dk/",
    "price": 100,
    "time": [
      "2024-09-26T14:00:00+02:00",
      "2024-09-28T16:30:00+02:00",
      "2024-09-30T19:00:00+02:00"
    ]
  },
  {
    "name": "Cafe Biografen",
    "location": "5000 Odense C",
    "website": "https://cafebio.dk/",
    "price": 70,
    "time": [
      "2024-09-26T15:15:00+02:00",
      "2024-09-28T17:45:00+02:00",
      "2024-10-02T20:15:00+02:00"
    ]
  },
  {
    "name": "Vue Rosengård",
    "location": "5220 Odense SØ",
    "website": "https://biografenvue.dk/rosengaard/",
    "price": 140,
    "time": [
      "2024-09-27T14:00:00+02:00",
      "2024-09-29T16:30:00+02:00",
      "2024-10-02T19:00:00+02:00"
    ]
  },
  {
    "name": "Panorama Biograferne ved Lillebælt",
    "location": "5500 Middelfart",
    "website": "https://www.0024.dk/",
    "price": 120,
    "time": [
      "2024-09-25T14:30:00+02:00",
      "2024-09-27T17:00:00+02:00",
      "2024-09-30T19:30:00+02:00"
    ]
  },
  {
    "name": "Assens Bio",
    "location": "5610 Assens",
    "website": "https://tobaksgaarden.dk/program/",
    "price": 80,
    "time": [
      "2024-09-27T15:00:00+02:00",
      "2024-09-29T17:30:00+02:00",
      "2024-10-02T20:00:00+02:00"
    ]
  },
  {
    "name": "Scala Svendborg",
    "location": "5700 Svendborg",
    "website": "https://www.scala-svendborg.dk/",
    "price": 90,
    "time": [
      "2024-09-26T14:45:00+02:00",
      "2024-09-28T17:15:00+02:00",
      "2024-09-30T19:45:00+02:00"
    ]
  },
  {
    "name": "KinoVino",
    "location": "5800 Nyborg",
    "website": "https://www.kinovino.dk/",
    "price": 100,
    "time": [
      "2024-09-27T14:30:00+02:00",
      "2024-09-29T17:00:00+02:00",
      "2024-09-30T19:30:00+02:00"
    ]
  },
  {
    "name": "Kosmorama 6100",
    "location": "6100 Haderslev",
    "website": "https://www.kosmorama6100.dk/",
    "price": 110,
    "time": [
      "2024-09-26T14:00:00+02:00",
      "2024-09-28T16:30:00+02:00",
      "2024-09-30T19:00:00+02:00"
    ]
  },
  {
    "name": "Kinorama",
    "location": "6200 Aabenraa",
    "website": "https://www.kinorama.dk/",
    "price": 120,
    "time": [
      "2024-09-26T15:00:00+02:00",
      "2024-09-28T17:30:00+02:00",
      "2024-09-30T20:00:00+02:00"
    ]
  },
  {
    "name": "Biografen 1&2",
    "location": "6270 Tønder",
    "website": "https://kino12.dk/",
    "price": 80,
    "time": [
      "2024-09-25T14:15:00+02:00",
      "2024-09-27T16:45:00+02:00",
      "2024-09-30T19:15:00+02:00"
    ]
  },
  {
    "name": "Varde Bio",
    "location": "6800 Varde",
    "website": "https://www.vardebio.dk/",
    "price": 110,
    "time": [
      "2024-09-27T14:00:00+02:00",
      "2024-09-29T16:30:00+02:00",
      "2024-10-02T19:00:00+02:00"
    ]
  },
  {
    "name": "Ringkøbing Biograf",
    "location": "6950 Ringkøbing",
    "website": "https://www.ringkobing-biograf.dk/",
    "price": 70,
    "time": [
      "2024-09-26T14:45:00+02:00",
      "2024-09-28T17:15:00+02:00",
      "2024-09-30T19:45:00+02:00"
    ]
  },
  {
    "name": "Panorama Biograferne ved Lillebælt",
    "location": "7000 Fredericia",
    "website": "https://www.0024.dk/",
    "price": 120,
    "time": [
      "2024-09-26T15:15:00+02:00",
      "2024-09-28T17:45:00+02:00",
      "2024-10-02T20:15:00+02:00"
    ]
  }
]



async function buyTicket(theater: theater) {
  "use server"
  console.log("Ticket bought")
  console.log(theater)
  redirect("/billeter/betal?theater=" + theater.name + "&location=" + theater.location)
}

export default function BilleterPage() {


  const TheatersRender = theaters.map((theater: theater, i) => {
    return (
      <Card key={i}>
        <CardHeader>
          <CardTitle><a href={theater.website}>{theater.name}</a></CardTitle>
          <CardDescription>{theater.location}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="">
            <h3>Pris: {theater.price} dkk</h3>
            <h4>Tider:</h4>
            <div className="grid  grid-cols-2 gap-4 my-4">
              {theater.time.map((time, i) => {
                const formattedTime = moment(time).format("dddd Do HH:mm")
                return <Button onClick={buyTicket} theater={theater} key={i} className="bg-red-600 text-white p-1 hover:bg-red-500 transition-colors duration-75 ease-linear " >{formattedTime}</Button>
              })}
            </div>
            {theater.note && <CardDescription>{theater.note}</CardDescription>}
          </div>
        </CardContent>


      </Card>
    )
  })
  return <HydrateClient>
    <main className="flex-grow items-center justify-center dark:bg-black">
      <div className="w-96 mx-auto">
        {TheatersRender.map((TheaterRender) => TheaterRender)}
      </div>
    </main>
  </HydrateClient>
}
