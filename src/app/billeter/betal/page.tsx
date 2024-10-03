
import { auth, currentUser } from "@clerk/nextjs/server"
import { theaters } from "../page"
import { Card, CardHeader, CardTitle } from "~/app/_components/ui/card"

type betalProps = {
    searchParams?: { [key: string]: string | string[] | undefined }
}



export default async function betalPage({searchParams}: betalProps) {
    const user = await currentUser();
    if(!user) return auth().protect()
    const theater = theaters.find((theater) => theater.name === searchParams?.theater)
    return (
        <main className="flex justify-center">
            <Card className="h-96 w-72 m-60 bg-[#0081D6] border-0">
                <CardHeader>
                    <CardTitle>køb billet til {theater?.name}</CardTitle>
                </CardHeader>
            </Card>
        </main>
    )
}