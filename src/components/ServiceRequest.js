import React, { useState } from 'react';
import '../App.css'; // Importa el archivo CSS

const ServiceRequest = () => {
  const [details, setDetails] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting service request
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Details:
        <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <button type="submit">Request Service</button>
    </form>
  );
};

export default ServiceRequest;