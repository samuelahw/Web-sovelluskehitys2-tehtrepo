import React, { useState, useEffect } from 'react'
import axios from 'axios'
require('dotenv').config();


const Saatiedot = () => {
    const [saa, setSaa] = useState([]);
    const [iconUrl, setUrl] = useState('');
    const alkuTilanne = !saa || (saa && saa.length === 0);
    const api_key = process.env.REACT_APP_API_KEY;
    console.log(api_key)

  useEffect(() => {
    console.log('effect')
    axios
        .get('https://api.openweathermap.org/data/2.5/forecast?q=Helsinki&lang=fi&units=metric&appid='+api_key)
        .then(response => {
            console.log('promise fulfilled')
            console.log(response.data)
            setSaa(response.data)
            teeIcon(response.data.list[0].weather[0].icon)
            console.log(iconUrl);
        })
        
}, [])

    function teeIcon(saat) {
        console.log(saat)
        setUrl("https://openweathermap.org/img/w/"+saat+".png")
        console.log(iconUrl)
    }

    return (

        <div>
            <h1>Helsingin sää tällä hetkellä</h1>
            <p>
            Lämpötila: {!alkuTilanne && saa.list[0].main.temp}°C
            <br/>
            <img src={iconUrl}/>
            <br/>
            Pilvisyys: {!alkuTilanne && saa.list[0].weather[0].description}
             <br/>
            Tuulen nopeus: {!alkuTilanne && saa.list[0].wind.speed}m/s   
            </p>
            <h1>Pääkaupunkiseudun pyöraparkit kartalla</h1>
            <p>Hae pyöräparkkeja alhaalla olevasta alasvetovalikosta</p>
        </div>
      )
    }

export default Saatiedot;