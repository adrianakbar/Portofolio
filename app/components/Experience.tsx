import Image from "next/image";

interface ExperienceProps {
  date: string;
  name: string;
  location: string;
  description: string;
  icon: string;
  github?: string;
}

export default function Experience({ events }: { events: ExperienceProps[] }) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="border-l-2 pl-10">
        {events.map((event, index) => (
          <div key={index} className="relative mb-8">
            <div className="absolute -left-18 top-0 flex items-center justify-center w-15 h-15 rounded-full bg-gray-100">
              <img
                src={event.icon}
                alt={event.name}
                className="w-13 h-13 rounded-full"
              />
            </div>
            <p className="text-gray-500 text-sm">{event.date}</p>
            <h3 className="text-lg font-semibold">{event.name}</h3>
            <p className="text-gray-600">{event.location}</p>
            <p className="text-gray-700">{event.description}</p>
            {event.github && (
              <a
                href={event.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center px-3 py-1 text-white bg-black rounded-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.648.5.5 5.648.5 12c0 5.096 3.298 9.412 7.872 10.942.575.108.785-.25.785-.553 0-.273-.011-1.155-.016-2.099-3.201.695-3.878-1.543-3.878-1.543-.523-1.328-1.277-1.681-1.277-1.681-1.042-.712.079-.697.079-.697 1.153.081 1.758 1.185 1.758 1.185 1.023 1.752 2.684 1.247 3.34.954.104-.741.4-1.248.728-1.536-2.55-.289-5.235-1.275-5.235-5.673 0-1.254.448-2.277 1.184-3.077-.119-.29-.514-1.454.112-3.03 0 0 .967-.31 3.17 1.174a11.047 11.047 0 012.886-.389c.98.005 1.965.13 2.886.389 2.202-1.484 3.168-1.174 3.168-1.174.627 1.576.232 2.74.113 3.03.737.8 1.182 1.823 1.182 3.077 0 4.408-2.689 5.382-5.247 5.667.412.352.777 1.05.777 2.116 0 1.527-.014 2.759-.014 3.134 0 .306.208.666.792.552A11.512 11.512 0 0023.5 12c0-6.352-5.148-11.5-11.5-11.5z" />
                </svg>
                Github
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
