import React from 'react';
import moment from 'moment';
import {useContext , useEffect,useState} from 'react';

import { AuthContext } from '../context/MainContext';
import Loading from '../components/Loading/Loading';
import Error from '../components/error/Error';

import './style/PageDetails.css'

function PageDetails() {
    const {arrayEspecifico , fotos ,setFotos,pageLoadign,pageError} = useContext(AuthContext);
    console.log(fotos)

    if(pageLoadign){
        return(<Loading />)
    }else if (pageError){
      return(<Error/>)
    }else{
    return (
    <div>
        {[arrayEspecifico].map((element , indice) => (
            <div key={indice} className='pageDetails'>
                <h2 className='pageDetailsTitle'>{element.title}</h2>
                <div className='pageDetailsDiv'>
                <img className='pageDetailsImg' src={fotos.url} alt="" />
                <div className='pageDetailsText'>
                    <p>{element.abstract}</p>
                    <p  >{moment(element.created_date).format('llll')}</p>
                    <p >{element.title}</p>
                </div>                
                </div>
            </div>
        ))}
        
    </div>
  )
}
}

export default PageDetails