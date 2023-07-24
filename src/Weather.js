import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
	let [city, setCity] = useState("");
	let [loaded, setLoaded] = useState(false);
	let [result, setResult] = useState("");

	function displayResult(response) {
		setLoaded(true);
		setResult({
			temperature: response.data.main.temp,
			wind: response.data.wind.speed,
			humidity: response.data.main.humidity,
			icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
			description: response.data.weather[0].description,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		let apiKey = "094780c710fa4efd669f0df8c3991927";
		let units = "metric";
		let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
		axios.get(apiUrl).then(displayResult);
	}

	function updateCity(event) {
		setCity(event.target.value);
	}
	let form = (
		<form onSubmit={handleSubmit}>
			<input
				type="search"
				placeholder="Enter a city..."
				onChange={updateCity}
			/>
			<input type="submit" value="Search" />
		</form>
	);

	if (loaded) {
		return (
			<div class="SearchEngine">
				{form}
				<ul>
					<li> Temperature: {Math.round(result.temperature)}°C</li>
					<li> Description: {result.description} </li>
					<li> Humidity: {result.humidity}%</li>
					<li> Wind: {result.wind}km/h</li>
					<li>
						{" "}
						<img src={result.icon} alt="Weather-Icon" />
					</li>
				</ul>
			</div>
		);
	} else {
		return form;
	}
}
