import {
	RiGithubFill,
	RiLinkedinFill,
	RiDiscordFill,
	RiWhatsappFill,
} from "react-icons/ri"

import {
	LuUser2,
	LuMail,
	LuHome,
	LuPhoneCall,
	LuGraduationCap,
	LuCalendar,
} from "react-icons/lu"

import {
	SiHtml5,
	SiCss3,
	SiJavascript,
	SiTypescript,
	SiRust,
	SiHaskell,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiShadcnui,
	SiJest,
	SiExpress,
	SiMongodb,
	SiFigma,
	SiPython,
	SiBun,
} from "react-icons/si"
export const links = [
	{ path: "/", name: "home" },
	{ path: "/projects", name: "my projects" },
	{ path: "/contact", name: "contact" },
]

export const socialLinks = [
	{
		path: "https://discordapp.com/users/213340078301249536",
		name: <RiDiscordFill />,
	},
	{ path: "https://www.linkedin.com/in/talarys/", name: <RiLinkedinFill /> },
	{ path: "https://wa.me/34633199788", name: <RiWhatsappFill /> },
	{ path: "https://github.com/talarys/", name: <RiGithubFill /> },
]

export const infoData = [
	{ icon: <LuUser2 size={20} />, text: "Soso Simon" },
	{ icon: <LuMail size={20} />, text: "d.simon.ssx0@gmail.com" },
	{ icon: <LuHome size={20} />, text: "Tarragona, Spain" },
	{ icon: <LuPhoneCall size={20} />, text: "+34 633199788" },
	{ icon: <LuGraduationCap size={20} />, text: "CompSci at URV 2020" },
	{ icon: <LuCalendar size={20} />, text: "Born on 11 Oct, 1997" },
]

export const educationData = [
	{
		university: "Universitat Rovirra i Virgili",
		qualification: "Bachelors Degree in Computer Science",
		years: "2016 - 2020",
	},
]

export const experienceData = [
	{
		company: "ABC Inc",
		role: "Fullstack Webdev",
		years: "2020 - 2022",
	},
	{
		company: "XYZ Inc",
		role: "Fullstack Webdev",
		years: "2022 - 2023",
	},
	{
		company: "IJK Inc",
		role: "Fullstack Webdev",
		years: "2023 - Present",
	},
]

export const skillData = [
	{ name: "HTML", icon: <SiHtml5 /> },
	{ name: "CSS", icon: <SiCss3 /> },
	{ name: "Javascript", icon: <SiJavascript /> },
	{ name: "Typescript", icon: <SiTypescript /> },
	{ name: "Python", icon: <SiPython /> },
	{ name: "Rust", icon: <SiRust /> },
	{ name: "Haskell", icon: <SiHaskell /> },
	{ name: "Bun", icon: <SiBun /> },
	{ name: "React", icon: <SiReact /> },
	{ name: "NextJS", icon: <SiNextdotjs /> },
	{ name: "TailwindCSS", icon: <SiTailwindcss /> },
	{ name: "ShadCn", icon: <SiShadcnui /> },
	{ name: "Jest", icon: <SiJest /> },
	{ name: "Express", icon: <SiExpress /> },
	{ name: "MongoDB", icon: <SiMongodb /> },
	{ name: "Figma", icon: <SiFigma /> },
]
