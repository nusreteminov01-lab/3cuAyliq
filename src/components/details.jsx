
import { useParams } from 'react-router-dom'
import './details.css'

import SolSEk from '../assets/saftali.png'
import OrtaSEk from '../assets/ortadakimeyve.png'
import SagSEk from '../assets/sagdakimeyve.png'

const products = {
    1: {
        image: SolSEk,
        name: 'Melocotón',
        subtitle: 'Fruta fresca',
        price: '10,99 $',
        description: 'Producto fresco y natural, ideal para disfrutar de su delicioso sabor.'
    },

    2: {
        image: OrtaSEk,
        name: 'Producto 2',
        subtitle: 'Fruta natural',
        price: '12,99 $',
        description: 'Un producto especial seleccionado por su calidad y frescura.'
    },

    3: {
        image: SagSEk,
        name: 'Producto 3',
        subtitle: 'Producto especial',
        price: '14,99 $',
        description: 'Un producto de excelente calidad con una presentación especial.'
    }
}

function Details() {
    const { id } = useParams()

    const product = products[id]

    if (!product) {
        return <h2>Producto no encontrado</h2>
    }

    return (
        <div className="DetailsMain">

            <div className="DetailsImage">
                <img src={product.image} alt={product.name} />
            </div>

            <div className="DetailsInfo">

                <h1>{product.name}</h1>

                <h3>{product.subtitle}</h3>

                <h2>{product.price}</h2>

                <p>{product.description}</p>

                <button className="DetailsBtn">
                    Añadir al carrito
                </button>

            </div>

        </div>
    )
}

export default Details
