import React, { MouseEvent } from "react";
import PropTypes from "prop-types";
import NavComp from "./components/NavComp";

export default function HamburgerMenu({ visible }) {
    function handleMenuClick(event: MouseEvent<HTMLDivElement>) {
        const divObj = event.currentTarget;
        divObj.classList.toggle("hidden");
    }

    if (!visible) return null;

    return (
        <div className="fixed h-screen w-screen z-10 bg-slate-950 flex justify-center items-center" onClick={handleMenuClick}>
            <ul className="flex flex-col gap-8 ml-[-2px]">
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
        </div>
    )
}

HamburgerMenu.propTypes = {
    visible: PropTypes.bool.isRequired,
}