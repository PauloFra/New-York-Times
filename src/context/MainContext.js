import{createContext , useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom'


import api from '../api'
import Loading from '../components/Loading/Loading'
import Error from '../components/error/Error'
export const AuthContext = createContext()

function MainContext({children}) {
    const [array , setArray] = useState([]);
    const [loading , setLoading] = useState(true);
    const [pageLoadign , setPageLoadign] = useState(true);
    const [error , setError] = useState(false);
    const [pageError, setPageError] = useState(false);
    const [arrayEspecifico , setArrayEspecifico] = useState([]);
    const [fotos , setFotos] = useState();

    
    useEffect(()=>{
        setLoading(false)
    },[])

    
   async function GetNoticias(nomeSection){
        setArray([]);
        try{
            const {data} = await api.get(`${nomeSection}.json?api-key=MtNvPePihFmABWskxQqc0uobSzMoeT1K`);
            setArray(data.results);
            setPageLoadign(false);
        }catch(erro){
            <Error/>
            setPageLoadign(false);
            setPageError(true);
        }
    }
    
    if(loading){
        return (<Loading />);
    } else if(error){
    return (<Error/>);
} else{
  return (
    <AuthContext.Provider value={{GetNoticias , array, pageLoadign,setArrayEspecifico,arrayEspecifico,setFotos,fotos,pageError,setPageError}}>
        {children}
    </AuthContext.Provider>
  )
}
}

export default MainContext