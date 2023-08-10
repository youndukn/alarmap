import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [startPosition, setStartPosition] = useState('');
  const [endPosition, setEndPosition] = useState('');

  const handleRouteSearch = () => {
    onSearch(startPosition, endPosition);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Starting Position"
        value={startPosition}
        onChange={(e) => setStartPosition(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Position"
        value={endPosition}
        onChange={(e) => setEndPosition(e.target.value)}
      />
      <button onClick={handleRouteSearch}>Find Route</button>
    </div>
  );
};

export default Search;