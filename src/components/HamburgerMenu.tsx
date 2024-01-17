import React, { MouseEvent } from "react";
import PropTypes from "prop-types";

export default function HamburgerMenu({ visible }) {
    function handleMenuClick(event: MouseEvent<HTMLDivElement>) {
        const divObj = event.currentTarget;
        divObj.classList.toggle("hidden");
    }

    if (!visible) return null;

    return (
        <div className="fixed h-screen w-screen z-10 bg-slate-950 flex justify-center items-center" onClick={handleMenuClick}>
            <ul className="flex flex-col gap-8 ml-[-2px]">
                <li>
                    <a href="#about" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">About</span>
                        <span className="text-xs">Info about me</span>
                    </a>
                </li><li>
                    <a href="#projects" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Projects</span>
                        <span className="text-xs">Things I have made</span>
                    </a>
                </li><li>
                    <a href="#experience" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Experience</span>
                        <span className="text-xs">Where I have worked</span>
                    </a>
                </li><li>
                    <a href="#contact" className="flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center">
                        <span className="text-slate-400 text-xl">Contact</span>
                        <span className="text-xs">How to contact me</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

HamburgerMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
}