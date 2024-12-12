import React, { useState } from 'react';

function SimpleForm(){
  
  const [formData, setFormData] = useState({
    Firstname: '',
    Lastname: '',
    MobileNumber: '',
    Email: '',
    BatchNo: ''
  });

 
  const [submitted, setSubmitted] = useState(false);

 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div style={{ border: '2px solid black', padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Form Submission</h2>
      {submitted ? (
        <div>
          <h3>Form Submitted Successfully!</h3>
          <p>Firstname: {formData.Firstname}</p>
          <p>Lastname: {formData.Lastname}</p>
          <p>Mobile Number: {formData.MobileNumber}</p>
          <p>Email: {formData.Email}</p>
          <p>Batch No: {formData.BatchNo}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div>
            <label htmlFor="Firstname">Firstname:</label>
            <input
              type="text"
              id="Firstname"
              name="Firstname"
              value={formData.Firstname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Lastname">Lastname:</label>
            <input
              type="text"
              id="Lastname"
              name="Lastname"
              value={formData.Lastname}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="MobileNumber">Mobile Number:</label>
            <input
              type="tel"
              id="MobileNumber"
              name="MobileNumber"
              value={formData.MobileNumber}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="Email">Email:</label>
            <input
              type="email"
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="BatchNo">Batch No:</label>
            <input
              type="text"
              id="BatchNo"
              name="BatchNo"
              value={formData.BatchNo}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default SimpleForm;
