import Ratings from "./Ratings";

export default async function FilmPage() {

    return <>
        <main className="flex-grow bg-black h-full w-full text-white flex justify-center">
            <article className="mt-48 w-[60%] h-10 grid grid-cols-2">
                <div className="flex flex-col w-[50%]">
                    <h1 className="font-bold text-2xl">Hello world</h1>
                    <section>
                     en gyser film om programering   
                    </section>
                </div>
                <img src="/tmp.jpg" alt="" />
            </article>
        </main>
    </>
}