"use client"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"

const Socials = ({ containerStyles, iconsStyles }) => {
	return (
		<div className={`${containerStyles}`}>
			{socialLinks.map((icon, index) => (
				<Link key={icon.path} href={icon.path}>
					<div className={`${iconsStyles}`}>{icon.name}</div>
				</Link>
			))}
		</div>
	)
}

export default Socials
