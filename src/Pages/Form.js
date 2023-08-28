import React, { useState } from 'react';
import './Form.css';
import jsPDF from 'jspdf';

import Logo from './logo.png'; // Import your logo image

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    email: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form data submitted:', formData);
    generatePDF();
  };

  const generatePDF = () => {
    const pdf = new jsPDF();
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(14);


    pdf.addImage(Logo, 'PNG', 20, 10, 40, 40);

    // Date
    const currentDate = new Date().toLocaleDateString();
    pdf.setFontSize(10);
    pdf.text(160, 20, `Date: ${currentDate}`);

    // Form Data
    pdf.setFontSize(12);
    pdf.text(20, 60, 'Form Data:');
    pdf.text(20, 70, `Name: ${formData.name}`);
    pdf.text(20, 80, `Mobile: ${formData.mobile}`);
    pdf.text(20, 90, `Address: ${formData.address}`);
    pdf.text(60, 90, `Email: ${formData.email}`);

    pdf.save('formData.pdf');
  };

  return (
    <div className="form-container">
      <h2>React Form Example</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleInputChange}
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
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
