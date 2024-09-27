
import { auth } from "@clerk/nextjs/server"
import { theaters } from "../page"

type betalProps = {
    searchParams?: { [key: string]: string | string[] | undefined }
}



export default function betalPage({searchParams}: betalProps) {
    auth().protect()
    const theater = theaters.find((theater) => theater.name === searchParams?.theater)
    return (
        <main>
            <h1>Page: betal</h1>
            <p>searchParams: {theater?.price}</p>
        </main>
    )
}