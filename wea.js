let data = null;
let flag = undefined;

function getWeather(place) {
    const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${place}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c43acfd60emsh6826e918f5a76b5p10ecb1jsn989f2ba7fd2a',
            'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
        }
    };


    fetch(url, options)
        .then(response => response.json())
        .then(response => {
            // console.log(response)
            data = response
            if (!data.hasOwnProperty('error')) {
                let header = document.getElementById('city-header')
                header.innerHTML = 'Showing Weather For ' + '`' + place + '`'
                sv(data)
            }
            else {
                let header = document.getElementById('city-header')
                header.innerHTML = 'No such place found!!!'
            }
        })
        .catch(err => console.log(err))
}

function sv(data) {
    const temp = document.getElementsByClassName('weather-data-t')
    temp[0].innerHTML = `${data.temp}&#176;C`
    temp[1].innerHTML = `Temperature is: ${data.temp}`
    temp[2].innerHTML = `Min Temperature is: ${data.min_temp}`
    temp[3].innerHTML = `Max Temperature is: ${data.max_temp}`

    const hinfo = document.getElementsByClassName('hinfo')
    hinfo[0].innerHTML = `${data.wind_degrees} &#176`
    hinfo[1].innerHTML = `Wind Degree: ${data.wind_degrees}`
    hinfo[2].innerHTML = `Feels Like: ${data.feels_like} &#176;C`
    hinfo[3].innerHTML = `Humidity is: ${data.humidity} &#176;C`

    const winfo = document.getElementsByClassName('winfo')
    winfo[0].innerHTML = `${data.wind_speed} Km/hr`
    winfo[1].innerHTML = `Wind Speed: ${data.wind_speed}`
    winfo[2].innerHTML = `Sunrise time is: ${data.sunrise}`
    winfo[3].innerHTML = `Sunset time is: ${data.sunset}`
}


window.addEventListener('load', async () => {
    getWeather('pune')
    document.getElementById('searcht').value = ""
    document.getElementById('ds').value = ""
})


const searchButton = document.getElementById('searchb')
let place = 'pune'

searchButton.addEventListener('click', () => {
    place = document.getElementById('searcht').value
    getWeather(place)
})

const searcht = document.getElementById('searcht')
searcht.addEventListener('keydown', (k) => {
    let place = document.getElementById('searcht').value
    if (k.key == 'Enter') {
        getWeather(place)
    }
})

const ham = document.getElementById('hams')
ham.addEventListener('click', () => {
    console.log('clicked ham')
})

const icon = document.getElementById('ham')
ham.addEventListener('click', () => {
    const drop1 = document.getElementById('drop1')
    drop1.classList.toggle('active')
})


const db = document.getElementById('db')
db.addEventListener('click', () => {
    let dp = document.getElementById('ds').value
    getWeather(dp)
})