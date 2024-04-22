import React from 'react';
import NavComp from './components/NavComp';

export default function Nav() {
    return (
        <div className='hidden md:flex flex-col gap-8'>
            <div className='h-14 flex justify-between w-full md:justify-center items-center relative'>
                <h1 className='text-5xl text-white whitespace-nowrap font-gloria'>Dominic Orsi</h1>
            </div>
            <nav className='border-l-2 border-slate-700 md:sticky md:top-4'>
                <ul className='flex flex-col gap-8 ml-[-2px]'>
                    <NavComp 
                        title="About"
                        description="Info about me"
                    />
                    <NavComp 
                        title="Projects"
                        description="Things I have made"
                    />
                    <NavComp 
                        title="Experience"
                        description="Where I have worked"
                    />
                    <NavComp 
                        title="Contact"
                        description="How to contact me"
                    />
                </ul>
            </nav>
        </div>
    )
}
