import React from "react";

export default function Contact() {
    return (
        <div id="contact" className="flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl pb-12">Contact Me</h2>
            <p>Please send an email to <a className="hover:decoration-dashed underline" href="mailto:hello@dominicorsi.com">hello@dominicorsi.com</a></p>
        </div>
    )
}