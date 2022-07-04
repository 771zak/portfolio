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
		
		.landing-bio {
			width: 40%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-start;
			h1 {
				font-size: 30pt;
				text-indent: 20px;
				span {
					color: ${props => props.theme.second};
				}
			}
			p {
				margin-top: 10px;
				text-indent: 10px;
				font-size: 18pt;
				line-height: 30px;
				width: 100%;
				a {
					text-decoration: none;
					color: ${props => props.theme.second};
					font-size: inherit;
					transition: .3s ease;
					 &:hover {
						color: pink;
					 }
				}
			}
		}

		.codeSvg {
			width: 600px;
		}
	}

	.skills {
		width: 100%;
		height: 100vh;
	}

`
