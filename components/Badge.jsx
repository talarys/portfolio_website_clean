"use client"
import CountUp from "react-countup"

const Badge = ({
	containerStyles,
	icon,
	endCountNum,
	endCountText,
	badgeText,
}) => {
	return (
		<div
			className={`${containerStyles} z-10 bg-background opacity-90 dark:backdrop-blur-[44px] shadow-2xl h-16 p-4 rounded-xl flex items-center gap-x-4 scale-90`}
		>
			<div className="text-3xl text-primary">{icon}</div>
			<div className="flex items-center gap-x-2">
				<div className="text-4xl leading-none font-bold text-primary">
					<CountUp end={endCountNum} delay={1} duration={4} />
					{endCountText}
				</div>
				<div className="max-w-[70px] leading-none text-[15px] font-medium ">
					{badgeText}
				</div>
			</div>
		</div>
	)
}

export default Badge
