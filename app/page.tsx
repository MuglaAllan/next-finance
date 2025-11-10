"use client"; // This line must be at the very top of the file
import Image from "next/image";
import LineChart from "./lineChart";
import Search from '@/app/ui/search';

export default function Home() {  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    
  }
  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-7xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <div className="flex flex-col items-center gap-6 text-center py-4 sm:items-center sm:text-left">
          <h1 className="max-w-sm text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Title to be determined by Kieran!!
          </h1>
          <p className="max-w-lg text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            The latest news and information from the world of investment and finance.
              Stay updated with the latest news and insights from the world of investing and finance.
              Etc...
          </p>
        </div>
        <div className="py-8">
          <LineChart/>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:my-8">
          <Search placeholder="Search ticker symbol..." />
        </div>

        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="/secDataFetch"
            target="_self"
            rel="noopener noreferrer"
          >
            Get SEC Data
          </a>          
        </div>
      </main>
    </div>
  );
}
