import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    quality: '',
    appType: '',
    design: '',
    revenue: '',
    login: '',
    website: '',
    profile: '',
    admin: '',
    languages: '',
    projectStage: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log('Estimated cost:', data.estimatedCost);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      {/* Renderizar os campos do formulário aqui */}
      <button type="submit">Calculate</button>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  /* Estilos do formulário */
`;

export default CalculatorForm;
