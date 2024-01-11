import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import Logo from "./logo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Menu = () => {


    


  return (
    <div className="form-container">
	{/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h2> -----Quotation,Invoice and LR-----</h2>
      <div className="button-container">  
        <Link to='/Form' className="boc-button">Boc Quoation</Link>
        <Link to='/HtmQoutation' className="htm-button">Htm Quotation</Link>
       </div>
      <div className="button-container">  
      <Link to='/BocInvoice' className="boc-button ">Boc Invoice</Link>
   <Link to='/HtmInvoice' className="htm-button">Htm Invoice</Link>
       </div>
      <div className="button-container">  
       
      <Link to='/Form' className="boc-button ">Boc LR</Link>
   <Link to='/HtmLr' className="htm-button">Htm LR</Link>

   
       </div>
       
       <div className="button-container"> 
   <Link to='/BcsQuotation' className="bcsbutton">Bangalore Crane Service Quotation</Link>
      
    </div>
    </div>
  );
};

export default Menu;
