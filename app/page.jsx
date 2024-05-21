import About from "@/components/About"
import Footer from "@/components/Footer"
import { Hero } from "@/components/Hero"
import Services from "@/components/Services"
import Cta from "@/components/Cta"

export default function Home() {
	return (
		<main>
			<Hero />
			<About />
			<Services />
			<Cta />
		</main>
	)
}
