

import Header from './components/Header.jsx'
import Region from './components/Region.jsx'
import { useWeather } from './hooks/useWeather.js'




function App() {

    const {data, weather, seleccionaRegion} = useWeather()



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
                            weather = {weather}
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
