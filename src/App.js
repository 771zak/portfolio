import React, { useState, useEffect} from 'react';
import {Container} from "./components/style/Container.style";
import Header from "./components/Header";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import { Routes, Route} from "react-router-dom";
import {createGlobalStyle, ThemeProvider} from "styled-components";

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

	const themeToggler = () => {
		setTheme(!theme)
	}

    return (
			<ThemeProvider theme={theme ? darkTheme : lightTheme}>
				<Container>
					<GlobalStyle/>
					<Header themeToggler={themeToggler} theme={theme}/>
					<Routes>
						<Route path="/" element={<Home/>} />
						<Route path="/projects" element={<Projects/>} />
						<Route path="/contact" element={<Contact/>} />
					</Routes>
				</Container>
			</ThemeProvider>
    );
}

export default App;
