import React from 'react'
import {useContext , useEffect,useState} from 'react'
import { AuthContext } from '../context/MainContext'
function PageDetails() {
    const {arrayEspecifico , fotos ,setFotos} = useContext(AuthContext);
    console.log(fotos)
    return (
    <div>
        
        {[arrayEspecifico].map((element , indice) => (
            <div key={indice}>
                <h2>{element.title}</h2>
                <img src={fotos.url} alt="" />
                <p>{element.abstract}</p>
                <p>{element.published_date}</p>
                <p>{element.title}</p>
            </div>
        ))}
        
    </div>
  )
}

export default PageDetails