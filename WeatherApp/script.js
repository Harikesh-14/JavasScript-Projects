const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bf876e7e1emsh6691ef6b755fd06p165117jsnd070e91df18c',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let place = document.getElementById('search')

const getWeather = () => {
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${(place.value).toLowerCase()}`, options)
		.then(response => response.json())
		.then((response) => {
			const temp = document.getElementById("temp")
			temp.innerText = `${response.temp}`
			const feels_like = document.getElementById("feels_like")
			feels_like.innerText = `${response.feels_like}`
			const humidity = document.getElementById("humidity")
			humidity.innerText = `${response.humidity}`
			const wind_speed = document.getElementById("wind_speed")
			wind_speed.innerText = `${response.wind_speed}`

			const wind_degrees = document.getElementById("wind_degrees")
			wind_degrees.innerText = `${response.wind_degrees}`

			const cloud_pct = document.getElementById("cloud_pct")
			cloud_pct.innerText = `${response.cloud_pct}`

			console.log(response)
		})
		.catch(err => console.error(err));
}

const searchBtn = document.getElementById('searchBtn')
const cityName = document.getElementById('cityName')

function titleCase(st) {
	return st.toLowerCase().split(" ").reduce((s, c) =>
		s + "" + (c.charAt(0).toUpperCase() + c.slice(1) + " "), '');
}

searchBtn.addEventListener('click', (e) => {
	e.preventDefault();
	getWeather(place.value)
	cityName.innerText = titleCase(place.value)
})