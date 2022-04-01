import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
import ListaNoticias from '../components/ListaNoticias';
function World() {
  const {GetNoticias , array,pageLoadign} = useContext(AuthContext);
    
    useEffect(()=>{
        GetNoticias('world')
    },[])

    if(pageLoadign){
        return(<h1>Loading</h1>)
    }
  return (
    <div>
        <ListaNoticias arrayProps={array}/>
    </div>
  )
}

export default World