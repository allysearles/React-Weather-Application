import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Local Weather</h1>
				<Weather />
			</header>
		</div>
	);
}

export default App;
