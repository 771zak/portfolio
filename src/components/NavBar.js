import React from "react";

// styles
import styles from "./styles/NavBar.module.css";

const NavBar = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.logo}>771__zak</h1>
			<div className={styles.nav}>
				<a href="#about">About</a>
				<a href="#work">Work</a>
				<a href="#contact">Contact</a>
			</div>
		</div>
	);
};

export default NavBar;
