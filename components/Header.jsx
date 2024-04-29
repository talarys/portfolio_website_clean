"use client"
import ThemeToggler from "./ThemeToggler"
import Logo from "./Logo"
import Nav from "./Nav"
import MobileNav from "./MobileNav"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

const Header = () => {
	const [header, setHeader] = useState(false)
	const path = usePathname()

	useEffect(() => {
		const scrollYPos = window.addEventListener("scroll", () => {
			window.scrollY > 50 ? setHeader(true) : setHeader(false)
		})
		return () => window.removeEventListener("scroll", scrollYPos)
	}, [])
	return (
		<header
			className={`${
				header ? "py-4 shadow-lg" : "py-6 "
			} sticky top-0 z-30 transition-all ${
				path === "/" ? "bg-primary-foreground" : "bg-background"
			}`}
		>
			<div className="container mx-auto">
				<div className="flex justify-between items-center">
					{/* LeftLogo */}
					<Logo />
					{/*Right Nav+Toggle  */}
					<div className="flex items-center gap-x-6 ">
						<Nav
							containerStyles="hidden lg:flex gap-x-8 items-center"
							linkStyles="relative hover:text-primary transition-all"
							underLineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
						/>

						<ThemeToggler />
						<div className="lg:hidden">
							<MobileNav />
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
