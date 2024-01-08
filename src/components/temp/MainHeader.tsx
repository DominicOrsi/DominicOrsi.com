import React, { useState } from "react";
import { Hamburger } from "../Hamburger";
import HamburgerMenu from "./HamburgerMenu";

export default function MainHeader() {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    return (
        <div className="flex flex-col">
            <div className="flex md:hidden">
                <div className="h-14 flex justify-between w-full md:justify-center items-center relative">
                    <h1 className="text-5xl text-white whitespace-nowrap font-gloria">Dominic Orsi</h1>
                    <div className="md:hidden relative w-full h-full flex items-center justify-end">
                        <Hamburger onClick={handleToggleMenu} />
                        
                    </div> {/* This is where the hamburger menu goes */}
                </div>
            </div>
            <div className="md:h-14 flex items-start  flex-col sm:flex-row sm:gap-2 sm:items-center">
                <p>Hello there!</p>
            </div>
        </div >
    )
}