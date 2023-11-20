import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink , Link} from 'react-router-dom';
import Menu from './Pages/Menu';
import Form from './Pages/Form';
import './App.css';
import HtmQuotation from './Pages/HtmQuotation';
import BocInvoice from './Pages/BocInvoice';
import HtmInvoice from './Pages/HtmInvoice';
import HtmLr from './Pages/HtmLr';


class App extends Component {
  render() {
    return (
      <div className="margin-top">
        <Router>
       
            <Routes basename="/Quotationmaker">
              <Route path="/Quotationmaker" element={<Menu />} />
              <Route path="/Form" element={<Form />} />
              <Route exact path="/HtmQoutation" element={<HtmQuotation />} />
              <Route exact path="/BocInvoice" element={<BocInvoice />} />
              <Route exact path="/HtmInvoice" element={<HtmInvoice />} />
              <Route exact path="/HtmLr" element={<HtmLr />} />
            </Routes>
      
        </Router>
      </div>
    );
  }
}

export default App;
