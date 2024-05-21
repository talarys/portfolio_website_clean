import { LuGanttChartSquare, LuGem, LuBookLock } from "react-icons/lu"

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Dot from "./Dot"

const servicesData = [
	{
		icon: <LuGanttChartSquare size={72} strokeWidth={0.8} />,
		title: "Web Design",
		summary:
			"Elevate Your Online Presence with Our Expert Web Design Services.",
		description:
			" Create a stunning website that showcases your brand's unique personality. Our team of killed designers will work closely with you to bring your vision to life.",
	},
	{
		icon: <LuBookLock size={72} strokeWidth={0.8} />,
		title: "Web Development",
		summary: "Transform Your Business with Custom Web Design Solutions.",
		description:
			"Take your online presence to the next level with our expert web design services. From responsive websites to e-commerce solutions, we've got you covered. ",
	},
	{
		icon: <LuGem size={72} strokeWidth={0.8} />,
		title: "App Development",
		summary:
			"Unlock the Full Potential of Your Online Brand with Our Professional Web Design Services.",
		description:
			"Get a website that truly reflects your brand's values and mission. Our team of talented designers will work tirelessly to create a custom solution that drives results.",
	},
]

const Services = () => {
	return (
		<section className="h-[100vh] py-12 lg:py-20 xl:py-40">
			<div className="container mx-auto">
				{/* Section Title */}
				<div className="section-title flex gap-x-2 items-center mb-12 xl:mb-24 mx-auto">
					<Dot />
					<h2>My Services</h2>
				</div>
				{/* Grid */}
				<div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
					{servicesData.map(({ icon, title, summary, description }, index) => (
						<Card
							key={index}
							className="w-full flex flex-col md:pb-10 justify-center items-center relative"
						>
							<CardHeader className="text-primary absolute -top-16">
								<div className="w-36 h-20 bg-background flex justify-center items-center rounded-lg">
									{icon}
								</div>
							</CardHeader>

							<CardContent className="text-center pt-12">
								<CardTitle className="mb-4">{title}</CardTitle>
								<CardDescription className="text-lg">
									<div>{summary}</div>
									<div className="hidden lg:flex">{description}</div>
								</CardDescription>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
