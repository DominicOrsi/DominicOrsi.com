import React from "react";
import ExperienceComp from "./components/ExperienceComp";



export default function Experience() {
    return (
        <div id="experience" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Experience</h2>
            <div className="flex flex-col gap-8">
                <ExperienceComp
                    jobTitle="Associate System Administrator"
                    company="Expeditors"
                    startToEndDate="October 2024 - Present"
                    description="I managed 3,500+ Unix servers, ensuring reliability and efficient resource allocation across a global infrastructure. I performed system upgrades, including adding storage, RAM, CPU, and swap space, to enhance machine performance and support growing workloads. I proactively diagnosed and resolved system issues, minimizing downtime and ensuring continuous operations. Additionally, I developed automation solutions using Python, Bash, and Ansible playbooks, streamlining repetitive administrative tasks and freeing up valuable team time."
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="IT Customer Support"
                    company="Washington State Univeristy"
                    startToEndDate="May 2024 - September 2024"
                    description="I  provided technical assistance to 1,300+ students and faculty, ensuring the smooth operation of hardware, software, and network resources across university labs and offices. I managed and prioritized IT support tickets using Jira, escalating critical issues to maintain efficiency and streamline workflows. Additionally, I delivered phone and in-person support, guiding users through troubleshooting steps and documenting resolutions for future reference. I also assisted with system updates and software installations, ensuring compliance with university policies and security best practices."
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Junior System Administrator"
                    company="Gonzaga University"
                    startToEndDate="December 2021 - May 2024"
                    description="I have extensive experience supporting a diverse community of 500+ students and faculty in their day-to-day operations and lab activities. Additionally, I have successfully implemented a custom Linux image to cater to the needs of over 100 students across two classrooms, ensuring efficient software and hardware deployment. My expertise also extends to configuring and automating software and operating systems, as well as proactively maintaining and upgrading them to guarantee optimal performance and security."
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Fiber Optic Technician"
                    company="Rock Island Communications"
                    startToEndDate="May 2023 - August 2023"
                    description="I have hands-on experience in installing both outside plant and in-home fiber-optic services, including the splicing and patching of customers' fiber optic connections to seamlessly integrate them into the network. Additionally, I am proficient in troubleshooting communication issues and ensuring smooth interactions with customers directly at their locations."
                />
            </div>
        </div>
    )
}