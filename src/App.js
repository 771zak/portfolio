import logo from "./logo.svg";
import "./App.css";

// components
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";

function App() {
	return (
		<div className="App">
			<NavBar />
			<LandingPage />
		</div>
	);
}

export default App;
