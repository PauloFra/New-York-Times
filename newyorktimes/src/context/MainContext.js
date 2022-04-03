import{createContext , useState , useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import api from '../api'
import Loading from '../components/Loading/Loading'
export const AuthContext = createContext()

function MainContext({children}) {
    const [array , setArray] = useState([])
    const [loading , setLoading] = useState(true)
    const [pageLoadign , setPageLoadign] = useState(true)
    const [arrayEspecifico , setArrayEspecifico] = useState([])
    const [fotos , setFotos] = useState();

    
    useEffect(()=>{
        setLoading(false)
    },[])

    
   async function GetNoticias(nomeSection){
        setArray([]);
        try{
            const {data} = await api.get(`${nomeSection}.json?api-key=MtNvPePihFmABWskxQqc0uobSzMoeT1K`);
            setArray(data.results);
            console.log(data.results);
            setPageLoadign(false);
        }catch(erro){
            console.log(erro)
            alert('Ops erro de muitas requisições')
        }
    }
    
    if(loading){
        return (<Loading />)
    }
  return (
    <AuthContext.Provider value={{GetNoticias , array, pageLoadign,setArrayEspecifico,arrayEspecifico,setFotos,fotos}}>
        {children}
    </AuthContext.Provider>
  )
}

export default MainContext