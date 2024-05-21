import Dot from "@/components/Dot"
import ProjectCard from "@/components/ProjectCard"
import { projectData } from "@/lib/constants"
const Projects = () => {
	return (
		<section className="pt-12 pb-20 container">
			<div className="flex gap-x-2 items-center w-fit mx-auto mb-12">
				<Dot />
				<h2 className="section-title">My Projects</h2>
			</div>
			<div className="grid my-20">
				{projectData.map((p, i) => (
					<ProjectCard key={i} {...p} />
				))}
			</div>
		</section>
	)
}

export default Projects
