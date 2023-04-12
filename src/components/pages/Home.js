import React from 'react';
import '../../App.css';
import img from '../images/REGISTRATION.png'
import Problem from '../problems';

function Home() {
  return (
  <>
    <img src={img} alt='loading' className='img'></img>
    

      
  
      <Problem/>  
    <div className="spons">
        <h3>Our sponsors</h3>

    </div>
  </>
  );
}

export default Home;