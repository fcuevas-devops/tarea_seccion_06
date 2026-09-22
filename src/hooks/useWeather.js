import { useState, useEffect } from 'react'
import {regions} from '../data/db.js'

export const useWeather = () =>{

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
        //console.log('Dimos click...', region.id)

        //validamos si la region es la misma
        const itemIndex = weather.findIndex((item) => item.id === region.id)

        if(itemIndex >=0 ){
            console.log('Ya existe..', region.id)

        } else {
            //console.log('No existe, por tanto se establece...',region.id)
            setWeather((prevWeather) => [region])

            // document.querySelectorAll(".region-button").forEach((button, buttonIndex) => {
            //     if(buttonIndex === (region.id-1)){
            //         button.classList.toggle("active", true);
            //         button.setAttribute("aria-pressed", String(true));
            //     }else{
            //         button.classList.toggle("active", false);
            //         button.setAttribute("aria-pressed", String(false));                    
            //     }

            // });
        }        
    }

    return {
        data, weather, seleccionaRegion
    }

}