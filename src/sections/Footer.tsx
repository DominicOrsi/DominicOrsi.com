import React from "react";

export default function Footer() {
    const curYear = new Date().getFullYear()
    return (
        <footer className="flex flex-col justify-center text-center gap-8 max-w-lg border-t-2 border-slate-700 pt-8">
            <div className="text-slate-400">
                <p> © {curYear} Dominic Orsi. All rights reserved.</p>
            </div>
            <p>Made with 🫶 by Dominic Orsi</p>
        </footer>
    )
}