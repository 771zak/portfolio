import React from "react";
// import {motion} from "framer-motion";
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
				<div className="landing-bio">
					<h1>Hello, I'm <span>Zak</span></h1>
					<p>
						I’m a frontend developer,
						from <a href="#" target="_blank">Khenchela, Algeria.</a> 
						Interested in building interactive & modern websites.
						<a href="/contact">Contact me</a> for work.
					</p>
				</div>
				<CodeSvg/>
			</div>
			<div className="skills">
			</div>
		</HomeContainer>
	)
}

export default Home;

