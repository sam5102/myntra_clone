const toggleTheme = () => {
    const body = document.body;
    const nav = document.getElementById("nav_bar")
    const a_tag = document.querySelectorAll("[id='a_tag']")
    const moon = document.getElementById("moon")
    const sun = document.getElementById("sun")
    
    nav.classList.toggle('dark-mode')
    moon.classList.toggle("dark-mode")
    sun.classList.toggle("dark-mode")
    
    for (let i = 0; i < a_tag.length; i++) {
        const element = a_tag[i];
        console.log(element);
        element.classList.toggle('dark-mode')
    }

    const icons = document.querySelectorAll("[id='nav_icon']")
        for (let i = 0; i < icons.length; i++) {
        const element = icons[i];
        console.log(element);
        element.classList.toggle('dark-mode')
    }
    
}

//for coupon information
async function loadCoupon() {
    document.getElementById('coupon').style.display = 'block';
    document.getElementById('main').style.opacity = '0.6';
    checkLocation()
}

function closeCoupon(){
    document.getElementById('coupon').style.display = 'none';
    document.getElementById('main').style.opacity='1';
}

//geo location
// const checkLocation = () => {
//     if (navigator.geolocation) { 
//         navigator.geolocation.getCurrentPosition(showPosition)
//     } else {
//         console.log("Geo location not supported")
//     }
// }

const showPosition = async (data) => { 
    console.log(data);
    let lat = data.coords.latitude
    let long = data.coords.longitude
    console.log(`Your current lat is ${lat} and long is ${long}`);

    //weather api
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=10&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    const weatherData = await fetch(url, { method: 'GET' })
    const getData = await weatherData.json()
    console.log(getData, getData.city.name, getData.list);
}