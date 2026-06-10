import React from "react";
import NavComp from "./NavComp";

export default function NavLinks() {
    return (
        <>
            <NavComp title="About" description="Info about me" />
            <NavComp title="Projects" description="Things I have made" />
            <NavComp title="Experience" description="Where I have worked" />
            <NavComp title="Contact" description="How to contact me" />
        </>
    );
}
