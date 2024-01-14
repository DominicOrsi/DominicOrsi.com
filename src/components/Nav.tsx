import React from 'react';

export default function Nav() {
    return (
        <div className='hidden md:flex flex-col gap-8'>
            <div className='h-14 flex justify-between w-full md:justify-center items-center relative'>
                <h1 className='text-5xl text-white whitespace-nowrap font-gloria'>Dominic Orsi</h1>
            </div>
            <nav className='border-l-2 border-slate-700 md:sticky md:top-4'>
                <ul className='flex flex-col gap-8 ml-[-2px]'>
                    <li>
                        <a className='flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' href='#about'>
                            <span className='text-slate-400 text-xl'>About</span>
                            <span className='text-xs'>Info about me</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' href='#projects'>
                            <span className='text-slate-400 text-xl'>Projects</span>
                            <span className='text-xs'>Things I have made</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' href='#experience'>
                            <span className='text-slate-400 text-xl'>Experience</span>
                            <span className='text-xs'>Where I have worked</span>
                        </a>
                    </li>
                    <li>
                        <a className='flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' href='#contact'>
                            <span className='text-slate-400 text-xl'>Contact</span>
                            <span className='text-xs'>How to contact me</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
