

function Patrocinador({ children, patrocinador }) {
    return (
        <div style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <p><strong>{patrocinador.marca}</strong></p>
            {children}
        </div>
    )
}

export default Patrocinador