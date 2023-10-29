import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, img, price, stock, description}) => {
    return (
        <div >
            <p>{name}</p>
            <img src={img} style={{ width: 100 }} />
            <p>${price}</p>
            <p>Description: {description}</p>
            <ItemCount stock={10} onAdd={(quantity) => console.log('cantidad agregada: ' + quantity)}/>
        </div>
    )
}

export default ItemDetail