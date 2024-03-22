import { Menu } from "lucide-react";
import React from "react";

export default function Nav() {
  return (
    <div className='flex py-2 max-w-7xl text-slate-950 bg-white justify-between'>
      <div>
        <img src='/logo.png' alt='MailChamp' />
      </div>
      <div className='flex space-x-4'>
        <button className='bg-[#FFE01B] border border-black border-2 px-4 py-2 rounded-full'>
          Start Free Trial
        </button>
        <button className='bg-[#FFE01B] border border-black border-2 px-4 py-2 rounded-full'>
          Login
        </button>
        <button>
          <Menu />
        </button>
      </div>
    </div>
  );
}
