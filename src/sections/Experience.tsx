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
                        "Optimized the reliability of 3,500+ global Unix/Linux servers by designing and executing automated patching schedules, ensuring continuous security compliance for large-scale enterprise workloads.",
                        "Performed deep-dive troubleshooting and hardware/resource tuning (CPU, RAM, Swap) to accommodate growing production workloads and ensured 99.9% uptime.",
                        "Led the modernization of internal toolsets by migrating legacy scripts to Python 3, enhancing system maintainability and long-term compatibility.",
                        "Developed an automated alerting pipeline using Ansible and Python that detects when cybersecurity monitoring tools are offline or not running, and distributes email alerts to affected system owners and stakeholders.",
                        "Built an internal web dashboard used by 20+ engineers, consolidating 5 CLI tools (Active Directory user/group lookups, vSphere VM search via SOAP API, and a dynamic inventory system) behind a role-based access control system, eliminating context switching and standardizing access to critical infrastructure tooling.",
                        "Replaced a static YAML inventory file with a searchable, sortable database that auto-syncs via GitLab CI on each commit, giving the team real-time visibility into infrastructure inventory.",
                    ]}
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Junior System Administrator"
                    company="Gonzaga University"
                    startToEndDate="December 2021 - May 2024"
                    bullets={[
                        "Constructed and deployed a custom Linux image that served over 100 students in multiple classroom environments.",
                        "Supported 500+ students and faculty with software and hardware in day-to-day operations and labs.",
                    ]}
                />
                <hr className="h-px w-9/12 bg-slate-200 self-center" />
                <ExperienceComp
                    jobTitle="Fiber Optic Technician"
                    company="Rock Island Communications"
                    startToEndDate="May 2023 - August 2023"
                    bullets={[
                        "Installed outside plant and in-home fiber-optic services, including splicing and patching customer fiber optic connections into the network.",
                        "Troubleshot communication issues and interfaced directly with customers at their locations.",
                    ]}
                />
            </div>
        </div>
    )
}
