// import React, { useState } from "react";
// import "../componets/css/searchBar.css";
// import Treanding from "./trendingOffers";
// import axios from "axios";

// const SearchBar = () => {
//   const [from, setFrom] = useState("");
//   const [to, setTo] = useState("");
//   const [date, setDate] = useState("");

//   const handleSearch = () => {
//     axios
//       .get(`/api/bus/search?from=${from}&to=${to}&date=${date}`)
//       .then((response) => {
//         console.response("nppp");
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <>
//       <div className="flex-container">
//         <h1 className="heading">
//           India's No. 1 Online Bus Ticket Booking Site
//         </h1>
//         <div className="search-bar-inputs">
//           <input
//             type="text"
//             value={from}
//             onChange={(e) => setFrom(e.target.value)}
//             placeholder="From"
//             className="search-bar-input"
//           />
//           <input
//             type="text"
//             value={to}
//             onChange={(e) => setTo(e.target.value)}
//             placeholder="To"
//             className="search-bar-input"
//           />
//           <input
//             type="date"
//             value={date}
//             onChange={(e) => setDate(e.target.value)}
//             className="search-bar-input"
//           />
//           <button onClick={handleSearch} className="search-bar-button">
//             Search
//           </button>
//         </div>
//         <h1> app ko swagath hee</h1>
//       </div>
//       <Treanding />
//     </>
//   );
// };

// export default SearchBar;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/searchBar.css";
import axios from "axios";
import Treanding from "./trendingOffers";

const SearchBar = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    if (!from || !to || !date) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");

    // Navigate to results page with search inputs as query parameters
    navigate(`/results?from=${from}&to=${to}&date=${date}`);
  };

  return (
    <div className="flex-container">
      <h1 className="heading">India's No. 1 Online Bus Ticket Booking Site</h1>
      <div className="search-bar-inputs">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="search-bar-input"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          className="search-bar-input"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="search-bar-input"
        />
        <button onClick={handleSearch} className="search-bar-button">
          Search
        </button>
      </div>

      {error && <p className="error-message">{error}</p>}
      <Treanding />
    </div>
  );
};

export default SearchBar;
