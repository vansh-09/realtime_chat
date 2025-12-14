"use client";
import { useParams } from "next/navigation";
import { main } from "ts-node/dist/bin";

const Page = () => {
  const params = useParams();
  const roomId = params.roomId as string;

  return (
    <main className="flex flex-col h-screen max-h-screen overflow-hidden">
      <header className="border-b  border-zinc-800 p-4 flex items-center justify-between bg-zinc-900/30">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <span className="text-xs text-zinc-500 uppercase">ROOM ID</span>
            <div className="flex items-center gap-2">
              <span className="font-bold text-green-500">{roomId}</span>
              <button className="text-[10px] bg-zinc-800 px-2 py-0 ">
                {" "}
                Copy
              </button>
            </div>
          </div>
        </div>
      </header>
    </main>
  );
};

export default Page;
