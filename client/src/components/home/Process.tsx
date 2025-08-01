const processSteps = [
	{
		step: 1,
		title: "Form a Team",
		description: "Create a team of up to 4 with minimum one medical and one engineering student",
	},
	{
		step: 2,
		title: "Submit Proposal",
		description: "Watch videos of faculty members explaining the themes and submit up to 1 proposal per registration",
	},
	{
		step: 3,
		title: "Get Selected",
		description: "Upto 15 teams will be shortlisted for competing with funding support of Rs. 10,000 for the prototype",
	},
];

const processStepsBelow = [
	{
		step: 4,
		title: "Building Prototype",
		description: "Develop your working model with weekly mentoring",
	},
	{
		step: 5,
		title: "Offline Finals",
		description: "Present your prototype at JIPMER in the final round",
	},
];

import { motion } from "framer-motion";

const Process = () => {
	return (
		<section className="py-16 bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 digital-noise">
			<div className="container mx-auto px-4">
				<motion.h2
					className="text-3xl md:text-4xl font-bold mb-16 text-center dark:text-white text-glow"
					initial={{ opacity: 0, y: -20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
				>
					The Process
				</motion.h2>

				{/* Process flowchart */}
				<div className="max-w-5xl mx-auto relative">
					{/* Circuit background */}
					<div className="absolute inset-0 w-full h-full -z-10">
						<svg
							className="w-full h-full"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
						>
							<path
								d="M0,50 L100,50"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="1"
								strokeDasharray="5,5"
							/>
							<path
								d="M50,0 L50,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="1"
								strokeDasharray="5,5"
							/>
							<path
								d="M0,25 L100,25"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M0,75 L100,75"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M25,0 L25,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
							<path
								d="M75,0 L75,100"
								stroke="rgba(79, 70, 229, 0.1)"
								strokeWidth="0.5"
								strokeDasharray="3,3"
							/>
						</svg>
					</div>

					<div className="flex flex-wrap justify-center gap-6">
						{[...processSteps, ...processStepsBelow].map((step, index) => (
							<motion.div
								key={index}
								className="flex-1 min-w-[250px] max-w-xs backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-lg p-6 shadow-lg hover:shadow-glow border border-blue-200 dark:border-blue-800 relative scanner-line mx-auto"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								whileHover={{
									scale: 1.02,
									boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
								}}
							>
								<div className="hexagon w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center mb-6 mx-auto">
									<span className="font-bold text-lg">{step.step}</span>
								</div>

								<h3 className="text-lg font-bold mb-3 dark:text-white text-center">
									<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
										{step.title}
									</span>
								</h3>

								<p className="text-sm text-gray-600 dark:text-gray-300 text-center">
									{step.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>

				
			</div>
		</section>
	);
};

export default Process;
