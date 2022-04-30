import Styled from "styled-components";

export const HeaderContainer = Styled.div`
	width: 100%;
	height: 7vh;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	.nav {
		width: 40%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-evenly;

		a {
			color: ${props => props.theme.text};
			text-decoration: none;
			padding: 10px;
			border-radius: 10px;
			position: relative;
			&::before {
				content: '';
				position: absolute;
				width: 0;
				height: 2px;
				background: #333;
				bottom: 5px;
				left: 0;
				transition: .3s ease;
			}
			&:hover::before {
				background-color: ${props => props.theme.first};
				width: 100%;
			}
		}

		.active::before {
			width: 100%;
		}
	}

	.themetoggle, .dark {
		width: 60px;
		height: 30px;
		background: #333;
		display: flex;
		align-items: center;
		border-radius: 20px;
		justify-content: flex-start;
		
		.handle {
			width: 40%;
			height: 70%;
			background: #999;
			border-radius: 10px;
			margin: 0 10%;
		}
	}
	.light {
		justify-content: flex-end;
		.handle {
			background: yellow;
		}

	}
	.burgerMenu {
		display: none;
		width: 40px;
		height: 30px;
		flex-direction: column;
		justify-content: space-around;
		cursor: pointer;
		span {
			width: 100%;
			height: 3px;
			border-radius: 10px;
			background-color: ${props => props.theme.text};
		}
	}

	@media (max-width: 800px) {
		.nav {
			display: none;
			position: absolute;
			background-color: ${props => props.theme.second};
			flex-direction: column;
			top: 7vh;
			height: 200px;
			border-radius: 10px;
			width: 90%;
			z-index: 3;
			box-shadow: 2px 2px 10px #555;

			a {
				width: 100%;
				text-align: center;
			}
			
			.active {
				text-align: center;
			}
		}

		.activeNav {
			display: flex;
		}
		.logo {
			width: 210px;
			height: auto;
		}

		.burgerMenu {
			display: flex;
		}
	}
`

