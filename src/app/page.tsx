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
        <div className="mt-20">
        <video src="/trailer.mp4" controls preload="none" className="mx-auto mt-48 w-[80%] md:mx-auto md:mt-9 shadow-lg dark:shadow-white">
          <source src="/trailer.mp4" type="video/mp4"/>
          
        </video>
        </div>

        <div className="flex flex-col justify-center mt-32 w-[60%]">
          <h1 className="font-batesShower">Hello world</h1>
          <div className="grid md:grid-cols-3 my-auto">
            <Image alt="post1" src={"/poster/poster1.png"} width={297} height={420}></Image>
            <Image alt="post1" src={"/poster/poster2.png"} width={297} height={420}></Image>
            <Image alt="post1" src={"/poster/poster3.png"} width={297} height={420}></Image>
          </div>
        </div>
      </main>
    </HydrateClient>
  );
}
