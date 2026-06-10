import React from "react";

interface ExperienceAttributes {
    jobTitle: string;
    company: string;
    startToEndDate: string;
    bullets: string[];
}

export default function ExperienceComp({ jobTitle, company, startToEndDate, bullets }: ExperienceAttributes) {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-lg text-slate-100">{jobTitle}</p>
                <p className="text-md">{company}</p>
                <p className="text-xs text-slate-400">{startToEndDate}</p>
            </div>
            <ul className="list-disc list-inside text-sm flex flex-col gap-1">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
        </div>
    )
}
