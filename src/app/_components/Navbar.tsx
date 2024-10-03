"use client"
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Menu, X as Close } from "lucide-react"
import Link from "next/link";
import { useRef, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";
export default function Navbar() {
    const menuBlock = useRef<HTMLDivElement>(null);
    const [menuHidden, setMenuhidden] = useState(true);
    const toggleMenu = () => {
        if (!menuBlock.current) return;
        console.log(menuHidden)
        if (menuHidden) {
            menuBlock.current?.classList.remove("w-0");
            menuBlock.current?.classList.add("w-[50%]");
            setMenuhidden(false);
        } else {
            menuBlock.current?.classList.remove("w-[50%]");
            menuBlock.current?.classList.add("w-0");
            setMenuhidden(true);
        }
    }

    return (<>
        <MobileView>
            <nav className="flex dark:bg-black dark:text-white justify-between">
                <a href="/"><img alt="Banshee Productions" src={"/nobg_short_banner.svg"} className="h-12" /></a>
                <button onClick={toggleMenu}>
                    <Menu className="size-12 hover:cursor-pointer" />
                </button>
                <div className="fixed flex flex-col text-center z-10 right-0 top-0 h-screen w-0 bg-slate-800 overflow-x-hidden transition-all duration-300 ease-in" ref={menuBlock}>
                    <Close className="absolute size-10 top-2 left-2" onClick={toggleMenu} />

                    <Link prefetch href={"/studio"} className="pt-12">Studio</Link>
                    <Link prefetch href={"/film"}>Film</Link>
                    <Link prefetch href={"/billeter"}>Billeter</Link>
                </div>

            </nav>
        </MobileView>
        <BrowserView >
            <nav className="flex bg-black  text-white justify-between">
                <a href="/"><img alt="Banshee Productions" src={"/nobg_short_banner.svg"} className="flex h-12" /></a>
                <div className="flex gap-5 my-auto -ml-40">
                    <Link prefetch href={"/studio"} className="">Studio</Link>
                    <Link prefetch href={"/film"}>Film</Link>
                    <Link prefetch href={"/billeter"}>Billeter</Link>
                </div>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                    <SignedOut>
                        <div className="flex h-full justify-center">
                            <SignInButton/>
                        </div>
                    </SignedOut>

            </nav>
        </BrowserView>
    </>
    )
}
