import { FaReact, FaNodeJs, FaSass, FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux, SiMongodb, SiVite } from "react-icons/si";

export const data = [
  {
    image: "src/assets/real-estate-project.png",
    name: "Real Estate",
    description: "Responsive website for finding real estates.",
    technologies: [
      <FaReact fontSize={30} className="mr-3" />,
      <FaNodeJs fontSize={30} className="mr-3" />,
      <RiTailwindCssFill fontSize={30} className="mr-3" />,
      <SiRedux fontSize={30} className="mr-3" />,
      <SiMongodb fontSize={30} className="mr-3" />,
      <FaHtml5 fontSize={30} className="mr-3" />,
      <SiVite fontSize={30} className="mr-3" />,
    ],
    link: "https://node-real-estate.netlify.app/",
    frontend_code: "https://github.com/Nderim45/estate-frontend",
    backend_code: "https://github.com/Nderim45/estate-backend",
  },
  {
    image: "src/assets/better-eat-project.png",
    name: "Better Eat",
    description: "Responsive website for ordering food.",
    technologies: [
      <FaReact fontSize={30} className="mr-3" />,
      <FaNodeJs fontSize={30} className="mr-3" />,
      <RiTailwindCssFill fontSize={30} className="mr-3" />,
      <SiRedux fontSize={30} className="mr-3" />,
      <SiMongodb fontSize={30} className="mr-3" />,
      <FaHtml5 fontSize={30} className="mr-3" />,
      <SiVite fontSize={30} className="mr-3" />,
    ],
    link: "https://better-eat.netlify.app/",
    frontend_code: "https://github.com/Nderim45/better-eat",
    backend_code: "https://github.com/Nderim45/better-eat-backend",
  },
  {
    image: "src/assets/incorporate-tax-project.png",
    name: "Incorporate Tax",
    description: "Responsive website for tax solutions.",
    technologies: [
      <FaReact fontSize={30} className="mr-3" />,
      <FaSass fontSize={30} className="mr-3" />,
      <FaHtml5 fontSize={30} className="mr-3" />,
      <SiVite fontSize={30} className="mr-3" />,
    ],
    link: "https://incorporate-tax.netlify.app/",
    frontend_code: "https://github.com/Nderim45/incorporate-tax",
  },
  {
    image: "src/assets/portfolio-project.png",
    name: "Portfolio",
    description: "Responsive portfolio website.",
    technologies: [
      <FaReact fontSize={30} className="mr-3" />,
      <FaHtml5 fontSize={30} className="mr-3" />,
      <SiVite fontSize={30} className="mr-3" />,
    ],
    link: "https://incorporate-tax.netlify.app/",
    frontend_code: "https://github.com/Nderim45/portfolio",
  },
];
