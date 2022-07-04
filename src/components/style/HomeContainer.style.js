import Styled from "styled-components";
import {motion} from "framer-motion";

export const HomeContainer = Styled(motion.div)`
	display: flex;
	flex-direction: column;
	overflow: auto;
	min-height: 93vh;

	.landing {
		width: 100%;
		height: 93vh;
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap: wrap;

		.codeSvg {
			width: 600px;
		}
	}

	.skills {
		width: 100%;
		height: 100vh;
		background: red;
	}

`
