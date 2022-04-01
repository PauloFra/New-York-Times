import PageDetails from '../pages/PageDetails'
import {useNavigate} from 'react-router-dom'
import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
function ListaNoticias({arrayProps}) {    
    const {setArrayEspecifico , setFotos,fotos} = useContext(AuthContext);
    const navigate = useNavigate();

    function verDetalhes(arr){
        setArrayEspecifico(arr);
        navigate('/page-details')
        setFotos(arr.multimedia[1]);
    }
    return (
    <div>
        {arrayProps.map((element , indice) => (
        <div key={indice}>
            <h1>{element.title }</h1>
            <p>{element.abstract}</p>
            <p>{element.created_date}</p>
            <p>{element.byline}</p>
            <button onClick={()=>{ verDetalhes(element) }} >See details</button>
        </div>))}
    </div>
  )
}

export default ListaNoticias