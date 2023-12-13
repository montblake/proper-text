import { fetchChapters } from "@/app/lib/data";
import { Chapter } from "@/app/lib/definitions";

export default async function Page() {
    const chapters = await fetchChapters();
    console.log("CHAPTERS", chapters);
    return (
        <main className="flex min-h-screen flex-col p-6 gap-2 ">
        <div className="flex  h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
          <div className="flex flex-row items-center leading-none text-white">
            <p className="text-[44px]">BusBus</p>
          </div>
        </div>  
        <div className="flex flex-col bg-blue-500 rounded-lg p-4 text-white">
            <h2>Text Page!</h2>
        </div>
        {chapters.map((chapter: Chapter) => (
            <div className="flex flex-col bg-blue-500 rounded-lg p-4 text-white" key={chapter.id}>{chapter.title}</div>
        ))}

      </main>
    )
}