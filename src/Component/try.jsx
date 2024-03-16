import React, { useState } from 'react';

const SearchBar = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [searched, setSearched] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.length >= 2) {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.code.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(filtered);
      setSearched(true);
    } else {
      setSearched(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        list={searched && inputValue.length >= 2 ? "stations" : null}
        placeholder="Search or select..."
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

const App = () => {
  // Example data
  const exampleData = [
    { "name": "ABU ROAD", "code": "ABR" },
    { "name": "ACHHNERA", "code": "AH" },
    { "name": "ADONI", "code": "AD" },
    { "name": "ADRA", "code": "ADRA" },
    { "name": "AGRA FORT", "code": "AF" },
    
{"name":"Ranolishishu", "code":"RNIS"},
{"name":"Runija", "code":"RNJ"},
{"name":"Ranjangaon Road", "code":"RNJD"},
{"name":"Ranala", "code":"RNL"},
{"name":"Rajankunti", "code":"RNN"},
{"name":"Ranoli", "code":"RNO"},
{"name":"Rupnarayanpur", "code":"RNPR"},
{"name":"Renukut", "code":"RNQ"},
{"name":"Ranibennur", "code":"RNR"},
{"name":"Ranipur Road", "code":"RNRD"},
{"name":"Ranthambhore", "code":"RNT"},
{"name":"Raniwara", "code":"RNV"},
{"name":"Renwal", "code":"RNW"},
{"name":"Ruseraghat", "code":"ROA"},
{"name":"Robertson", "code":"ROB"},
{"name":"Roha", "code":"ROHA"},
{"name":"Rupsa Jn.", "code":"ROP"},
{"name":"Rora", "code":"RORA"},
{"name":"Rajosi", "code":"ROS"},
{"name":"Roza Jn.", "code":"ROZA"},
{"name":"Rupnagar", "code":"RPAR"},
{"name":"Rupaund", "code":"RPD"},
{"name":"Rupaheli", "code":"RPI"},
{"name":"Raghunathpur", "code":"RPR"},
{"name":"Rupra Road", "code":"RPRD"},
{"name":"Ranippettai", "code":"RPT"},
{"name":"Ratanpur", "code":"RPUR"},
{"name":"Ranapratapnagar", "code":"RPZ"},
{"name":"Rningrjlpaigri", "code":"RQJ"},
{"name":"Richha Road", "code":"RR"},
{"name":"Rahul Road", "code":"RRE"},
{"name":"Rahuri", "code":"RRI"},
{"name":"Ramarajupalli", "code":"RRJ"},
{"name":"Rewral", "code":"RRL"},
{"name":"Ranchi Road", "code":"RRME"},
{"name":"Risama", "code":"RSA"},
{"name":"Ramsagar", "code":"RSG"},
{"name":"Ratanshahr", "code":"RSH"},
{"name":"Rasmara", "code":"RSM"},
{"name":"Rasana", "code":"RSNA"},
{"name":"Raisinghnagar", "code":"RSNR"},
{"name":"Rasra", "code":"RSR"},
{"name":"Rmgrhshekhwati", "code":"RSWT"},
{"name":"Rasayani", "code":"RSYI"},
{"name":"Ruthiyai", "code":"RTA"},
{"name":"Rangtong", "code":"RTG"},
{"name":"Ratangaon", "code":"RTGN"},
{"name":"Raoti", "code":"RTI"},
{"name":"Ramtek", "code":"RTK"},
{"name":"Ratanpura", "code":"RTP"},
{"name":"Rasulabad", "code":"RUB"},
{"name":"Rajlugarhi", "code":"RUG"},
{"name":"Rukni", "code":"RUI"},
{"name":"Ranuj", "code":"RUJ"},
{"name":"Rauli", "code":"RUL"},
{"name":"Rupamau", "code":"RUM"},
{"name":"Rudrapur City", "code":"RUPC"},
{"name":"Rudrapur Road", "code":"RUPR"},
{"name":"Ranpur", "code":"RUR"},
{"name":"Rura", "code":"RURA"},
{"name":"Ratnal", "code":"RUT"},
{"name":"Raver", "code":"RV"},
{"name":"Ravikampadu", "code":"RVD"},
{"name":"Rajabhatkhawa", "code":"RVK"},
{"name":"Ravindrakhani", "code":"RVKH"},
{"name":"Rowriahsdg", "code":"RWH"},
{"name":"Rawaniadungar", "code":"RWJ"},
{"name":"Raiwala", "code":"RWL"},
{"name":"Ranavav", "code":"RWO"},
{"name":"Rowtabagan", "code":"RWTB"},
{"name":"Ramsan", "code":"RXN"},
{"name":"Ratangarh West", "code":"RXW"},
{"name":"Rayanapad", "code":"RYP"},
{"name":"Rasuriya", "code":"RYS"},

    // Add more data here...
  ];

  return (
    <div>
      <h1>Railway Station Search</h1>
      <SearchBar data={exampleData} />
    </div>
  );
};

export default App;
