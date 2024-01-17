import React from "react";

export default function Projects() {
    return (
        <div id="projects" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Projects</h2>
            <a className="flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300" href="https://github.com/DominicOrsi/F1-Stats-App" target="_blank">
                <img src="/assets/f1-stats-app.png" className="h-32 rounded-md" />
                <div className="flex-row">
                    <p className="text-slate-100 text-lg">Formula One Statistics App</p>
                    <p className="text-sm">Built with Kotlin and Supabase for Android</p>
                </div>
            </a>
            <a className="flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300" href="https://github.com/DominicOrsi/Multiplayer-Yahtzee" target="_blank">
                <div className="flex-row-reverse">
                    <p className="text-slate-100 text-lg">Multiplayer Yahtzee</p>
                    <p className="text-sm">Built with Java and Java Swing</p>
                </div>
                <img src="/assets/multiplayer-yahtzee.png" className="h-32 rounded-md" />
            </a>
            <a className="flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300" href="https://github.com/DominicOrsi/Apache-Guacamole-Server" target="_blank">
                <img src="/assets/apache-gauc-shell.png" className="h-32 rounded-md" />
                <div className="flex-row">
                    <p className="text-slate-100 text-lg">Apache Guacamole Script</p>
                    <p className="text-sm">Shell script to configure and setup Apache Guacamole server</p>
                </div>
            </a>
            <a className="flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300" href="https://github.com/DominicOrsi/Linux-Mint-Setup" target="_blank">
                <div className="flex-row-reverse">
                    <p className="text-slate-100 text-lg">Linux Mint Install Script</p>
                    <p className="text-sm">Shell script to configure install and packages onto Linux Mint</p>
                </div>
                <img src="/assets/mint-shell.png" className="h-32 rounded-md" />
            </a>
        </div>
    )
}