import React from "react";
import {motion} from "framer-motion";
import {RoutesAnimation} from "./RoutesAnimation";
import CodeSvg from "../components/CodeSvg";
import {HomeContainer} from "../components/style/HomeContainer.style";

const Home = () => {
	return (

		<HomeContainer
			variants={RoutesAnimation}
			animate="visible"
			initial="hidden"
			exit="exit"
		>
			<div className="landing">
				<h2>hello from Home</h2>
				<CodeSvg />
			</div>
			<div className="skills">
			</div>
		</HomeContainer>
	)
}

export default Home;

