import React from "react";

export default function Nav() {
  return (
    <div className='flex max-w-7xl text-slate-950 bg-white justify-between'>
      <div>
        <img src='/logo.png' alt='MailChamp' />
      </div>
      <div>
        <button>Start Free Trial</button>
        <button>Login</button>
        <button>Menu</button>
      </div>
    </div>
  );
}
