import { PiUsersThreeFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { FaTools } from "react-icons/fa";

import workallies from "../assets/Images/workallies.png";
import delizia from "../assets/Images/delizia.png";
import clicky from "../assets/Images/clicky.png";
import Dublezi from "../assets/Images/Dublezi.webp";
export const SKILLS = [
  {
    title: "Frontend",
    icon: <PiUsersThreeFill />,
    skills: [
      { skill: "Html5", percentage: "90%" },
      { skill: "Css3", percentage: "90%" },
      { skill: "JavaScript", percentage: "85%" },
      { skill: "React.js", percentage: "80%" },
      { skill: "Vue.js", percentage: "80%" },
      { skill: "Redux", percentage: "80%" },
      { skill: "Next.js", percentage: "80%" },
      { skill: "TypeScript", percentage: "70%" },
    ],
  },
  {
    title: "Backend",
    icon: <FaServer />,
    skills: [
      { skill: "Php", percentage: "75%" },
      { skill: "Laravel", percentage: "75%" },
    ],
  },
  {
    title: "Data Base",
    icon: <GrDatabase />,
    skills: [{ skill: "Mysql", percentage: "70%" }],
  },
  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { skill: "Git, Gitlab & GitHub", percentage: "85%" },
      { skill: "Visual Studio Code", percentage: "85%" },
      { skill: "Responsive Design", percentage: "100% " },
    ],
  },
];

export const work_Experience = [
  {
    title: "React.js Intern At Lionup Digital:",
    date: "16 Sep • 16 Dec",
    responsibilities: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.",
    ],
  },
  {
    title: "React developer At Upwork:",
    date: "Oct - 2023 • Present",
    responsibilities: [
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "WorkAllies - Freelance Based platform",
    description:
      "Designed and developed a Pakistan-based freelance marketplace similar to Fiverr. The platform includes secure authentication, project posting, bidding, and payment features to connect freelancers with clients seamlessly.",
    skill: "Laravel • MySql",
    img: workallies,
    link: "https://www.workallies.com"
  },
  {
    title: "Delizia - Dessert Brand",
    description:
      "Designed and developed an e-commerce website for Delizia, a chocolate-based milkshake and dessert brand. The platform allows browse products, customize orders, and place purchases with a smooth experience.",
    skill: "React js • Laravel • MySql",
    img: delizia,
    link: "https://delizia.pk"
  },
  {
    title: "Clicky - Ecommerce Platform",
    description: "Developed an e-commerce platform Clicky offering men’s fashion including t-shirts, shoes, and accessories. The website provides a smooth shopping experience with easy navigation, secure checkout, and modern UI design.",
    skill: "React js • Laravel • MySql",
    img: clicky,
    link: "https://www.clicky.pk/",
  },
  {
    title: "Dublezi - Charity Based platform",
    link: "https://www.dublezi.com",
    description:
      "Dublezi is a charity-based platform where users participate in trivia games for a chance to win money. A portion of the donations supports charitable organizations in Romania. The goal was to create a gamified approach to fundraising.",
    skill: "React js • Laravel • MySql",
    img: Dublezi,
  },
];
