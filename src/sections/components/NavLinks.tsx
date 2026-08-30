import React from "react";
import NavComp from "./NavComp";

export default function NavLinks() {
    return (
        <>
            <NavComp title="About" description="Info about me" />
            <NavComp title="Projects & Certs" description="Things I have made and earned" id="projects-certifications" />
            <NavComp title="Experience" description="Where I have worked" />
            <NavComp title="Contact" description="How to contact me" />
        </>
    );
}
