import React from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import image2 from "./image2.png";

function App() {
  return (
  <div className='b' style ={{ border:" solid 1px black " , maxWidth:"100vw"}}> 
    <h1 className='Game'>
    First app
      
    </h1>
    <br/>
     
    <img className= 'img1' src="/image1.png"  /> 
    <br/>
    
    <img  className= 'img2' src={image2} />


   
    
  </div>  );
}

export default App;