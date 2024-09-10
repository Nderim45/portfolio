import { FaReact, FaNodeJs, FaSass, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiMongodb, SiVite, SiStreamlit } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import realEstateImage from "../assets/real-estate-project.png";
import betterEatImage from "../assets/better-eat-project.png";
import incorporateTaxImage from "../assets/incorporate-tax-project.png";
import portfolioImage from "../assets/portfolio-project.png";
import roomImage from "../assets/room-project.png";

export const data = [
  {
    image: realEstateImage,
    name: "Real Estate",
    description: "Responsive website for finding real estates.",
    technologies: [
      { icon: <FaReact fontSize={30} className="mr-3" />, name: "React.js" },
      { icon: <FaNodeJs fontSize={30} className="mr-3" />, name: "Node.js" },
      {
        icon: <RiTailwindCssFill fontSize={30} className="mr-3" />,
        name: "TailwindCSS",
      },
      { icon: <SiRedux fontSize={30} className="mr-3" />, name: "Redux" },
      { icon: <SiMongodb fontSize={30} className="mr-3" />, name: "MongoDB" },
      { icon: <FaHtml5 fontSize={30} className="mr-3" />, name: "HTML" },
      { icon: <SiVite fontSize={30} className="mr-3" />, name: "Vite" },
    ],
    link: "https://node-real-estate.netlify.app/",
    frontend_code: "https://github.com/Nderim45/estate-frontend",
    backend_code: "https://github.com/Nderim45/estate-backend",
  },
  {
    image: betterEatImage,
    name: "Better Eat",
    description: "Responsive website for ordering food.",
    technologies: [
      { icon: <FaReact fontSize={30} className="mr-3" />, name: "React.js" },
      { icon: <FaNodeJs fontSize={30} className="mr-3" />, name: "Node.js" },
      {
        icon: <RiTailwindCssFill fontSize={30} className="mr-3" />,
        name: "TailwindCSS",
      },
      { icon: <SiRedux fontSize={30} className="mr-3" />, name: "Redux" },
      { icon: <SiMongodb fontSize={30} className="mr-3" />, name: "MongoDB" },
      { icon: <FaHtml5 fontSize={30} className="mr-3" />, name: "HTML" },
      { icon: <SiVite fontSize={30} className="mr-3" />, name: "Vite" },
    ],
    link: "https://better-eat.netlify.app/",
    frontend_code: "https://github.com/Nderim45/better-eat",
    backend_code: "https://github.com/Nderim45/better-eat-backend",
  },
  {
    image: incorporateTaxImage,
    name: "Incorporate Tax",
    description: "Responsive website for tax solutions.",
    technologies: [
      { icon: <FaReact fontSize={30} className="mr-3" />, name: "React.js" },
      { icon: <FaSass fontSize={30} className="mr-3" />, name: "Sass" },
      { icon: <FaHtml5 fontSize={30} className="mr-3" />, name: "HTML" },
      { icon: <SiVite fontSize={30} className="mr-3" />, name: "Vite" },
    ],
    link: "https://incorporate-tax.netlify.app/",
    frontend_code: "https://github.com/Nderim45/incorporate-tax",
  },
  {
    image: portfolioImage,
    name: "Portfolio",
    description: "Responsive portfolio website.",
    technologies: [
      { icon: <FaReact fontSize={30} className="mr-3" />, name: "React.js" },
      { icon: <FaHtml5 fontSize={30} className="mr-3" />, name: "HTML" },
      { icon: <SiVite fontSize={30} className="mr-3" />, name: "Vite" },
    ],
    link: "https://incorporate-tax.netlify.app/",
    frontend_code: "https://github.com/Nderim45/portfolio",
  },
  {
    image: roomImage,
    name: "Room",
    description: "Zoom meetings clone.",
    technologies: [
      {
        icon: <RiNextjsFill fontSize={30} className="mr-3" />,
        name: "Next.js",
      },
      {
        icon: <RiTailwindCssFill fontSize={30} className="mr-3" />,
        name: "TailwindCSS",
      },
      { icon: <FaHtml5 fontSize={30} className="mr-3" />, name: "HTML" },
      {
        icon: <BiLogoTypescript fontSize={30} className="mr-3" />,
        name: "TypeScript",
      },
      {
        icon: <SiStreamlit fontSize={30} className="mr-3" />,
        name: "getstream.io",
      },
    ],
    link: "https://roommeet.netlify.app/",
    frontend_code: "https://github.com/Nderim45/zoom-clone",
  },
];
