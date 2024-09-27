import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Navbar from "~/app/_components/Navbar";
import Footer from "./_components/Footer";
export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex-grow items-center justify-center dark:bg-black">
        <img src="/tmp.jpg" alt=""  className="mx-auto mt-20 w-[80%] md:mx-auto md:mt-9 shadow-lg dark:shadow-white"/>
      </main>
    </HydrateClient>
  );
}
