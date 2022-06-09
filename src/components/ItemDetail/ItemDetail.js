import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext'
import { useContext } from 'react';


const ItemDetail = ( {data} ) =>{
    const [cantidad, setCantidad] = useState(1)
    const { image, image2, image3, title, price, stock, id } = data;
    const [showButton, setShowButton] = useState(false)
    const { addProductToCart } = useContext(CartContext)

    return(
        <>
            <div className='detail-product-container'>
                <div className="detail-product-image">
                    <img src={`/${image3}`} alt="imgProduct"/>
                </div>
                <div className="detail-product-info">
                    <div className='detail-product-info__title'>
                        <h2>{title}</h2>
                    </div>
                    <p>$ {price}</p>
                    <p className='price'>8 Cuotas sin interés de $ {price / 10}</p>
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
                    {!showButton ?
                        <ItemCount 
                                stock={stock}
                                cantidad={cantidad}
                                setCantidad={setCantidad}
                                setShowButton={setShowButton} />
                        :
                        // <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>
                        <Button 
                            variant={'contained'}
                            style={{backgroundColor:'#14323d'}}
                            onClick={() => addProductToCart({ image, image2, title, price, id, cantidad })}
                            > Terminar mi compra </Button>
                        //</Link>
                    }
                </div>  
            </div>  
        </> 
    )
}

export default ItemDetail