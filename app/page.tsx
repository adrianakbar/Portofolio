import Image from "next/image";
import Lanyard from "./components/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import { NavBar } from "./components/NavBar";

export default function Home() {
  return (
    <div className="container mx-auto">
      <div>
        <NavBar
          menuItems={[
            { title: "Home", link: "#" },
            { title: "About", link: "#" },
            { title: "Projects", link: "#" },
            { title: "Contact", link: "#" },
          ]}
        />
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-6 content-center">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold">I Work in the Field of</h1>
            <RotatingText
              texts={[
                "Web Development",
                "Android Development",
                "Security Research",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 bg-[#292929] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-xl font-bold inline-flex trantition-all"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <div>
            <h1 className="text-lg w-5/6 mt-5">
              Hello My name is Adrian Akbar Ramadhani I am a 6th-semester
              Information Technology student at Universitas Jember with a strong
              passion for full- stack development.
              <br />
              <br />
              With hands-on project experience, I thrive in collaborative
              environments, demonstrating dedication, perseverance, and a
              results-driven mindset. My goal is to master full-stack
              development across both mobile and web platforms.
            </h1>
          </div>
        </div>
        <div className="col-span-6">
          <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
        </div>
      </div>
    </div>
  );
}
