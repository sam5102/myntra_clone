const toggleTheme = () => {
    const body = document.body;
    const nav = document.getElementById("nav_bar")
    const footer = document.getElementById("my_footer");
    const a_tag = document.querySelectorAll("[id='a_tag']")
    const moon = document.getElementById("moon")
    const sun = document.getElementById("sun")
    
    body.classList.toggle('dark-mode')
    nav.classList.toggle('dark-mode')
    moon.classList.toggle("dark-mode")
    sun.classList.toggle("dark-mode")
    footer.classList.toggle('dark-mode')
    
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
    document.getElementById('coupon').style.marginTop = '0px';
    document.body.style.overflow = 'hidden';
    document.getElementById('main').style.opacity = '0.6';
    checkLocation()
}

function closeCoupon(){
    document.getElementById('main').style.opacity = '0';
    setTimeout(function(){ 
        document.getElementById('coupon').style.display = 'none';
    }, 500);
    document.getElementById('main').style.opacity = '1';
    document.body.style.overflow = 'scroll';
}

// geo location
const checkLocation = () => {
    if (navigator.geolocation) { 
        navigator.geolocation.getCurrentPosition(showPosition)
    } else {
        console.log("Geo location not supported")
    }
}

const showPosition = async (data) => { 
    console.log(data);
    let lat = data.coords.latitude
    let long = data.coords.longitude
    console.log(`Your current lat is ${lat} and long is ${long}`);

    //weather api
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=1&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`

    const weatherData = await fetch(url, { method: 'GET' })
    const getData = await weatherData.json()
    const myTime = new Date().getHours()
    var myTemp;

    switch (myTime) {
        case myTime < 12:
            myTemp = getData.list[0].temp.morn
            break;
        case myTime >= 12 && myTime <= 17:
            myTemp = getData.list[0].temp.day
            break;
        case myTime >= 17 && myTime <= 20:
            myTemp = getData.list[0].temp.eve
            break;
        default:
            myTemp = getData.list[0].temp.night
    }

    document.getElementById("weather-info").innerHTML = Math.round(myTemp) + "&#8451;"
    console.log(getData, getData.list[0].temp, myTemp);
}


    // if (myTime < 12) {
    //     myTemp = getData.list[0].temp.morn
    // } else if (myTime >= 12 && myTime <= 17) {
    //     myTemp = getData.list[0].temp.day
    // } else if (myTime >= 17 && myTime <= 20) {
    //     myTemp = getData.list[0].temp.eve
    // } else {
    //     myTemp = getData.list[0].temp.night
    // }