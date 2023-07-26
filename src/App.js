import "./App.css";
import React from "react";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Local Weather</h1>
				<Weather />
				<a href="https://github.com/allysearles/React-Weather-Application.git">
					Open-Source Code, by Ally Searles{" "}
				</a>
			</header>
		</div>
	);
}

export default App;
