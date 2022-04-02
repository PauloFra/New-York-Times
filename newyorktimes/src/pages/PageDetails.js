import React from 'react'
import moment from 'moment';
import {useContext , useEffect,useState} from 'react'
import { AuthContext } from '../context/MainContext'

import './style/PageDetails.css'

function PageDetails() {
    const {arrayEspecifico , fotos ,setFotos} = useContext(AuthContext);
    console.log(fotos)
    return (
    <div>
        
        {[arrayEspecifico].map((element , indice) => (
            <div key={indice} className='pageDetails'>
                <h2 className='pageDetailsTitle'>{element.title}</h2>
                <div className='pageDetailsDiv'>
                <img className='pageDetailsImg' src={fotos.url} alt="" />
                <p className='pageDetailsText'>{element.abstract}</p>
                <p className='pageDetailsData' >{moment(element.created_date).format('llll')}</p>
                <p className='pageDetailssmallTitle'>{element.title}</p>
                </div>
            </div>
        ))}
        
    </div>
  )
}

export default PageDetails