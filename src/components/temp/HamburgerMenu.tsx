import React from "react";

export default function HamburgerMenu() {
    return (
        <div className="hidden fixed h-screen w-screen z-10 bg-slate-950 flex justify-center items-center">
            <ul className="flex flex-col gap-8 ml-[-2px]">
                <li>
                    <a href="/./" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Index</span>
                        <span className="text-xs"></span>
                    </a>
                </li><li>
                    <a href="/about" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">About</span>
                        <span className="text-xs">A bunch of info about me</span>
                    </a>
                </li><li>
                    <a href="/contact" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Contact</span>
                        <span className="text-xs">How to get ahold of me</span>
                    </a>
                </li><li>
                    <a href="/projects" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Projects</span>
                        <span className="text-xs">Past &amp; present</span>
                    </a>
                </li><li>
                    <a href="/essays" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Essays</span>
                        <span className="text-xs">A collection of my writing</span>
                    </a>
                </li><li>
                    <a href="/quotes" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Quotes</span>
                        <span className="text-xs">A list of my favorite quotes</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}