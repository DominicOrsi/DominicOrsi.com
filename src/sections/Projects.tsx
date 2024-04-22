import React from "react";
import ProjectComp from "./components/ProjectComp";

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Projects</h2>
            <ProjectComp
                githubLink="https://github.com/DominicOrsi/F1-Stats-App"
                imagePath="/assets/f1-stats-app.png"
                projectName="Formula One Statistics App"
                description="Built with Kotlin and Supabase for Android"
                imageOnRight={false} // Image on the left
            />
            <ProjectComp
                githubLink="https://github.com/DominicOrsi/Multiplayer-Yahtzee"
                imagePath="/assets/multiplayer-yahtzee.png"
                projectName="Multiplayer Yahtzee"
                description="Built with Java and Java Swing"
                imageOnRight={true} // Image on the right
            />
            <ProjectComp
                githubLink="https://github.com/DominicOrsi/Apache-Guacamole-Server"
                imagePath="/assets/apache-gauc-shell.png"
                projectName="Apache Guacamole Script"
                description="Shell script to configure and setup Apache Guacamole server"
                imageOnRight={false} // Image on the left
            />
            <ProjectComp
                githubLink="https://github.com/DominicOrsi/Linux-Mint-Setup"
                imagePath="/assets/mint-shell.png"
                projectName="Linux Mint Install Script"
                description="Shell script to configure install and packages onto Linux Mint"
                imageOnRight={true} // Image on the right
            />
        </div>
    )
}