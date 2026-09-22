

export default function Region({region, seleccionaRegion}){


    return(
        <>
        <button type="button" className="region-button" data-index={region.id} aria-pressed="false"
            onClick={() => seleccionaRegion(region)}
        >
            <span className="region-number">REGIÓN {region.id}</span>
            <span className="region-name">{region.name}</span>
        </button>     
        </>
    )
}