import React from "react";

interface ProjectAttributes {
    githubLink: string;
    imagePath: string;
    projectName: string;
    description: string;
    imageOnRight: boolean;
}

const ProjectCard: React.FC<ProjectAttributes> = ({ githubLink, imagePath, projectName, description, imageOnRight }) => {
  const imgClass = "h-32 rounded-md";
  const containerClass = "flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300";

  return (
    <a className={containerClass} href={githubLink} target="_blank">
      {imageOnRight ? (
        <>
          <div className="flex-row">
            <p className="text-slate-100 text-lg">{projectName}</p>
            <p className="text-sm">{description}</p>
          </div>
          <img src={imagePath} className={imgClass} />
        </>
      ) : (
        <>
          <img src={imagePath} className={imgClass} />
          <div className="flex-row-reverse">
            <p className="text-slate-100 text-lg">{projectName}</p>
            <p className="text-sm">{description}</p>
          </div>
        </>
      )}
    </a>
  );
};

export default ProjectCard;
