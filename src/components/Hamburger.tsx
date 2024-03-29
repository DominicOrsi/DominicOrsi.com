/** https://dev.to/iasqiti/hamburger-in-react-tw-ts-4i0h */

import React from "react";
import { useState } from "react";

export interface HamburgerProps {
    /** Callback function, which should be executed on click */
    onClick: () => void;
    /** Initial state of our button */
    isInitiallyOpen?: boolean;
};

export function Hamburger(props: HamburgerProps) {
    const { onClick, isInitiallyOpen = false } = props;
    const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

    const handleClick = () => {
        setIsOpen(prev => !prev);
        onClick();
    };

    return (
        <button onClick={handleClick} type="button" className="w-8 h-8 flex justify-around flex-col flex-wrap z-10 cursor-pointer" >
            <div className="bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px]" />
            <div className="bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px]" />
            <div className="bg-white block w-8 h-[0.35rem] rounded transition-all origin-[1px]"/>
        </button>
    );
};