let fiveData;
let todayData;

async function getApi(event){
    event.preventDefault()
    const cityName = document.querySelector('#cityName').value
    const weather = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=a4d20a728b63e7469a525e2ba3e247e1`



    let answer = await fetch(weather)
    let data = await answer.json()

    let lat = data[0].lat
    let lon = data[0].lon

    console.log(lat)
    console.log(lon)

    let today = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a4d20a728b63e7469a525e2ba3e247e1`
    let forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a4d20a728b63e7469a525e2ba3e247e1`

    let todays = await fetch(today)
    let one = await todays.json()
    console.log (one)
    todayData = one

    let future = await fetch(forecast)
    let five = await future.json()
    console.log(five)
    fiveData = five
   
    predicted()
    now()
}

const search = document.querySelector('#button')
search.addEventListener('click', getApi)

function predicted() {
    for (i = 3; i < fiveData.list.length; i+=8){

    

    let weatherCards = document.createElement('section')
    weatherCards.setAttribute('class','card' )
    document.querySelector('#predicted').appendChild(weatherCards)


    let dates = document.createElement('h2')
    dates.textContent = `Date: ${fiveData.list[i].dt_txt}`

    let weatherSymbol = document.createElement('h2')
    if (fiveData.list[i].weather[0].main === 'Clouds'){
        weatherSymbol.textContent = '☁'
    }else if (fiveData.list[i].weather[0].main === "Clear"){
        weatherSymbol.textContent = '☀'
    }else if (fiveData.list[i].weather[0].main === "Rain"){
        weatherSymbol.textContent = '🌧'
    }else if (fiveData.list[i].weather[0].main === "Snow"){
        weatherSymbol.textContent = '🌨'
    }
    
    let temp = document.createElement('h3')
    temp.textContent = `Temperature ${fiveData.list[i].main.temp}K`
    let humidity = document.createElement('h3')
    humidity.textContent = `Humidity: ${fiveData.list[i].main.humidity}`
    let wind = document.createElement('h3')
    wind.textContent = `Wind: ${fiveData.list[i].wind.speed}`

    document.querySelector('.card').append(dates, temp, humidity, wind, weatherSymbol)
   
    }
}

function now() {
    let weatherCards = document.createElement('section')
    weatherCards.setAttribute('class','card' )
    document.querySelector('#now').appendChild(weatherCards)


    let dates = document.createElement('h2')
    dates.textContent = "Today's Weather"
    let weatherSymbol = document.createElement('h2')
    if (todayData.weather[0].main === "Clouds"){
        weatherSymbol.textContent = '☁'
    }else if (todayData.weather[0].main === "Clear"){
        weatherSymbol.textContent = '☀'
    }else if (todayData.weather[0].main === "Rain"){
        weatherSymbol.textContent = '🌧'
    }else if (todayData.weather[0].main === "Snow"){
        weatherSymbol.textContent = '🌨'
    }
    
    let temp = document.createElement('h3')
    temp.textContent = `Temperature ${todayData.main.temp}K`
    let humidity = document.createElement('h3')
    humidity.textContent = `Humidity: ${todayData.main.humidity}`
    let wind = document.createElement('h3')
    wind.textContent = `Wind: ${todayData.wind.speed}`

    document.querySelector('.card').append(dates, temp, humidity, wind, weatherSymbol)
}

