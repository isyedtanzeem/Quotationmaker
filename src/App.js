import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Form from './Pages/Form';
import './App.css';
import HtmQuotation from './Pages/HtmQuotation';
import BocInvoice from './Pages/BocInvoice';
import HtmInvoice from './Pages/HtmInvoice';

class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
          <div >
            <div>
            {/* <Routes path="/Home" component={Home}></Routes>
              <NavLink
                to="/Home"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                Home 
              </NavLink>
              <Link
                to="/HtmQoutation"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                HTM Quote
              </Link>
              <NavLink
                to="/BocInvoice"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                BOC Bill
              </NavLink>
              <NavLink
                to="/HtmInvoice"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                HTM Bill
              </NavLink> */}
            </div>

            <Routes>
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Menu" element={<Menu />} />
              <Route exact path="/Form" element={<Form />} />
              <Route exact path="/HtmQoutation" element={<HtmQuotation />} />
              <Route exact path="/BocInvoice" element={<BocInvoice />} />
              <Route exact path="/HtmInvoice" element={<HtmInvoice />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
