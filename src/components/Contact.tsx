import React from "react";

export default function Contact() {
    return (
        <div id="contact" className="flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl pb-12">Contact Me</h2>
            <form
                action="https://getform.io/f/e2a50985-fb7e-404b-9a77-86650bf6c070"
                method="POST"
                className="flex flex-col w-full"
            >
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    required
                />
                <textarea
                    name="message"
                    placeholder="Message"
                    rows="10"
                    className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    required
                />
                <button className="text-center inline-block px-8 py-3 w-max text-base rounded-md bg-blue-900">
                    Contact Me
                </button>
            </form>
        </div>
    )
}