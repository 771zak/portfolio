import React from "react";

//styles
import styles from "./styles/LandingPage.module.css";

const LandingPage = () => {
	return (
		<div className={styles.container} id="about">
			<div className={styles.nameContainer}>
				<h1 className={styles.name}>Zakria Mosbahi</h1>
			</div>
			<span className="devider-line"></span>
		</div>
	);
};

export default LandingPage;
