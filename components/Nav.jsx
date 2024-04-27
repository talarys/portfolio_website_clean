import { links } from "@/lib/constants"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

const Nav = ({ containerStyles, linkStyles, underLineStyles }) => {
	const path = usePathname()
	return (
		<div className={`${containerStyles}`}>
			{links.map((link, index) => (
				<Link
					href={link.path}
					key={link.name}
					className={`capitalize ${linkStyles}`}
				>
					{link.path === path && (
						<motion.span
							initial={{ y: "-100%" }}
							animate={{ y: 0 }}
							transition={{ type: "tween" }}
							layoutId="underline"
							className={`${underLineStyles}`}
						/>
					)}
					{link.name}
				</Link>
			))}
		</div>
	)
}

export default Nav
