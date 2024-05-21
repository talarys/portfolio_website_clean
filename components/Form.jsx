"use client"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import {
	LuUser,
	LuMail,
	LuArrowBigRight,
	LuMessageSquare,
} from "react-icons/lu"

const Form = () => {
	return (
		<form className="flex flex-col gap-y-4">
			<div className="relative flex items-center">
				<Input type="name" id="name" placeholder="Name" />
				<LuUser className="absolute right-6 " />
			</div>
			<div className="relative flex items-center">
				<Input type="email" id="email" placeholder="Email" />
				<LuMail className="absolute right-6 " />
			</div>
			<div className="relative flex items-center">
				<Textarea type="text" id="text" placeholder="Message" />
				<LuMessageSquare className="absolute top-4 right-6 " />
			</div>
			<Button className="bg-primary/90">Let's Talk</Button>
		</form>
	)
}

export default Form
