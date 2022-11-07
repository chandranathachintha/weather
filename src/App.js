import { Button } from 'bootstrap';
import React,{useState} from 'react';
import './App.css'
const App = () => {
  const [city, setCity] = useState('');
  const [result, setResult] = useState({
    cityName:'',
    temperature : ''
  });
  
  const handleWeatherBtn = ()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
      res=>res.json()
    )?.then((data)=>{
      const kelvin = data.main.temp;
      const celsius = kelvin-273.15;
      setResult({cityName:data.name,temperature:Math.round(celsius)+ '°C'});
      
    })
      
  }
  return (
    <div>
      <center>
       <div className='card' style={{height:400}}>
       <center>
       <h1 className='card-title'>Weather</h1>
        <input type='text' 
              className='search' 
              value={city} 
              placeholder='Enter Your City Name'
              onChange={(e)=>setCity(e.target.value)}></input> <br /><br />
        <button className='btn btn-primary' onClick={handleWeatherBtn}>Find Weather</button>
       
                <h5 className='city'>{result.cityName}</h5>
                <h1 className='temp'>{result.temperature} </h1>
              
           
        </center>
       </div>
      </center>
    </div>
  );
}

export default App;
