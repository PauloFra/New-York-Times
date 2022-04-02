import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
import ListaNoticias from '../components/ListaNoticias';
import Loading from '../components/Loading/Loading';
function World() {
  const {GetNoticias , array,pageLoadign} = useContext(AuthContext);
    
    useEffect(()=>{
        GetNoticias('world')
    },[])

    if(pageLoadign){
        return(<Loading />)
    }
  return (
    <div>
        <ListaNoticias arrayProps={array}/>
    </div>
  )
}

export default World