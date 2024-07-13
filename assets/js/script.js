const srchbtn = document.getElementById('searchButton')
const apiKey = 'e5e0ae10ea57a4b5d58bfa3d3dfe819a'
const TWDisplay = document.getElementById('todaysWeather')
const fiveDWDisplay = document.getElementById('5dayWeather')

function runWeatherApi() {
    const userInput = document.getElementById('search').value
    weatherAPI(userInput);
}

function display(){
    TWDisplay.style.border = "2px solid black"
    TWDisplay.style.width = "auto"
    TWDisplay.style.marginRight = "20%"
    TWDisplay.style.alignContent = "center"
    TWDisplay.style.fontSize = "20pt"
    TWDisplay.style.float = "right"
    TWDisplay.style.borderRadius = "10px"
    
}

const weatherAPI = function (city){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&cnt=10&units=imperial`)
    .then((res)=>{
        console.log(res)
        return res.json()
    }).then((data)=>{
        console.log(data) 
        console.log(data.main.temp)
        console.log(data.wind.speed)
        console.log(data.main.humidity)
        console.log(data.temp)
        function runWeatherDisplay(){
            const cityDisplay= document.createElement('h2')
            const temp = document.createElement('h3')
            const wind = document.createElement('h3')
            const humidity = document.createElement('h3');
            cityDisplay.innerText = city
            temp.innerText = `Temp: ${data.main.temp}f`
            wind.innerText = `Wind Speed: ${data.wind.speed}mph`
            humidity.innerText = `Humidity: ${data.main.humidity}%`
            TWDisplay.appendChild(cityDisplay)
            TWDisplay.appendChild(temp)
            TWDisplay.appendChild(wind)
            TWDisplay.appendChild(humidity)

        }
        runWeatherDisplay(city)
        display()
        // function runFiveDay(){
        //     let 
        // }

    }) 
    if (!runWeatherApi) {
        console.error('input invalid');
        return;
    }
    localStorage.setItem(city,'storedData')
}
srchbtn.addEventListener('click',runWeatherApi)


// function lastCities(displayData){
//     const displayData = localStorage.getItem('storedData')
//     const lastCityBtns = document.getElementById('lastCitybtn')
//     const createbutton = document.createElement('button')
//     lastCityBtns.appendChild(displayData)

// }
