

function Coche({ children, coche }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{coche.marca}</strong></p>
            <p>{coche.modelo}</p>
            <p>{coche.anio}</p>
            <p>{coche.precio}</p>
            <p>{coche.color}</p>
    
            {children}
        </div>
    )
}

export default Coche