import './ItemDetail.css'


const ItemDetail = ( {data} ) =>{
    return(
        <>
            <div className='detail-product-container'>
                <div className="detail-product-image">
                    <img src={`/${data.image3}`} alt="imgProduct"/>
                </div>
                <div className="detail-product-info">
                    <div className='detail-product-info__title'>
                        <h2>{data.title}</h2>
                    </div>
                    <p>$ {data.price}</p>
                    <p className='price'>8 Cuotas sin interés de $ {data.price / 8}</p>
                    <p>Una pala increíble ahora con <span>Fibra de Carbono 18K</span></p>
                    <p>Incluye el nuevo sistema de cordón de seguridad.</p>
                    <h2>Detalles de la pala</h2>
                    <ul className='product-details'>
                        <li><span>Potencia:</span> 10/10</li>
                        <li><span>Control:</span> 9/10</li>
                        <li><span>Peso:</span> 360 – 375 g</li>
                        <li><span>Perfil del marco:</span> 38 mm</li>
                        <li><span>Forma de pala:</span> Gota</li>
                        <li><span>Marco:</span> 100% carbono</li>
                        <li><span>Goma:</span> HR3</li>
                        <li><span>Cara:</span> Fiber Carbon 18K</li>
                        <li><span>Smartstrap</span></li>
                    </ul>
                </div>  
            </div>  
        </> 
    )
}

export default ItemDetail