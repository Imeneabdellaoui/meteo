import React from 'react'
import { useState } from 'react'
import './Style.css'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Main() {

   const [name, setName] = useState('')
   const [city, setCity] = useState('')
   const [temperature, setTemperature] = useState(0)
   const [description, setDescription] = useState('')
   const [humidity, setHumidity] = useState(0)
   const [WindSpeed, setWindSpeed] = useState(0)
   const [imageUrl, setImageUrl] = useState(0)

  const handleSubmit = (e) => {
     e.preventDefault()
      console.log(name)

      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=99b6d5c129d75774bf653b46525f6895`)
      .then(response =>{
         if(!response.ok){
             alert("No weather found! ")
             throw new Error("No weaher found" + response.status);
         }
         return response.json();
     })
     .then((data) =>{
         setCity(data.name)
         setImageUrl(`https://source.unsplash.com/1600x900/?${name}`)
         setTemperature(data.main.temp)
         console.log(data.main.temp ,data.weather[0].description, data.main.humidity,  data.wind.speed)
         setDescription(data.weather[0].description)
         setHumidity(data.main.humidity)
         setWindSpeed(data.wind.speed)
         console.log(temperature, description, humidity, WindSpeed)
     })
      .catch(err => err.stack)

  }


  return(
     <div className = 'content'
       style = {{
          backgroundImage: imageUrl?  `url(${imageUrl})` : 'url(https://images.unsplash.com/photo-1599946347371-68eb71b16afc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)' 
       }}
     >
    <div className='image'>
         <div className='card'> 
         <div className='search'>
         <input type="text" className="search-bar" placeholder="Search"
          onChange={(e) => {
             setName(e.target.value)
          }}
         />
     <button
     
     onClick={
      handleSubmit
    }
    >
       <FontAwesomeIcon 
          icon = {faMagnifyingGlass}
        
       />
     </button>
 </div>
 <div className='weather'>
               <h2>Weather in {city.length > 2 ? city : 'tunis' }</h2> 
               <h1>   { temperature>0 ?   Math.floor(temperature - 271) : 30 }°C</h1>
               <div className='flex'>
                  <img src="https://openweathermap.org/img/wn/04n.png" alt="" id='icon'/>
                  <div>{description.length > 0 ? description : "cloudy"}</div>
               </div>
               <div>Humidity: {humidity > 0 ? humidity : 40}%</div>
               <div>Wind speed: {WindSpeed > 0 ?  Math.floor(WindSpeed*10) : 20} Km/h</div>
       </div>
       </div>
    </div>

     </div>





  )


  
}