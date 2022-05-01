import React, { useState, useEffect } from "react";
import {HeaderContainer} from "./style/Header.style";
import {Link, NavLink} from "react-router-dom";
import Logo from "./Logo.js";
import {motion} from "framer-motion";
import sunny from "../assets/sunny.png";
import moon from "../assets/moon.png";

const Header = (props) => {
	const [showMenu, setShowMenu] = useState(false);
	const [navBar, setNavBar] = useState(false);

	//change the navbar background on scroll
	const changeHeaderBackground = () => {
		if (window.scrollY >= 60) {
			setNavBar(true);
		} else {
			setNavBar(false);
		}
	}

	useEffect(() => {
		window.addEventListener("scroll", changeHeaderBackground)
	})

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30
	};

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	}

		return (
			<HeaderContainer scrolled={navBar}>
				<Link to="/">
					<Logo />
				</Link>
			<div className={`nav${showMenu ? " activeNav" : ""}`}>
				<NavLink 
					onClick={toggleMenu}
					activeClassName="selected" 
					to="/"
				>Home</NavLink>
				<NavLink 
					activeClassName="selected" 
					onClick={toggleMenu}
					to="/projects"
				>Projects</NavLink>
				<NavLink 
					onClick={toggleMenu}
					activeClassName="selected" 
					to="/contact"
				>Contact me</NavLink>
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
				<motion.div className="handle" layout transition={spring}>
					<img src={props.theme ? sunny : moon } alt="" />
				</motion.div>
			</div>
		</HeaderContainer>
	)
};


export default Header;
