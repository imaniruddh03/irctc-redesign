import React, { useState, useEffect } from 'react';

const SearchBar = ({ data, value, onChange }) => {
  const [inputValue, setInputValue] = useState(value);
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const calculateRelevance = (item, query) => {
    const itemName = item.name.toLowerCase();
    const itemCode = item.code.toLowerCase();
    query = query.toLowerCase();
    const nameMatch = itemName.includes(query);
    const codeMatch = itemCode.includes(query);
    if (nameMatch && codeMatch) {
      return 2; 
    } else if (nameMatch || codeMatch) {
      return 1; 
    } else {
      return 0; 
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (newValue.length >= 2) {
      const filtered = data.filter(item =>
        calculateRelevance(item, newValue) > 0
      );
      filtered.sort((a, b) => {
        const relevanceA = calculateRelevance(a, newValue);
        const relevanceB = calculateRelevance(b, newValue);
        return relevanceB - relevanceA; 
      });
      setFilteredData(filtered);
      setSearched(true);
    } else {
      setSearched(false);
    }

    onChange(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        list={searched && inputValue.length >= 2 ? "stations" : null}
        placeholder="Search Your Station"
        className="w-[15vw] h-[2vw] bg-[#292C34] rounded-xl px-3"
      />
      {searched && inputValue.length >= 2 && (
        <datalist id="stations">
          {filteredData.map(item => (
            <option key={item.code} value={`${item.name} - ${item.code}`} />
          ))}
        </datalist>
      )}
    </div>
  );
};

export default SearchBar;
