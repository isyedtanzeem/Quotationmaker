import React, { useState } from 'react';
import './Form.css';
import jsPDF from 'jspdf';

import Logo from './logo.png'; // Import your logo image
import SupportLogo from'./support-logo.png';

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
  let count = 0 ;
  const handleSubmit = (event) => {
    count = count + 1;

    event.preventDefault();
    console.log('Form data submitted:', formData);
    generatePDF(count);
  };

  const generatePDF = (count) => {
    const pdf = new jsPDF();
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(14);


    pdf.addImage(Logo, 'PNG', 15, 5, 80, 20);
    pdf.setFontSize(8);
    pdf.text(12, 30, 'No. 320,10th cross NGR Layout, Masjid Road,Roopena Agrahara, Bangalore - 560068')
    pdf.text(12, 34, 'E-Mail :bangaloreonecargo@gmail.com             Web : www.bangaloreonecargo.com')
    pdf.setFontSize(10);
    pdf.setFont(undefined,'bold')
    
    pdf.text(130, 14, 'GST : 29APVPT9158A1Z3')
    pdf.text(130, 18, 'QUOTATION FOR PACKERS AND MOVERS')
    const x = 130; // X-coordinate
     const y = 22; // Y-coordinate
    const width = 25; // Width of the box
    const height = 10; // Height of the box

// Set the fill color to red
pdf.setFillColor(255, 0, 0); // Red color

// Add a filled rectangular box to the PDF
pdf.rect(x, y, width, height, 'F'); // 'F' stands for 'Fill'

// Set text color to white
pdf.setTextColor(255, 255, 255); // White color

// Define the text content
const text = "SUPPORT";

// Calculate the position for the text (centered inside the box)
const textX = x + width / 2;
console.log(textX)
const textY = y + height / 2;

// Set text alignment to center
pdf.text(textX, textY, text, { align: "center" });  
pdf.setTextColor(0,0,0);
pdf.setFontSize(10);
pdf.setFont(undefined,'none')
pdf.text(156, 26, ' 99644 76742')
pdf.text(156, 30, ' 99644 76742')
pdf.addImage(SupportLogo, 'PNG', 176, 21, 15, 10);

//input
pdf.rect(12, 41, 95, 7);
pdf.text(`NAME: ${formData.name}`, 13, 45, { align: "left" });
pdf.rect(12, 48, 95, 7);
pdf.text(`NUMBER: ${formData.mobile}`, 13, 52.5, { align: "left" });
pdf.rect(12, 55, 95, 14);
pdf.text(`ADDRESS: ${formData.address}`, 13, 59.5, { align: "left" });
pdf.rect(107, 41, 38, 7);
pdf.text(`QUOTATION NO: ${count}`, 108, 45.4, { align: "left" });

const currentDate = new Date().toLocaleDateString();
pdf.rect(145, 41, 45, 7,); 
pdf.text(`DATE: ${currentDate}`, 150, 45.4);

pdf.rect(107, 48, 83, 7,); 
pdf.text(`FROM: ${formData.from}`, 108, 52.5);

pdf.rect(107, 55, 83, 7,); 
pdf.text(`TO: ${formData.toLocation}`, 108, 59.5);

pdf.rect(107, 62, 83, 7,); 
pdf.text(`DATE OF MOVING: ${formData.dateOfoPacking}`, 108, 66.5);

//end of first layer

//second layer
pdf.setFontSize(8);
pdf.text(12, 75, 'Dear Sir/Madam')
pdf.text(12, 78, 'We thank you for your valueable enquiry for Packing & Moving of your Office/House Articles On')
pdf.text(12, 81, 'Door to Door basis.We are in pleasure to Quote our reasonable charges as hereunder')

pdf.setFontSize(12);
pdf.setFillColor(255, 0, 0);
pdf.rect(12, 87, 150, 6, 'F'); 

pdf.setDrawColor(0, 0, 0);
pdf.rect(12, 87, 12, 6);
pdf.rect(24, 87, 85, 6);
pdf.rect(109, 87, 26, 6);
pdf.rect(135, 87, 27, 6);

pdf.setTextColor(255, 255, 255);
pdf.text(`Sl no`, 12.5, 91);
pdf.text(`Particulars`, 54.5, 91);
pdf.text(`Part Load`, 112.5, 91);
pdf.text(`Full Load`, 138.5, 91);

//line1 
pdf.rect(12, 93, 12, 6);
pdf.rect(24, 93, 85, 6);
pdf.rect(109, 93, 26, 6);
pdf.rect(135, 93, 27, 6);

pdf.setTextColor(0, 0, 0);
pdf.setFontSize(10);
pdf.text(`1`, 17, 97);
pdf.text(`Transportation charges-(Door to Door /Gdn to Gdn)`, 25, 97);
pdf.text(`${formData.transportChrPart}`, 116.5, 97);
pdf.text(`${formData.transportChrFull}`, 142.5, 97);

let incFull;
let incPart;


if(formData.transportChrPart !== ""){
  incPart = "Included";


}
else{
  incPart = "";
 
}
if(formData.transportChrFull !== ""){
  incFull = "Included";
  

}
else{
  incFull = "";

}

//line2 
pdf.rect(12, 99, 12, 6);
pdf.rect(24, 99, 85, 6);
pdf.rect(109, 99, 26, 6);
pdf.rect(135, 99, 27, 6);

pdf.setTextColor(0, 0, 0);
pdf.setFontSize(10);
pdf.text(`2`, 17, 103);
pdf.text(`Packing charges - Using Quality packing materials`, 25, 103);
pdf.text(`${incPart}`, 116.5, 103);
pdf.text(`${incFull}`, 142.5, 103);



//line3
pdf.rect(12, 105,12, 6);
pdf.rect(24, 105,85, 6);
pdf.rect(109,105, 26, 6);
pdf.rect(135,105, 27, 6);

pdf.setTextColor(0, 0, 0);
pdf.setFontSize(10);
pdf.text(`3`, 17, 109);
pdf.text(`Unacking charges - Using Quality packing materials`, 25, 109);
pdf.text(`${incPart}`, 116.5, 109);
pdf.text(`${incFull}`, 142.5, 109);

//line4
pdf.rect(12, 111,12, 6);
pdf.rect(24, 111,85, 6);
pdf.rect(109,111, 26, 6);
pdf.rect(135,111, 27, 6);

pdf.setTextColor(0, 0, 0);
pdf.setFontSize(10);
pdf.text(`4`, 17, 115);
pdf.text(`Loading Charges & Unloading Charges`, 25, 115);
pdf.text(`${incPart}`, 116.5, 115);
pdf.text(`${incFull}`, 142.5, 115);

//line5
pdf.rect(12, 117,12, 6);
pdf.rect(24, 117,85, 6);
pdf.rect(109,117, 26, 6);
pdf.rect(135,117, 27, 6);

pdf.setTextColor(0, 0, 0);
pdf.setFontSize(10);
pdf.text(`5`, 17, 121);
pdf.text(`Car/Bike Transportation with Loading & Unloading`, 25, 121);
pdf.text(`${formData.carChrPart}`, 116.5, 121);
pdf.text(`${formData.carChrFull}`, 142.5, 121);


   
    pdf.save('formData.pdf');
  };

  return (
    <div className="form-container">
      <h2>Bangalore One Cargo Quotation</h2>
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
          <label htmlFor="from">From Location:</label>
          <input
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

        <div className="form-group">
          <label htmlFor="from">Date of packing:</label>
          <input
            type="date"
            id="dateOfoPacking"
            name="dateOfoPacking"
            value={formData.dateOfoPacking}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">Transport Charges Part Load:</label>
          <input
            type="text"
            id="transportChrPart"
            name="transportChrPart"
            value={formData.transportChrPart}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">Transport Charges Full Load:</label>
          <input
            type="text"
            id="transportChrFull"
            name="transportChrFull"
            value={formData.transportChrFull}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">CAR/BIKE Charges Part Load:</label>
          <input
            type="text"
            id="carChrPart"
            name="carChrPart"
            value={formData.carChrPart}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="from">CAR/BIKE Charges Full Load:</label>
          <input
            type="text"
            id="carChrFull"
            name="carChrFull"
            value={formData.carChrFull}
            onChange={handleInputChange}
          />
        </div>
        
        <button type="submit" className="submit-button">Download</button>
      </form>
    </div>
  );
};

export default Form;
