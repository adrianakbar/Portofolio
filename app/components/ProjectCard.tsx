import Image from "next/image";

interface ProjectCardProps {
  title: string;
  status: string;
  year: string;
  image: string;
}

export default function ProjectCard({ title, status, year, image }: ProjectCardProps) {
  return (
    <div className="bg-black p-5 rounded-2xl max-w-sm">
      <div className="bg-yellow-100 p-5 rounded-xl flex justify-center">
        <Image src={image} alt={title} width={300} height={200} className="rounded-xl" />
      </div>
      <div className="mt-4">
        <h3 className="text-white text-lg font-semibold">{title}</h3>
        <div className="flex justify-between mt-2">

        <p className="text-gray-400">{status}</p>
        <p className="text-gray-400 text-sm ">{year}</p>
        </div>
      </div>
    </div>
  );
}
