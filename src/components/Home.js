import React from 'react'
import './Home.css'
import bg from './gif.gif'
import {Routes, Route, useNavigate} from 'react-router-dom';
import List from './List';

function Home() {

  const navigate = useNavigate();

  const navigateList = () => {
    navigate('/grocerylist');
  };

  

  return (
    <div className="container my-5">
        <img id="image" src={bg} alt="" srcset=""/>
        <div className='content'>
            <h1 id="heading">Plan before purchase!!</h1>
            <p id="quote">“Without leaps of imagination or dreaming, we lose the excitement of possibilities. Dreaming, after all is a form of planning.”</p>
            <button className="btn btn-success btn-lg" id="button"  onClick={navigateList}>Get Started</button>
        </div>

        <Routes>
            <Route exact path='/grocerylist' element={<List />} />
        </Routes>
    </div>
  )
}

export default Home
