import React from 'react';

export default function Header() {
   return (
      <header>
         <div className='text-center flex flex-col gap-2'>
            <h1 className='font-bold uppercase'>Password Generator</h1>
            <p className='text-slate-600 text-xs max-w-sm'>
               Create strong and secure passwords to keep your account safe online.
            </p>
         </div>
      </header>
   );
}
