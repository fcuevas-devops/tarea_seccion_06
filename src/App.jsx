import { useState, useEffect } from 'react'

import Header from './components/Header.jsx'
import Region from './components/Region.jsx'
//import './app.js'

import {regions} from './data/db.js'


function App() {

    const initialWeather = ()=>{   
        return [regions[6]]
    }
    //State para regiones, usamos el  hook useState
    const [data, setData] = useState([])
    const [weather, setWeather] = useState(initialWeather)


    //inicializamos data usando el hook useEffect
    useEffect(() =>{
        setData(regions)
    },[])
 

    //renderRegions();
    //    selectRegion(regions[6]);

    function seleccionaRegion(region){
        console.log('Dimos click...', region.id)

        //validamos si la region es la misma
        const itemIndex = weather.findIndex((item) => item.id === region.id)

        if(itemIndex >=0 ){
            console.log('Ya existe..', region.id)

        } else {
            console.log('No existe, por tanto se establece...',region.id)
            setWeather((prevWeather) => [region])

            document.querySelectorAll(".region-button").forEach((button, buttonIndex) => {
                if(buttonIndex === (region.id-1)){
                    button.classList.toggle("active", true);
                    button.setAttribute("aria-pressed", String(true));
                }else{
                    button.classList.toggle("active", false);
                    button.setAttribute("aria-pressed", String(false));                    
                }

            });
        }        
    }

    return (
    <>
        <Header/> 
            

        <main className="container">

            <section className="regions-section" aria-labelledby="regions-title">
                <div className="section-heading">
                    <div>
                        <p className="section-kicker">Explora el país</p>
                        <h2 id="regions-title">Selecciona una región</h2>
                    </div>
                    <span className="region-counter" id="region-counter">{data.length} regiones</span>
                </div>

                <nav className="regions-grid" id="regions-list" aria-label="Regiones de Chile">
                    {data.map((region) =>(
                        <Region
                            key = { region.name}
                            region = {region}
                            seleccionaRegion = {seleccionaRegion}
                        />
                    ))}

                </nav>
            </section>   



            <section className="weather-card" aria-labelledby="weather-title" aria-live="polite">
                <div className="weather-main">
                    <div className="weather-location">
                        <span className="location-pin" aria-hidden="true">⌖</span>
                        <div>
                            <p className="section-kicker">Pronóstico de ejemplo</p>
                            <h2 id="weather-title">{weather[0].name}</h2>
                        </div>
                    </div>

                    <div className="current-weather">
                        <div className="weather-icon-wrap">
                            <img id="weather-icon" src={`/assets/images/${weather[0].icon}`} 
                                alt="Soleado"/>
                        </div>
                        <div className="temperature">
                            <strong id="temperature">{weather[0].temperature}</strong>
                            <span id="condition">{weather[0].condition}</span>
                        </div>
                    </div>
                </div>

                <div className="weather-details">
                    <article className="detail">
                        <span className="detail-icon" aria-hidden="true">💧</span>
                        <div>
                            <span>Humedad</span>
                            <strong id="humidity">{weather[0].humidity}</strong>
                        </div>
                    </article>

                    <article className="detail">
                        <span className="detail-icon" aria-hidden="true">💨</span>
                        <div>
                            <span>Viento</span>
                            <strong id="wind">{weather[0].wind}</strong>
                        </div>
                    </article>

                    <article className="detail">
                        <span className="detail-icon" aria-hidden="true">🌡️</span>
                        <div>
                            <span>Mínima / Máxima</span>
                            <strong id="minmax">{weather[0].minmax}</strong>
                        </div>
                    </article>
                </div>

                <div className="weather-footer">
                    <p id="weather-summary">
                        {weather[0].summary}
                    </p>
                    <span id="updated">Actualizado: hoy, 08:30</span>
                </div>
            </section>
        </main>

        <footer className="site-footer">
            <p>Proyecto React · Clima de Chile · Tarea Sección 06</p>
        </footer>


    </>
    )
}

export default App
