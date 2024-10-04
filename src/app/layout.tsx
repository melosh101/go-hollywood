import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";
import Navbar from "./_components/Navbar";
import Footer from "./_components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import localFont from "next/font/local";

export const bates = localFont({
  src: "/Bates Shower.ttf",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Banshee productions",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="min-h-screen flex flex-col bg-black text-white">
        <Navbar/>
        <TRPCReactProvider>
          {children}
        </TRPCReactProvider>
        <Footer/>

      </body>
    </html>
    </ClerkProvider>
  );
}
