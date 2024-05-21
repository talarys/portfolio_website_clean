import About from "@/components/About"
import { Hero } from "@/components/Hero"
import Services from "@/components/Services"

export default function Home() {
	return (
		<main className="snap-mandatory snap-y overflow-y-scroll h-screen">
			<div className="snap-center snap-always">
				<Hero />
			</div>
			<div className="snap-center snap-always">
				<About />
			</div>
			<div className="snap-center snap-always">
				<Services />
			</div>
		</main>
	)
}
