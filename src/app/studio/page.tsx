import { HydrateClient } from "~/trpc/server";
import Navbar from "../_components/Navbar";
import Footer from "../_components/Footer";

export default function StudioPage() {

    return (
        <HydrateClient>
        <Navbar />
        <main className="flex-grow items-center justify-center dark:bg-black">
          <h1>STUDIO</h1>
          <h2>HUGE CHANGES</h2>
        </main>
        <Footer/>
      </HydrateClient>
    )
}