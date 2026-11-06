import React from 'react'
import './hero.css'
import UstSekil from '../assets/sekone.png';
import SolSEk from '../assets/saftali.png'
import SagSEk from '../assets/sagdakimeyve.png'
import OrtaSEk from '../assets/ortadakimeyve.png'
import { Link } from 'react-router-dom'

const hero = () => {
    return (
        <div className='HeroBoyukDiv'>
            <div className='IlkDiv'>
                <h1>Título de la página de inicio</h1>
                <p>Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando. </p>
                <button className='HeroBtn'>Botón</button>
            </div>
            <div className='IkinciDiv'>
                <img className='img1' src={UstSekil} alt="" />
                <h2 className='HeroH2'>Encabezado de sección</h2>
            </div>
            <div className='UcuncuDiv'>
                <div className='AsagiDivcik'>
                    <div className='AsagiSolDiv'>
                        <Link to="/details/1">
                            <img className='KicikSekil' src={SolSEk} alt="" />
                        </Link>
                        <h3 className='KicikH3'>Subtítulo</h3>
                        <p className='KicikP'>Cuerpo del texto para lo que desees añadir adicionalmente al subtítulo. </p>
                    </div>
                    <div className='AsagiSolDiv'>
                        <Link to="/details/2">
                            <img className='KicikSekil' src={OrtaSEk} alt="" />
                        </Link>
                        <h3 className='KicikH3'>Subtítulo</h3>
                        <p className='KicikP'>Cuerpo del texto para lo que desees ampliar sobre el tema principal.  </p>
                    </div>
                    <div className='AsagiSolDiv'>
                        <Link to="/details/3">
                            <img className='KicikSekil' src={SagSEk} alt="" />
                        </Link>
                        <h3 className='KicikH3'>Subtítulo</h3>
                        <p className='KicikP3'>Cuerpo del texto para lo que desees compartir adicionalmente.   </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default hero