import Form from "@/components/Form"
import { LuMail, LuHome, LuPhoneCall } from "react-icons/lu"
const Contact = () => {
	return (
		<section>
			<div className="container mx-auto min-h-[95vh]">
				<div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
					<div className="flex flex-col justify-center">
						<div className="flex items-center gap-x-4 text-primary text-lg mb-4">
							<span className="w-[30px] h-[2px] bg-primary" />
							Say Hello 🖐️
						</div>
						<h1 className="h1 w-fit mb-8">Let's Work Together.</h1>
						<p className="subtitle max-w-[400px]">
							Get in touch with us, your trusted partner for web development
							services. Contact us today to discuss your project and let's bring
							it to life!
						</p>
					</div>
					<div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat" />
				</div>
				{/* Info text and forms */}
				<div className="grid xl:grid-cols-2">
					{/* Info text */}
					<div className="flex flex-col gap-y-4 xl:gap-x-14 mb-12 xl:mb-24 text-base xl:text-lg ">
						{/* Mail */}
						<div className="flex items-center gap-x-8">
							<LuMail className="text-primary" />
							<div>d.simon.ssx0@gmail.com</div>
						</div>
						{/* Address*/}
						<div className="flex items-center gap-x-8">
							<LuHome className="text-primary" />
							<div>Tarragona, Spain</div>
						</div>
						{/* Mail */}
						<div className="flex items-center gap-x-8">
							<LuPhoneCall className="text-primary" />
							<div>+34 633 19 97 88</div>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</section>
	)
}

export default Contact
