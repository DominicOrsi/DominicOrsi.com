import React from "react";
import ProjectComp from "./components/ProjectComp";
import CertificationComp from "./components/CertificationComp";

export default function ProjectsCertifications() {
  return (
    <div
      id="projects-certifications"
      className="flex flex-col p-8 gap-8 rounded-lg outline outline-2 outline-slate-400 max-w-screen-2xl"
    >
      <h2 className="font-gloria text-2xl ">Projects & Certifications</h2>
      <ProjectComp
        webpageLink="https://github.com/DominicOrsi/DominicOrsi.com"
        imagePath="/assets/portfolio.png"
        projectName="Portfolio Website"
        description="Built with React, TailwindCSS, and TypeScript"
        imageOnRight={false} // Image on the left
      />
      <ProjectComp
        webpageLink="https://github.com/dominicorsi/dino.computer"
        imagePath="/assets/homelab.svg"
        projectName="Homelab - dino.computer"
        description="Built with Proxmox, Ansible, HCL, and curiosity"
        imageOnRight={true}
      />
      <hr className="h-px w-full bg-slate-200" />
      <CertificationComp
        certLink="https://www.credly.com/badges/1e3bc68d-16a1-4242-a905-79c555622479/linked_in_profile"
        imagePath="/assets/aws-certified-solutions-architect-associate.svg"
        certName="AWS Certified Solutions Architect – Associate"
        earnedDate="August 2026"
        expiryDate="August 2029"
      />
    </div>
  );
}
