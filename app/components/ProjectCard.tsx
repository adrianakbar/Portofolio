import Image from "next/image";
import TiltedCard from "./TiltedCard/TiltedCard";

interface ProjectCardProps {
  imageSrc: string;
  captionText: string;
  overlayContent: string;
  projectName: string;
  projectBuild: string;
  projectYear: number;
}

export default function ProjectCard({
  imageSrc,
  captionText,
  overlayContent,
  projectName,
  projectBuild,
  projectYear,
}: ProjectCardProps) {
  return (
    <div>
      <TiltedCard
        imageSrc={imageSrc}
        altText={captionText}
        captionText={captionText}
        containerHeight="350px"
        containerWidth="500px"
        imageHeight="350px"
        imageWidth="500px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={true}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text">{overlayContent}</p>
        }
      />
      <div className="mt-4">
        <h3 className="text-white text-lg font-semibold">{projectName}</h3>
        <div className="flex justify-between mt-2">
          <p className="text-gray-400">{projectBuild}</p>
          <p className="text-gray-400 text-sm">{projectYear}</p>
        </div>
      </div>
    </div>
  );
}
