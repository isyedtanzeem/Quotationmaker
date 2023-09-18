import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './Pages/Home';
import Form from './Pages/Form';
import './App.css';
import HtmQuotation from './Pages/HtmQuotation';
import BocInvoice from './Pages/BocInvoice';

class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
          <div >
            <div>
              <NavLink
                to="/"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                Home
              </NavLink>
              <NavLink
                to="/Form"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                BOC
              </NavLink>
              <NavLink
                to="/HtmQoutation"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                HTM
              </NavLink>
              <NavLink
                to="/BocInvoice"
                className="nav-button"
                activeClassName="active" // Add this class when the link is active
              >
                Invoice
              </NavLink>
            </div>

            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Form" element={<Form />} />
              <Route exact path="/HtmQoutation" element={<HtmQuotation />} />
              <Route exact path="/BocInvoice" element={<BocInvoice />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
