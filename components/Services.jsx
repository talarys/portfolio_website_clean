import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import Dot from "./Dot"

import { servicesData } from "@/lib/constants"

const Services = () => {
	return (
		<section className="py-12 lg:py-20 xl:py-40">
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
