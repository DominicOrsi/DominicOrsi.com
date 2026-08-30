import React from "react";
import ExperienceComp from "./components/ExperienceComp";



export default function Experience() {
    return (
        <div id="experience" className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl">
            <h2 className="font-gloria text-2xl ">Experience</h2>
            <div className="flex flex-col gap-8">
                <ExperienceComp
                    jobTitle="Linux Systems Engineer"
                    company="Expeditors"
                    startToEndDate="October 2024 - Present"
                    bullets={[
                        "Maintain 3,500+ Unix/Linux servers across a global infrastructure, ensuring 99.99% uptime through automated patching and proactive monitoring.",
                        "Designed and built an internal web dashboard consolidating 5 CLI tools into a single role-based interface, adopted by 20+ engineers.",
                        "Developed automated alerting and inventory systems using Python and Ansible, reducing manual oversight and improving infrastructure visibility.",
                    ]}
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Junior System Administrator"
                    company="Gonzaga University"
                    startToEndDate="December 2021 - May 2024"
                    bullets={[
                        "Built and deployed a custom Linux image supporting 100+ students across multiple classroom environments.",
                        "Provided technical support to 500+ students and faculty, resolving hardware and software issues in day-to-day operations.",
                    ]}
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Fiber Optic Technician"
                    company="Rock Island Communications"
                    startToEndDate="May 2023 - August 2023"
                    bullets={[
                        "Installed and spliced outside plant and in-home fiber-optic connections, troubleshooting service issues on-site with customers.",
                    ]}
                />
            </div>
        </div>
    )
}
