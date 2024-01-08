import React from "react";

export default function Experience() {
    return (
        <div id="experience" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Experience</h2>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-bold text-slate-100">Assistant System Administrator</p>
                        <p className="text-md">Gonzaga University</p>
                        <p className="text-xs text-slate-400">December 2021 - May 2024</p>
                    </div>
                    <p className="text-sm">I have extensive experience supporting a diverse community of 500+ students and faculty in their day-to-day operations and lab activities. Additionally, I have successfully implemented a custom Linux image to cater to the needs of over 100 students across two classrooms, ensuring efficient software and hardware deployment. My expertise also extends to configuring and automating software and operating systems, as well as proactively maintaining and upgrading them to guarantee optimal performance and security.</p>
                </div>
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <div className="flex flex-col gap-4">
                    <div>
                        <p className="font-bold text-slate-100">Fiber Optic Technician</p>
                        <p className="text-md">Rock Island Communications</p>
                        <p className="text-xs text-slate-400">May 2023 - August 2023</p>
                    </div>
                    <p className="text-sm">I have hands-on experience in installing both outside plant and in-home fiber-optic services, including the splicing and patching of customers' fiber optic connections to seamlessly integrate them into the network. Additionally, I am proficient in troubleshooting communication issues and ensuring smooth interactions with customers directly at their locations.</p>
                </div>
            </div>
        </div>
    )
}