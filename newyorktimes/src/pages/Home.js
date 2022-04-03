import {useContext , useEffect} from 'react'
import { AuthContext } from '../context/MainContext'
import ListaNoticias from '../components/ListaNoticias';
import Loading from '../components/Loading/Loading';
import Error from '../components/error/Error';

function Home() {
    const {GetNoticias , array,pageLoadign,pageError} = useContext(AuthContext);
    
    useEffect(()=>{
        GetNoticias('home')
    },[])

    if(pageLoadign){
        return(<Loading />)
    }else if (pageError){
      return(<Error/>)
    }else{
  return (
    <div>
     
        <ListaNoticias arrayProps={array}/>
    </div>
  )
}
}

export default Home