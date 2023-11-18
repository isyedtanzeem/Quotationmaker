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
         
            </div>

            <Routes>
              <Route exact path="/" element={<Menu />} />
              <Route path="/Form" element={<Form />} />
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
