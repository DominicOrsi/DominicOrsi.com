import React from "react";

interface CertificationAttributes {
  certLink: string;
  imagePath: string;
  certName: string;
  earnedDate: string;
  expiryDate: string;
}

const CertificationComp: React.FC<CertificationAttributes> = ({ certLink, imagePath, certName, earnedDate, expiryDate }) => {
  const imgClass = "h-32 rounded-md";
  const containerClass = "flex gap-6 w-full hover:-translate-y-3 transition-all ease-out duration-300";

  return (
    <a className={containerClass} href={certLink} target="_blank">
      <img src={imagePath} className={imgClass} />
      <div className="flex flex-col justify-center">
        <p className="text-slate-100 text-lg">{certName}</p>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Earned {earnedDate}</span>
          <span aria-hidden="true">&bull;</span>
          <span>Expires {expiryDate}</span>
        </div>
      </div>
    </a>
  );
};

export default CertificationComp;
