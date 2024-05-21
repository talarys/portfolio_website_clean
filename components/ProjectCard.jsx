import Image from "next/image"
import React from "react"
import { Card, CardHeader } from "./ui/card"
import { Badge } from "./ui/badge"
import Link from "next/link"

const ProjectCard = ({ image, name, description, link }) => {
	return (
		<Card className="relative hover:scale-110 transition-all m-4">
			<Link href={link}>
				<CardHeader className="p-0 overflow-clip rounded-t-3xl">
					<div className="relative w-full h-[300px] flex items-center justify-center dark:bg-secondary/40 bg-work_project_bg_light xl:dark:bg-work_project_bg_dark bg-primary/20">
						<Image
							src={image}
							className="absolute top-10 rounded-t-xl shadow-2xl"
							width={250}
							height={312}
							alt="website"
							priority
						/>
					</div>
				</CardHeader>
				<div className="px-8 py-6">
					<Badge
						className={
							"uppercase text-sm font-medium mb-2 absolute top-4 left-5"
						}
					>
						NextJS
					</Badge>
					<h4 className="h4 mb-1">{name}</h4>
					<p className="text-muted-foreground text-lg">{description}</p>
				</div>
			</Link>
		</Card>
	)
}

export default ProjectCard
