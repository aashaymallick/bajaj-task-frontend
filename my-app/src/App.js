import React, { useState } from 'react';
import './App.css';
import DataForm from './Dataform';
import DataDisplay from './Datadisplay';

function App() {
  const [response, setResponse] = useState(null);

  const handleFormSubmit = async (data) => {
    try {
      const res = await fetch('bajaj-task-backend-delta.vercel.app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (res.ok) {
        const result = await res.json();
        setResponse(result);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error fetching data: ' + error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>BFHL Data Processor</h1>
        <DataForm onSubmit={handleFormSubmit} />
        {response && <DataDisplay data={response} />}
      </header>
    </div>
  );
}

export default App;
