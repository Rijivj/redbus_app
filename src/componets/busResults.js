import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./css/busResults.css";

const BusResults = () => {
  const location = useLocation(); // To get the query params from URL
  const [busResults, setBusResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filter, setFilter] = useState({ type: "", price: "" });
  const [loading, setLoading] = useState(true);

  // Parse query parameters
  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  // Fetch buses from the API based on the search criteria
  useEffect(() => {
    axios
      .get(`/api/bus/search?from=${from}&to=${to}&date=${date}`)
      .then((response) => {
        setBusResults(response.data);
        setFilteredResults(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bus data:", error);
        setLoading(false);
      });
  }, [from, to, date]);

  // Handle filter changes
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  // Apply filters
  useEffect(() => {
    let results = busResults;

    if (filter.type) {
      results = results.filter((bus) => bus.type === filter.type);
    }

    if (filter.price) {
      results = results.filter((bus) => bus.price <= filter.price);
    }

    setFilteredResults(results);
  }, [filter, busResults]);

  if (loading) {
    return <div className="loading-message">Loading buses...</div>;
  }

  return (
    <div className="bus-results-page">
      <h1>
        Bus Results for {from} to {to} on {date}
      </h1>

      {/* Filters */}
      <div className="filters">
        <label>
          Bus Type:
          <select name="type" value={filter.type} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
            <option value="Sleeper">Sleeper</option>
          </select>
        </label>
        <label>
          Max Price:
          <input
            type="number"
            name="price"
            value={filter.price}
            onChange={handleFilterChange}
            placeholder="Max Price"
          />
        </label>
      </div>

      {/* Display bus results */}
      <div className="bus-results">
        {filteredResults.length > 0 ? (
          filteredResults.map((bus, index) => (
            <div key={index} className="bus-card">
              <h2>{bus.busName}</h2>
              <p>From: {bus.from}</p>
              <p>To: {bus.to}</p>
              <p>Date: {bus.date}</p>
              <p>Type: {bus.type}</p>
              <p>Price: ₹{bus.price}</p>
            </div>
          ))
        ) : (
          <p className="no-results-message">
            No buses found for the selected criteria.s
          </p>
        )}
      </div>
    </div>
  );
};

export default BusResults;
