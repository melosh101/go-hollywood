import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Navbar from "~/app/_components/Navbar";
import Footer from "./_components/Footer";
import Image from "next/image";
export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex-grow items-center justify-center bg-black">
        <img src="/tmp.jpg" alt=""  className="mx-auto mt-20 w-[80%] md:mx-auto md:mt-9 shadow-lg dark:shadow-white"/>

        <div>
          <h1 className="font-batesShower">Hello world</h1>
          <Image alt="post1" src={"/poster/poster1.png"} width={297} height={420}></Image>
          <Image alt="post1" src={"/poster/poster2.png"} width={297} height={420}></Image>
          <Image alt="post1" src={"/poster/poster3.png"} width={297} height={420}></Image>
        </div>
      </main>
    </HydrateClient>
  );
}
