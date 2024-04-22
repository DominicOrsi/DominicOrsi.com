import React from "react";

interface ExperienceAttributes {
    jobTitle: string;
    company: string;
    startToEndDate: string;
    description: string;
}

export default function ExperienceComp({jobTitle, company, startToEndDate, description}: ExperienceAttributes) {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <p className="text-lg text-slate-100">{jobTitle}</p>
                <p className="text-md">{company}</p>
                <p className="text-xs text-slate-400">{startToEndDate}</p>
            </div>
            <p className="text-sm">&emsp;&ensp;{description}</p>
        </div>
    )
}