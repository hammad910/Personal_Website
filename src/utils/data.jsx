import { PiUsersThreeFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { FaTools } from "react-icons/fa";

import pdfImg from "../assets/Images/13- CityPDF.webp";
import holiday from "../assets/Images/holiday.webp";
import yieldr from "../assets/Images/yieldr.webp";
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
    title: "CityPDF - PDF conversion platform",
    description:
      "CityPDF is a comprehensive online platform that offers PDF-related tools such as merging, compressing editing, and converting PDF files. It focuses on simplicity, ease of use, and efficiency, catering to users who need quick and secure file handling solutions",
    skill: "React js • Laravel • MySql",
    img: pdfImg,
  },
  {
    title: "HolidayHub - Property Rental Platform",
    description:
      "This project have a user-friendly interface for listing and booking properties. Users can create profiles. The platform supports multiple payment gateways, secure transactions, real-time bookings, and integrating dynamic content from backend systems.",
    skill: "React js • Laravel • MySql",
    img: holiday,
  },
  {
    title: "Yieldr",
    description:"Landing page for financial advisor company.",
    skill: "React js • Laravel • MySql",
    img: yieldr,
  },
  {
    title: "Dublezi is a charity-based platform",
    link: "https://www.dublezi.com",
    description:"Dublezi is a charity-based platform where users participate in trivia games for a chance to win money. A portion of the donations supports charitable organizations in Romania. The goal was to create a gamified approach to fundraising, encouraging engagement through competitive rewards.",
    skill: "React js • Laravel • MySql",
    img: Dublezi,
  },
];
