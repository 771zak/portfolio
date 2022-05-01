import React, { useState } from 'react';
import {Container} from "./components/style/Container.style";
import Header from "./components/Header";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import { Routes, Route, useLocation} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";
import {AnimatePresence} from "framer-motion";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
		font-size: 1rem;
		background-color: ${props => props.theme.body};
		color: ${props => props.theme.text};
		font-family: courier, sans serif;
		overflow-x: hidden;
	}

	::-webkit-scrollbar {
		width: 10px;
	}

	::-webkit-scrollbar-track {
		background-color: #555;
	}

	::-webkit-scrollbar-thumb {
		background-color: #888;
		border-radius: 10px;
		transition: .3s ease;
		&:hover {
			background-color: #777;
		}
	}

	h1, a {
		font-size: 1.2rem;
	}
`

const darkTheme = {
	body: "#0E153A",
	text: "#E2F3F5",
	first: "#3D5AF1",
	second: "#22D1EE",
}

const lightTheme = {
		body: "#E2F3F5",
		text: "#0E153A",
		first: "#3D5AF1",
		second: "#22D1EE",
}

const App = () => {
	const [theme, setTheme] = useState(true);

	const location = useLocation();

	const themeToggler = () => {
		setTheme(!theme)
	}

    return (
			<ThemeProvider theme={theme ? darkTheme : lightTheme}>
				<Container>
					<GlobalStyle/>
					<Header themeToggler={themeToggler} theme={theme}/>
					<AnimatePresence>
						<Routes location={location} key={location.key}>
							<Route path="/" element={<Home/>} />
							<Route path="/projects" element={<Projects/>} />
							<Route path="/contact" element={<Contact/>} />
						</Routes>
					</AnimatePresence>
				</Container>
			</ThemeProvider>
    );
}

export default App;
