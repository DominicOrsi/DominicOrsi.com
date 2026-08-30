import React from "react";

interface NavAttributes {
    title: string;
    description: string;
    id?: string;
}

export default function NavComp({title, description, id}: NavAttributes) {
    return (
        <li>
            <a className='flex flex-col md:border-l-2 border-slate-700 hover:border-white active:border-white md:pl-6 transition-all duration-200 ease-in-out h-[44px] justify-center' href={`#${id ?? title.toLowerCase()}`}>
                <span className='text-slate-400 text-xl'>{title}</span>
                <span className='text-xs'>{description}</span>
            </a>
        </li>

    )
}