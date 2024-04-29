"use client"

import { Button } from "./ui/button"
import { useTheme } from "next-themes"
import { RxMoon, RxSun } from "react-icons/rx"

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div>
			<Button
				variant="ghost"
				size="icon"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				<RxSun className="h-5 w-5 absolute transition-all dark:scale-0 scale-100 rotate-0 dark:-rotate-90" />
				<RxMoon className="h-5 w-5 absolute transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 " />
			</Button>
		</div>
	)
}

export default ThemeToggler
