import {
	RiGithubFill,
	RiLinkedinFill,
	RiDiscordFill,
	RiWhatsappFill,
} from "react-icons/ri"

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
