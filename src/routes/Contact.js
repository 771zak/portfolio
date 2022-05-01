import React from "react";
import {motion} from "framer-motion";
import {RoutesAnimation} from "./RoutesAnimation";

const Contact = () => {
	return (
		<motion.div
			variants={RoutesAnimation}
			animate="visible"
			initial="hidden"
			exit="exit"
		>
			<p>hello from contact page</p>
		</motion.div>
	)
}

export default Contact;
