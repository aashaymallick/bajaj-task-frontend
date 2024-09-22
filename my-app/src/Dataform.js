import React, { useState } from 'react';

function DataForm({ onSubmit }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setInput(event.target.value);
    setError('');  // Clear error on input change
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      const data = JSON.parse(input);
      if (data && data.data) {
        onSubmit(data);
      } else {
        setError('Invalid JSON. Please ensure the structure is correct.');
      }
    } catch (e) {
      setError('Invalid JSON format.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={handleChange}
          placeholder='Enter JSON here...'
          rows="5"
          cols="50"
        />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default DataForm;
