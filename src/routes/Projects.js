import React from "react";
import {motion} from "framer-motion"
import {RoutesAnimation} from "./RoutesAnimation";

const Projects = () => {
	return (
		<motion.div
			variants={RoutesAnimation}
			animate="visible"
			initial="hidden"
			exit="exit"
		>
			<h2>hello from Projects</h2>
		</motion.div>
	)
}

export default Projects;
