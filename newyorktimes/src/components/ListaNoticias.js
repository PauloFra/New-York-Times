import PageDetails from '../pages/PageDetails'
import {useNavigate} from 'react-router-dom'
import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
import moment from 'moment'
import styles from './listanoticia/ListaNoticias.module.css'


function ListaNoticias({arrayProps}) {    
    const {setArrayEspecifico , setFotos,fotos} = useContext(AuthContext);
    const navigate = useNavigate();

    function verDetalhes(arr){
        setArrayEspecifico(arr);
        navigate('/page-details')
        setFotos(arr.multimedia[1]);
    }
    return (
    <div className={styles.ListaNoticias}>
        {arrayProps.map((element , indice) => (
        <div key={indice} >
            <h1>{element.title }</h1>
            <div className={styles.ListaNoticiasDiv}>
            <img className={styles.ListaNoticiasImg} src={element.multimedia[2].url} alt="" />
            <p>{element.abstract}</p>
            <p>{moment(element.created_date).format('llll')}</p>
            <p>{element.byline}</p>
            </div>
            <button className={styles.ListaNoticiasButton} onClick={()=>{ verDetalhes(element) }} >See details</button>
        </div>))}
    </div>
  )
}

export default ListaNoticias