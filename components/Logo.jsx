import Link from "next/link"
import { BsFillTerminalFill } from "react-icons/bs"
const Logo = () => {
	return (
		<Link className="flex items-center gap-x-1 text-xl" href="/">
			<BsFillTerminalFill />
			talarys
		</Link>
	)
}

export default Logo
