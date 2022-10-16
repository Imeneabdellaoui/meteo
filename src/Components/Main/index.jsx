import React from 'react'
import { useState } from 'react'
import './Style.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {

  return(
     <div className = 'content'>
    <div className='image'>
         <div className='card'> 
         <div classNAme='search'>
         <input type="text" classNAme="search-bar" placeholder="Search" />
     <button>
       <FontAwesomeIcon 
          icon = {faMagnifyingGlass}
       />
     </button>
 </div>
 <div className='weather'>
               <h2>Weather in Berlin</h2> 
               <h1>51°C</h1>
               <div className='flex'>
                  <img src="https://openweathermap.org/img/wn/04n.png" alt="" id='icon'/>
                  <div>Cloudy</div>
               </div>
               <div>Humidity: 60%</div>
               <div>Wind speed: 6.2km</div>
       </div>
       </div>
    </div>

     </div>





  )


  
}