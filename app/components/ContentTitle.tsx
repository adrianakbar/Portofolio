import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContentTitleProps {
  title: string;
  icon: IconDefinition;
  center?: boolean;
}

export default function ContentTitle({ title, icon, center }: ContentTitleProps) {
  return (
    <div className={`mb-10 gap-2 flex animate-bounce ${center ? "justify-center" : ""} text-[#5FB899]`}>
      <FontAwesomeIcon icon={icon} size="xl" />
      <span>{title}</span>
    </div>
  );
}