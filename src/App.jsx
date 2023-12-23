import React, { useState } from "react";
// icons
import Search from "./assets/search.png";
import Humidity from "./assets/humidity.png";
import Wind from "./assets/wind.png";
// icons
import Cloud from "./assets/cloud.png";
import Rain from "./assets/rain.png";
import Drizzle from "./assets/drizzle.png";
import Clear from "./assets/clear.png";
import Snow from "./assets/snow.png";

function App() {
  //Api key
  let ApiKey = "7e8d63e0a5a9627d700a2d6fcc2e8d77";
  //Weather icon changer
  const [wicon, setWicon] = useState(Clear);

  const search = async () => {
    const element = document.getElementById("city");

    if (element.value === "") {
      alert("Search place first.");
      return 0;
    } else {

         let url = `https://api.openweathermap.org/data/2.5/weather?q=${element.value}&units=Metric&appid=${ApiKey}`;
         let response = await fetch(url);
         let data = await response.json();
       
        
        const humidity = document.getElementById("humidity");
        const speed = document.getElementById("speed");
        const temperature = document.getElementById("temperature");
        const location = document.getElementById("location");
        
        humidity.innerHTML = data.main.humidity + "%";
        speed.innerHTML =  Math.floor(data.wind.speed) + " km/h";
        temperature.innerHTML =  Math.floor(data.main.temp) + " °c";
        location.innerHTML = data.name;
       
      if (data.weather[0].icon === "01d" ||  data.weather[0].icon === "01n"||
      data.weather[0].icon === "1d" ||  data.weather[0].icon === "1n") {
        setWicon(Clear);
      }
      else if (data.weather[0].icon === "02d" || data.weather[0].icon === "02n"||
      data.weather[0].icon === "2d" || data.weather[0].icon === "2n") {
        setWicon(Cloud);
      }
      else if ( data.weather[0].icon === "03d" ||  data.weather[0].icon === "03n"||
      data.weather[0].icon === "3d" ||  data.weather[0].icon === "3n") {
        setWicon(Drizzle);
      }
      else if ( data.weather[0].icon === "04d" ||  data.weather[0].icon === "04n" ||
      data.weather[0].icon === "4d" ||  data.weather[0].icon === "4n") {
        setWicon(Drizzle);
      }
      else if ( data.weather[0].icon === "09d" ||  data.weather[0].icon === "09n" ||
                data.weather[0].icon === "9d" ||  data.weather[0].icon === "9n") {
        setWicon(Rain);
      }
      else if ( data.weather[0].icon === "010d" ||  data.weather[0].icon === "010n" ||
                 data.weather[0].icon === "10d" ||  data.weather[0].icon === "10n") {
        setWicon(Rain);
      }
      else if ( data.weather[0].icon === "013d" ||  data.weather[0].icon === "013n" ||
      data.weather[0].icon === "13d" ||  data.weather[0].icon === "13n") {
        setWicon(Snow);
      } else {
        //default
        setWicon(Clear);
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#7E30E1] overflow-x-hidden  overflow-y-hidden  bg-cover bg-center">
      <div className="w-[350px] h-[600px] bg-[#ffa43ca1] rounded-xl">
        <h1 className="text-center text-[40px] font-extrabold p-8 text-white">
          Weather App
        </h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            id="city"
            className="w-[220px] rounded-lg text-center outline-none ml-[45px]"
          />
          <button
            onClick={() => {
              search();
            }}
            className="w-[40px] h-[40px] ml-1 bg-[#fefcff] rounded-[10px]"
          >
            <img src={Search} className="mx-auto" alt="" />
          </button>
        </div>
        <div className="mx-auto">
          <img
            className="mx-auto w-[150px] mt-4 rounded-[20px]"
            src={wicon}
            alt=""
          />
          <h2
            id="temperature"
            className="text-center text-[#fefcff] font-bold text-[40px]"
          >
            24°C
          </h2>
          <h1
            id="location"
            className="text-center text-[#fefcff] font-bold text-[40px]"
          >
            London
          </h1>
        </div>

        <div className="flex ml-[47px] relative top-[30px]">
          <img
            className="w-[40px] h-[35px] relative top-[10px]"
            src={Humidity}
            alt=""
          />
          <div>
            <p
              id="humidity"
              className="ml-[3px] relative top-[2px] text-[17px] text-white font-bold"
            >
              64%
            </p>
            <p className="ml-[3px] text-[17px] text-white font-bold">
              Humidity
            </p>
          </div>
        </div>

        <div className="flex relative left-[200px] bottom-[18px]">
          <img className="w-[40px] h-[35px] relative top-2" src={Wind} alt="" />
          <div>
            <p id="speed" className="ml-[3px] text-[17px] text-white font-bold">
              23 k/mh
            </p>
            <p className="ml-[3px] relative bottom-[2px] text-[17px] text-white font-bold">
              Speed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
