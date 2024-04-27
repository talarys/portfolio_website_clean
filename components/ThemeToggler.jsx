"use client"

import { Button } from "./ui/button"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

const ThemeToggler = () => {
	const { theme, setTheme } = useTheme()
	return (
		<div>
			<Button
				variant="outline"
				className="rounded-full p-5"
				onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			>
				<SunIcon className="h-5 w-5 absolute transition-all dark:scale-0 scale-100 rotate-0 dark:-rotate-90" />
				<MoonIcon className="h-5 w-5 absolute transition-all scale-0 dark:scale-100 rotate-90 dark:rotate-0 " />
			</Button>
		</div>
	)
}

export default ThemeToggler
