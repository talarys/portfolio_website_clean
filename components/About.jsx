import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { LuGraduationCap, LuBriefcase } from "react-icons/lu"
import Dot from "./Dot"
import DevImgAlt from "./DevImgAlt"
import {
	infoData,
	experienceData,
	educationData,
	skillData,
} from "@/lib/constants"
const About = () => {
	return (
		<section className="px-4 container xl:py-40 relative">
			{/* Text */}
			<div className="flex items-center gap-x-2 justify-center">
				<Dot />
				<h2 className="section-title">About me</h2>
			</div>

			{/* DevImg */}
			<div className="flex justify-center">
				<div className="hidden xl:flex flex-1">
					<DevImgAlt />
				</div>

				<div className="flex-1 mt-4 lg:mt-12">
					<Tabs defaultValue="personal">
						<TabsList className="w-full grid md:grid-cols-3 md:max-w-[520px] md:border mx-auto ">
							<TabsTrigger value={"personal"}>Personal info</TabsTrigger>
							<TabsTrigger value={"qualifications"}>Qualifications</TabsTrigger>
							<TabsTrigger value={"skills"}>Skills</TabsTrigger>
						</TabsList>
						<div className="text-lg lg:mt-12 w-fit mx-auto text-center xl:text-left">
							{/* Personal Tab */}
							<TabsContent value="personal">
								<div>
									<h3 className="h3 mb-4">
										Unmatched Service Quality for Over 3 Years
									</h3>
									<p className="subtitle max-w-xl max-auto xl:mx-0">
										I specialize in crafting intuitive websites with
										cutting-edge technologies, delivering dynamic and engaging
										user experiences.
									</p>
									<div className="grid xl:grid-cols-2 gap-4 mb-12">
										{infoData.map((item, index) => (
											<div
												key={index}
												className="flex items-center gap-x-4 mx-auto xl:mx-0"
											>
												<div className="text-primary">{item.icon}</div>
												<div>{item.text}</div>
											</div>
										))}
									</div>
									<div className="flex flex-col gap-y-2">
										<div className="text-primary">Languages I speak</div>
										<div className="border-b border-border" />
										<div>English, Spanish, Catalan, Georgian</div>
									</div>
								</div>
							</TabsContent>
							{/* Qualifications Tab */}
							<TabsContent value="qualifications">
								<h3 className="h3 mb-8 text-center xl:text-left">
									My Awesome Journey
								</h3>
								{/* Experience */}
								<div className="flex gap-x-4 items-center text-xl text-primary mb-5">
									<LuBriefcase />
									<h4 className="capitalize font-medium">Experience</h4>
								</div>
								{experienceData.map((ex, index) => {
									const { company, role, years } = ex
									return (
										<div className="flex gap-x-8 group mb-6" key={index}>
											<div className="h-20 w-1 bg-border relative ml-2">
												<div className="w-3 h-3 rounded-full bg-primary absolute -left-1 group-hover:translate-y-20 transition-all duration-500" />
											</div>
											<div className="flex flex-col gap-y-2">
												<div className="font-semibold text-xl leading-none">
													{company}
												</div>
												<div className="text-lg leading-none text-muted-foreground">
													{role}
												</div>
												<div className="text-base font-medium">{years}</div>
											</div>
										</div>
									)
								})}
								{/* Education */}
								<div className="flex gap-x-4 items-center text-xl text-primary mb-5">
									<LuGraduationCap />
									<h4 className="capitalize font-medium">Education</h4>
								</div>
								{educationData.map((ed, index) => {
									const { qualification, university, years } = ed
									return (
										<div className="flex gap-x-8 group mb-6" key={index}>
											<div className="h-20 w-1 bg-border relative ml-2">
												<div className="w-3 h-3 rounded-full bg-primary absolute -left-1 group-hover:translate-y-20 transition-all duration-500" />
											</div>
											<div className="flex flex-col gap-y-2">
												<div className="font-semibold text-xl leading-none">
													{qualification}
												</div>
												<div className="text-lg leading-none text-muted-foreground">
													{university}
												</div>
												<div className="text-base font-medium">{years}</div>
											</div>
										</div>
									)
								})}
							</TabsContent>
							{/* Skills Tab */}
							<TabsContent value="skills">
								<div className="text-center xl:text-left">
									<h3 className="h3 mb-8">Tools I Use Everyday</h3>
									<div className="">
										<h4 className="h4 mb-2">Skills</h4>
										<div className="border-b border-border mb-4" />
										<div className="grid grid-cols-2">
											{skillData.map((skill, i) => (
												<div
													key={i}
													className="flex gap-x-2 items-center justify-center text-xl my-1"
												>
													{skill.icon}
													{skill.name}
												</div>
											))}
										</div>
									</div>
								</div>
							</TabsContent>
						</div>
					</Tabs>
				</div>
			</div>
		</section>
	)
}

export default About
