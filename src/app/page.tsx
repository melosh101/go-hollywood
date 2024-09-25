import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Navbar from "~/app/_components/Navbar";
import Footer from "./_components/Footer";
export default async function Home() {

  return (
    <HydrateClient>
      <Navbar />
      <main className="flex-grow items-center justify-center dark:bg-black">
        <img src="/tmp.jpg" alt=""  className="p-10 pt-20 md:w-full md:px-96 md:pt-40"/>
      </main>
      <Footer/>
    </HydrateClient>
  );
}
