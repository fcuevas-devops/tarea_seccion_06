

export default function Region({region, seleccionaRegion, weather}){

const isSelected = (tipo) =>{
    if(tipo ===0)
        return region.id === weather[0].id
    else
        return region.id === weather[0].id?`region-button active`: `region-button`
}

    return(
        <>
        <button type="button" 
            className={isSelected(1)} 
            data-index={region.id}             
            aria-pressed={isSelected(0)}
            onClick={() => seleccionaRegion(region)}
        >
            <span className="region-number">REGIÓN {region.id}</span>
            <span className="region-name">{region.name}</span>
        </button>     
        </>
    )
}