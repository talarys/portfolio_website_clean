import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet"
import { LuAlignJustify } from "react-icons/lu"
import Nav from "./Nav"
import Logo from "./Logo"
import Socials from "./Socials"

const MobileNav = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<LuAlignJustify />
			</SheetTrigger>
			<SheetContent>
				<div className="flex flex-col items-center justify-between h-full py-8">
					<div className="flex flex-col gap-y-32 items-center">
						<Logo />
						<Nav
							containerStyles={"flex flex-col items-center gap-y-6"}
							linkStyles={"text-2xl"}
						/>
					</div>
					<Socials containerStyles={"flex gap-x-4"} iconsStyles={"text-2xl"} />
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default MobileNav
