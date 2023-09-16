import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';


class App extends Component {
render() {
	return (
    <div>
	<Router>
		<div className="App">
			<div>	<button><Link to="/">Home</Link></button>
			<button><Link to="/Form">BOC</Link></button>
				</div>
	
		<Routes>
				<Route exact path='/' element={< Home />}></Route>
				<Route exact path='/Form' element={< Form />}></Route>
			
		</Routes>
		</div>
	</Router>
  </div>
);
}
}

export default App;
