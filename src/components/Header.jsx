

export default function Header(){

    return (
    <>
        <header className="site-header">
            <div className="header-content">
                <div className="brand">
                    <img src="assets/images/chile-weather.svg" alt="" className="brand-icon" />
                    <div>
                        <p className="eyebrow">Tarea Sección 02</p>
                        <h1>Clima de Chile</h1>
                    </div>
                </div>

                <p className="header-description">
                    Selecciona una región para consultar su información meteorológica.
                </p>
            </div>
        </header>        
    
    </>
    )
}