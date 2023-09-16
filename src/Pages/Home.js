
// Home.js
import React from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

function Home (){
    return
     	<div className="App">
    <div>	<button><Link to="/">Home</Link></button>
    <button><Link to="/Form">BOC</Link></button>
        </div>
        </div>
}
  
export default Home;