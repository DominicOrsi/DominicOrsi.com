import React from "react";
import NavLinks from "./components/NavLinks";

interface HamburgerMenuProps {
    visible: boolean;
    onClose: () => void;
}

export default function HamburgerMenu({ visible, onClose }: HamburgerMenuProps) {
    if (!visible) return null;

    return (
        <div className="fixed h-screen w-screen z-10 bg-slate-950 flex justify-center items-center" onClick={onClose}>
            <ul className="flex flex-col gap-8 ml-[-2px]">
                <NavLinks />
            </ul>
        </div>
    )
}
