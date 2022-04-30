import React, { useState } from "react";
import {HeaderContainer} from "./style/Header.style";
import {Link, NavLink} from "react-router-dom";
import Logo from "./Logo.js";
import {motion} from "framer-motion";

const Header = (props) => {
	const [showMenu, setShowMenu] = useState(false);

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	}

		return (
		<HeaderContainer>
				<Link to="/">
					<Logo />
				</Link>
			<div className={`nav${showMenu ? " activeNav" : ""}`}>
				<NavLink activeClassName="selected" to="/">Home</NavLink>
				<NavLink activeClassName="selected" to="/projects">Projects</NavLink>
				<NavLink activeClassName="selected" to="/contact">Contact me</NavLink>
			</div>
			<div 
				className="burgerMenu"
				onClick={toggleMenu}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div className={`themetoggle${props.theme ? " dark" : " light"}`} onClick={props.themeToggler} >
				<motion.div className="handle" layout transition={spring}></motion.div>
			</div>
		</HeaderContainer>
	)
};


export default Header;
