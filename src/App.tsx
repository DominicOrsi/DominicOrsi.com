import React, { useState } from "react";
import Nav from "./components/Nav";
import { Hamburger } from "./components/Hamburger";
import Main from "./components/Main";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const handleToggleMenu = () => {
        setMenuVisibility(!isMenuVisible);
    };

    return (
        <>
            <HamburgerMenu visible={isMenuVisible} />
            <div className="w-full h-3 bg-green-500"></div>
            <div className="w-full h-3 bg-green-700"></div>
            <div className="w-full h-3 bg-green-900"></div>
            <div className="max-w-6xl p-4 md:p-8 mx-auto flex md:gap-8">
                <Nav />
                <div className="flex flex-col gap-8 w-full">
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
                            <p>Hello There!</p>
                        </div>
                    </div>
                    <Main />
                </div>
            </div>
        </>
    );
}

export default App;

// https://aroreretini.dev/
// Working on final side with image and links