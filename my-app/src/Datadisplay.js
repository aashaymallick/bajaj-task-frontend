import React, { useState } from 'react';

function DataDisplay({ data }) {
  const [filter, setFilter] = useState('all');

  const renderFilteredData = () => {
    if (filter === 'numbers') return <p>Numbers: {data.numbers.join(', ')}</p>;
    if (filter === 'alphabets') return <p>Alphabets: {data.alphabets.join(', ')}</p>;
    if (filter === 'highest') return <p>Highest Alphabet: {data.highest_alphabet.join(', ')}</p>;
    return (
      <div>
        <p>Numbers: {data.numbers.join(', ')}</p>
        <p>Alphabets: {data.alphabets.join(', ')}</p>
        <p>Highest Alphabet: {data.highest_alphabet.join(', ')}</p>
      </div>
    );
  };

  return (
    <div>
      <select value={filter} onChange={e => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="numbers">Numbers</option>
        <option value="alphabets">Alphabets</option>
        <option value="highest">Highest Alphabet</option>
      </select>
      {renderFilteredData()}
    </div>
  );
}

export default DataDisplay;
