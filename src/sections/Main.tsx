import React from "react";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import Contact from "./Contact";
import SideAbout from "./Side-About";
import InlineAbout from "./Inline-About";


export default function Main() {

    return (
        <>
            <div className="flex gap-8">
                <div className="flex flex-col gap-8 max-w-lg">
                    <About />
                    <Projects />
                    <Experience />
                    <InlineAbout />
                    <Contact />
                </div>
                <SideAbout />
            </div>
            <Footer />
        </>
    )
} 