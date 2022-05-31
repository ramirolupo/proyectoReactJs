const ItemDetail = ( {data} ) =>{
    return(
        <>
            <div>
                <img src={`./${data.image}`} alt='imgDetail'/>
            </div>
            <p>{data.title}</p>
            <h2>{data.price}</h2>
        </>
    )
}

export default ItemDetail