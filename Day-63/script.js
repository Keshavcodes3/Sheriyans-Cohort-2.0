//?Scenerio 1 : Open Weather Dashboard using API

async function GetWeather(city) {
  try {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"074edbc396d5a928428ce414eaf3ff21"}`;
    let raw = await fetch(url);
    if (!raw.ok) {
      throw new Error("City Not Found");
    }
    let rawData =await raw.json();
  } catch (err) {
    console.log(err.message);
  }
}

GetWeather("Mumbai");

