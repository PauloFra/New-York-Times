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
        <div key={indice} className={styles.divMaior}>
            <div className={styles.ListaNoticiasDiv}>
            <div className={styles.contentDel}>
                <h1>{element.title }</h1>
                <p>{element.abstract}</p>
                <p>{moment(element.created_date).format('llll')}</p>
                <p>{element.byline}</p>
                <button className={styles.ListaNoticiasButton} onClick={()=>{ verDetalhes(element) }} >See details</button>
            </div>
            </div>
            </div>))}
    </div>
  )
}

export default ListaNoticias