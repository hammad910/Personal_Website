import { PiUsersThreeFill } from "react-icons/pi";
import { FaServer } from "react-icons/fa6";
import { GrDatabase } from "react-icons/gr";
import { FaTools } from "react-icons/fa";

import shoesImg from '../assets/Images/shoes store.png'
import accessoriesImg from '../assets/Images/accessories.png'
export const SKILLS = [
    {
        title: "Frontend",
        icon: <PiUsersThreeFill />,
        skills: [
            { skill: 'Html5', percentage: '90%' },
            { skill: 'Css3', percentage: '90%' },
            { skill: 'JavaScript', percentage: '85%' },
            { skill: 'React.js', percentage: '80%' },
            { skill: 'Redux', percentage: '80%' },
            { skill: 'Next.js', percentage: '80%' },
            {skill: 'TypeScript', percentage: '70%'},
        ]
    },
    {
        title: "Backend",
        icon: <FaServer />,
        skills: [
            { skill: 'Nodejs', percentage: '80%' },
            { skill: 'Expressjs', percentage: '75%' },
        ]
    },
    {
        title: "Data Base",
        icon: <GrDatabase />,
        skills: [
            { skill: 'MongoDB', percentage: '70%' },
        ]
    },
    {
        title: "Tools",
        icon: <FaTools />,
        skills: [
            { skill: 'Git, Gitlab & GitHub', percentage: '85%' },
            { skill: 'Visual Studio Code', percentage: '85%' },
            { skill: 'Responsive Design', percentage: '100% ' },
        ]
    },
]

export const work_Experience = [
    {
        title: "React.js Intern At Lionup Digital:",
        date: "16 Sep • 16 Dec",
        responsibilities: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        ],
    },
    {
        title: "React developer At Upwork:",
        date: "Oct - 2023 • Present",
        responsibilities: [
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", " The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here."
        ],
    },
]

export const PROJECTS = [
    // {
    //     title: "Acceccories Ecommerce Store",
    //     skill: "React.js • Css",
    //     // link: "https://facebook.com",
    //     status: "Complete",

    // },
    {
        title: "Shoes Ecommerce Store",
        skill: "Next.js • Redux • Tailwind",
        img: shoesImg,
        link: "https://personal-ecommerce-frontend-9hfy.vercel.app/",
        status: "Not Complete!",
    },
    {
        title: "Accessories Ecommerce Store",
        skill: "React.js • Css",
        img: accessoriesImg,
        link: "https://accessories-store-frontend.vercel.app/",
        status: "Completed..",
    },
]