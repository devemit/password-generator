import React from 'react';

export default function Header() {
  return (
    <header>
      <div className='text-center flex flex-col gap-2'>
        <h1 className='font-bold uppercase md:text-xl'>Password Generator</h1>
        <p className='text-slate-600 text-xs md:text-sm lg:text-base max-w-sm'>
          Create strong and secure passwords to keep your account safe online.
        </p>
      </div>
    </header>
  );
}
