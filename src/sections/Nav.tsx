import React from 'react';
import NavLinks from './components/NavLinks';

export default function Nav() {
    return (
        <div className='hidden md:flex flex-col gap-8'>
            <div className='h-14 flex justify-between w-full md:justify-center items-center relative'>
                <h1 className='text-5xl text-white whitespace-nowrap font-gloria'>Dominic Orsi</h1>
            </div>
            <nav className='border-l-2 border-slate-700 md:sticky md:top-4'>
                <ul className='flex flex-col gap-8 ml-[-2px]'>
                    <NavLinks />
                </ul>
            </nav>
        </div>
    )
}
