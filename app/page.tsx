"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function page() {
  const [stars, setStarts] = useState<any>("");
  // console.log(stars);

  const KFormatter = (num: number) => {
    // console.log(num);
    const KFormat = num / 1000;
    const decimals = KFormat.toFixed(2).split(".")[1];
    const firstDecimal = decimals.split("")[0];
    const showDecimals = firstDecimal !== "0";
    return KFormat.toFixed(showDecimals ? 1 : 0);
  };

  useEffect(() => {
    async function fetchOctoData() {
      const { Octokit } = await import("@octokit/core");
      const octokit = new Octokit();

      // personal Data
      const res = await octokit.request("GET /repos/{owner}/{repo}", {
        owner: "mosespace",
        repo: "mosespace.com",
        type: "public",
      });

      // Organization Data
      // const res = await octokit.request("GET /repos/{org}/{repo}", {
      //   org: "supabase",
      //   repo: "supabase",
      //   type: "public",
      // });
      // console.log(res);
      setStarts(
        // KFormatter
        res.data?.stargazers_count
      );
    }
    fetchOctoData();
  }, []);
  return (
    <main className='bg-white min-h-screen flex flex-col items-center space-y-4 justify-center'>
      {/* Heading */}
      <h2 className='text-slate-950 font-black text-3xl'>
        Youtube Github Starts
      </h2>

      {/* Link */}
      <Link
        href='/github_link'
        className='bg-green-500 px-8 py-2 rounded-md flex space-x-4 items-center'
      >
        <Github className='w-5 h-5' />
        {stars}K
      </Link>
    </main>
  );
}
