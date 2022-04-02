import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
import ListaNoticias from '../components/ListaNoticias';
import Loading from '../components/Loading/Loading';
function Home() {
    const {GetNoticias , array,pageLoadign} = useContext(AuthContext);
    
    useEffect(()=>{
        GetNoticias('home')
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

export default Home