import Image from "next/image";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import NavBar from "./components/NavBar";
import Experience from "./components/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCertificate,
  faEnvelope,
  faHand,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faInstagram,
  faLaravel,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./components/ScrollReveal/ScrollReveal";
import ContentTitle from "./components/ContentTitle";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div>
        <NavBar
          menuItems={[
            { title: "Home", link: "#" },
            { title: "About Me", link: "#" },
            { title: "Experience", link: "#" },
            { title: "Projects", link: "#" },
          ]}
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-7">
          <div className="mt-40">
            <div className="mb-10 gap-2 flex animate-bounce">
              <FontAwesomeIcon icon={faHand} size="xl" color="#5FB899" />
              <span>Hey! It's me Adrian,</span>
            </div>
            <div className="font-boldonse text-5xl">
              <span className="">
                Always follow{" "}
                <span className="text-[#5FB899]">your heart.</span>
              </span>
              <br />
              <div className="my-8">
                But, <span className="text-[#5FB899]">remember</span> bring your
              </div>
              <span className="text-[#5FB899]">brain too.</span>
            </div>
            <hr className="opacity-30 my-15" />
            <div className="flex gap-4 group">
              <div className="flex gap-2 opacity-100 group-hover:opacity-30 hover:opacity-100 transition-all duration-500">
                <FontAwesomeIcon icon={faInstagram} size="xl" />
                <span>adrianakbar._.r</span>
              </div>
              <div className="flex gap-2 opacity-100 group-hover:opacity-30 hover:opacity-100 transition-all duration-500">
                <FontAwesomeIcon icon={faGithub} size="xl" />
                <span>adrianakbar</span>
              </div>
              <div className="flex gap-2 opacity-100 group-hover:opacity-30 hover:opacity-100 transition-all duration-500">
                <FontAwesomeIcon icon={faEnvelope} size="xl" />
                <span>armojkece123</span>
              </div>
              <div className="flex gap-2 opacity-100 group-hover:opacity-30 hover:opacity-100 transition-all duration-500">
                <FontAwesomeIcon icon={faLinkedin} size="xl" />
                <span>Adrian Akbar Ramadhani</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-5">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>

      <ContentTitle title="About Me" icon={faStar} center={true} />
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
        textClassName="text-center"
      >
        Hello My name is Adrian Akbar Ramadhani I am a 6th-semester Information
        Technology student at Universitas Jember with a strong passion for
        full-stack development. With hands-on project experience, I thrive in
        collaborative environments, demonstrating dedication, perseverance, and
        a results-driven mindset. My goal is to master full-stack development
        across both mobile and web platforms.
      </ScrollReveal>

      <ContentTitle title="Experience" icon={faStar} />
      <Experience
        events={[
          {
            date: "November 23rd - 25th, 2018",
            name: "Hack Western 5",
            location: "London, Ontario",
            description:
              "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
            icon: "/assets/infinite-learning.png",
          },
          {
            date: "September 14th - 16th, 2018",
            name: "Hack The North",
            location: "Waterloo, Ontario",
            description:
              "Developed a mobile application which delivers university campus wide events in real time to all students.",
            icon: "/assets/alazhar-logo.png",
            size: 10,
          },
          {
            date: "March 23rd - 24th, 2018",
            name: "FirstNet Public Safety Hackathon",
            location: "San Francisco, California",
            description:
              "Developed a mobile application which communicates a victim's medical data from inside an ambulance to doctors at hospital.",
            icon: "/assets/ukmo-logo.png",
            size: 10,
          },
          {
            date: "February 3rd - 4th, 2018",
            name: "DeveloperWeek Hackathon",
            location: "San Francisco, California",
            description:
              "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
            icon: "/assets/programmer-logo.jpg",
            github: "https://github.com/your-repo",
          },
        ]}
      />

      <ContentTitle title="My Projects" icon={faStar} center={true} />
      <div>
        <div className="text-2xl">Selected Projects</div>
        <div className="opacity-40 my-5">
          Here's a curated selection showcasing my expertise and the achieved
          results.
        </div>
        <div>
          <ProjectCard
            title="Aora"
            status="Development"
            year="2024"
            image="/assets/infinite-learning.png"
          />
          <div className="gap-2 flex">
            <div className="bg-[#5FB899] p-3 rounded-xl inline-block text-xs text-black">
              <div className="gap-2 flex">
                <FontAwesomeIcon icon={faLaravel} size="lg" />
                <span>Laravel</span>
              </div>
            </div>
            <div className="bg-[#5FB899] p-3 rounded-xl inline-block text-xs text-black">
              <div className="gap-2 flex">
                <FontAwesomeIcon icon={faLaravel} size="lg" />
                <span>Laravel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
