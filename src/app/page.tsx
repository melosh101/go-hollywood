import Link from "next/link";

import { getServerAuthSession } from "~/server/auth";
import { HydrateClient } from "~/trpc/server";
import Navbar from "~/app/_components/Navbar";
export default async function Home() {

  return (
    <HydrateClient>
      <main className="flex h-full flex-col items-center justify-center bg-black text-white">
        
      </main>
    </HydrateClient>
  );
}
