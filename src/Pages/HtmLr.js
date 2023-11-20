import React, { useState } from "react";
import "./Form.css";
import jsPDF from "jspdf";

import Logo from "./Images/HtmLogo.png"; // Import your logo image
import SupportLogo from "./support-logo.png";

import resix from "./Images/resix.png";
import Signature from "./Images/signature.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const HtmLr = () => {
  const [formData, setFormData] = useState({
    transportCharges: "",
    from: "",
    toLocation: "",
    storageCharges: "",
    insurance: "",
    name: "",
    mobile: "",
    address: "",
    email: "",
    dateOfoPacking: "",
    gst: "",
    docCharges: "",
    description: "",
  
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  let dateForCount = new Date();

  const handleClear = () => {
    setFormData({
      transportCharges: "",
      from: "",
      toLocation: "",
      storageCharges: "",
      insurance: "",
      name: "",
      mobile: "",
      address: "",
      email: "",
      dateOfoPacking: "",
      gst: "",
      docCharges: "",
      description: "",

    });
  };

  const day = dateForCount.getDate();

  let count = day + 166;

  const handleSubmit = (event) => {
    count = count + 1;

    console.log(count, "count");
    event.preventDefault();

    generatePDF(count);
  };

  const generatePDF = (count) => {
    const pdf = new jsPDF({
      orientation: 'landscape',
    });
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(14);

    pdf.addImage(Logo, "PNG", 15, 5, 80, 26);
    pdf.setFontSize(8);
    pdf.text(
      12,
      34,
      "No. 320,10th cross NGR Layout, Masjid Road,Roopena Agrahara, Bangalore - 560068"
    );
    pdf.text(
      12,
      38,
      "E-Mail :htmpackersandmovers@gmail.com             Web : www.htmmovers.in"
    );
    pdf.text(
      12,
      42,
      "Contact:7204208209,9741242669"
    );


    pdf.setFontSize(14);

    pdf.text(
      140,
      18,
      "Caution"
    );
    pdf.text(
      225,
      18,
      "Notice"
    );
    pdf.setFontSize(10);

    pdf.text(
      140,
      22,
      "This Condigment shall not be detained, diverted "
    );
    pdf.text(
      140,
      25,
      "or re-booked without Consignee bank's written  "
    );
    pdf.text(
      140,
      28,
      "permission will be delivered at the destination"
    );


    pdf.text(
      225,
      22,
      "This Condigment shall not be detained, diverted "
    );
    pdf.text(
      225,
      25,
      "or re-booked without Consignee bank's written  "
    );
    pdf.text(
      225,
      28,
      "permission will be delivered at the destination"
    );
  

    pdf.setFontSize(24);
    pdf.setFont(undefined, "bold");
    pdf.text(13, 58,"CONSIGNEE COPY");
   

    pdf.setFontSize(14);
    pdf.setFont(undefined, "Bold");
    pdf.rect(103, 50, 90, 10);
    pdf.rect(193, 50, 80, 10);
    pdf.text(195, 56.5,`DATE: ${"Date"}`);
    pdf.text(106, 56.5,`Consignee No: ${"No"}`);
   
    pdf.rect(12, 70, 95, 10);
    pdf.text(14, 77,`Consignor's Name: ${"Syed Tanzeem Ahmed"}`);
    pdf.rect(12, 80, 95, 10);
    pdf.text(14, 87,`Name: ${"Syed Tanzeem Ahmed"}`);

    pdf.rect(107, 70, 173, 10);
    pdf.text(110, 77,`Address: ${"Syed Tanzeem Ahmed"}`);
    pdf.rect(107, 80, 173, 10);
    pdf.text(110, 87,`Address: ${"Syed Tanzeem Ahmed"}`);
    // Remove spaces and special characters from name and mobile
    const sanitizedName = formData.name.replace(/[^a-zA-Z0-9]/g, "");
    const sanitizedMobile = formData.mobile.replace(/[^0-9]/g, "");

    const pdfName = `Htm_Invoice_${sanitizedName}.pdf`;

    pdf.save(pdfName);
  };

  return (
    <div className="form-container">
      {/* <h4><Link to="/">Go to Home</Link></h4> */}
      <h4>HTM LR</h4>

      <form onSubmit={handleSubmit}>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="input margin"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              title="Please enter name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              className="input margin"
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Transportation Charges</label>
            <input
              className="input margin"
              type="text"
              id="transportCharges"
              name="transportCharges"
              value={formData.transportCharges}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">From Location:</label>
            <input
              className="input margin"
              type="text"
              id="from"
              name="from"
              value={formData.from}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">To Location:</label>
            <input
              type="text"
              id="toLocation"
              name="toLocation"
              value={formData.toLocation}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Storage Charges :</label>
            <input
              type="text"
              className="input margin"
              id="storageCharges"
              name="storageCharges"
              value={formData.storageCharges}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">GST :</label>
            <input
              type="text"
              className="input margin"
              id="gst"
              name="gst"
              value={formData.gst}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="display-inline">
          <div className="form-group">
            <label htmlFor="from">Insurance :</label>
            <input
              type="text"
              className="input margin"
              id="insurance"
              name="insurance"
              value={formData.insurance}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">Documentation Charges :</label>
            <input
              type="text"
              className="input margin"
              id="docCharges"
              name="docCharges"
              value={formData.docCharges}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className=" margin">
          <div className="form-group">
            <label htmlFor="from">Description :</label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <button type="submit" className="submit-button margin">
          Download
        </button>
        <button className="submit-button" onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default HtmLr;
