import Link from "next/link"
import { Button } from "./ui/button"
import {
	RiBriefcase4Fill,
	RiTeamFill,
	RiTodoFill,
	RiArrowDownSLine,
} from "react-icons/ri"

import { LuDownload, LuSend } from "react-icons/lu"

import DevImg from "./DevImg"
import Badge from "./Badge"
import Socials from "./Socials"

export const Hero = () => {
	return (
		<section className="py-12 lg:py-24 h-[84vh] lg:pt-28 bg-primary-foreground relative">
			<div className="container mx-auto">
				<div className="flex gap-x-8">
					{/* Text */}
					<div className="flex max-w-[600px] flex-col justify-center mx-auto lg:mx-0 lg:text-left text-center">
						<div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
							Fullstack WebDev
						</div>
						<h1 className="h1 mb-4">Hello, my name is Soso Simon</h1>
						<p className="subtitle max-w-[490px] mx-auto lg:mx-0">
							I'm a fullstack developer who mainly uses NextJS + TailwindCSS
						</p>
						{/* Buttons */}
						<div className="flex gap-x-3 gap-y-3 flex-col md:flex-row mx-auto lg:mx-0 mb-12">
							<Link href="/contact">
								<Button className="gap-x-2">
									Contact Me
									<LuSend size={18} />
								</Button>
							</Link>
							<Link href="/cv.pdf">
								<Button variant="secondary" className="gap-x-2">
									Download CV
									<LuDownload size={18} />
								</Button>
							</Link>
						</div>
						{/* Socials */}
						<Socials
							containerStyles="flex gap-x-6 mx-auto lg:mx-0"
							iconsStyles={
								"text-foreground text-[22px] hover:text-primary transition-all"
							}
						/>
					</div>
					<div className="hidden lg:flex relative">
						{/* Image */}
						<Badge
							containerStyles={"absolute top-[24%] -left-12 pr-6 "}
							icon={<RiBriefcase4Fill />}
							endCountNum={3}
							badgeText={"Years Of Experience"}
						/>
						<Badge
							containerStyles={"absolute top-[70%] -left-[1rem]"}
							icon={<RiTodoFill />}
							endCountNum={30}
							endCountText={"+"}
							badgeText={"Finished Projects"}
						/>
						<Badge
							containerStyles={"absolute top-[55%] -right-20"}
							icon={<RiTodoFill />}
							endCountNum={40}
							endCountText={"+"}
							badgeText={"Happy Clients"}
						/>
						<DevImg />
					</div>
				</div>
				{/* Icon */}
				<div className="hidden md:flex absolute left-1/2 bottom-44 lg:bottom-1/2 animate-bounce">
					<RiArrowDownSLine className="text-3xl text-primary" />
				</div>
			</div>
			<svg
				className="fill-background absolute bottom-0"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<title>wave</title>
				<path
					fill-opacity="1"
					d="M0,160L80,176C160,192,320,224,480,202.7C640,181,800,107,960,101.3C1120,96,1280,160,1360,192L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
				/>
			</svg>
		</section>
	)
}
