import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ContentTitleProps {
  title: string;
  icon: IconDefinition;
  center?: boolean;
  marginTop?: string;
  id: string;
}

export default function ContentTitle({ title, icon, center, marginTop, id}: ContentTitleProps) {
  return (
    <div className={`mb-10 gap-2 flex animate-bounce ${center ? "justify-center" : ""} ${marginTop} text-[#5FB899]`} id={id}>
      <FontAwesomeIcon icon={icon} size="xl" />
      <span>{title}</span>
    </div>
  );
}