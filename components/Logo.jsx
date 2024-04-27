import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import { ChevronRight } from "lucide-react"

const Logo = () => {
	return (
		<Link className="flex items-center" href="/">
			<ChevronLeft height={20} />
			talarys
			<ChevronRight height={20} />
		</Link>
	)
}

export default Logo
