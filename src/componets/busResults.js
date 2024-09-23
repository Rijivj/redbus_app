import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/busResults.css";
import BookingForm from "../componets/bokkingForm";

const BusResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [busResults, setBusResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filter, setFilter] = useState({ type: "", price: "" });
  const [loading, setLoading] = useState(true);
  const [selectedBus, setSelectedBus] = useState(null);
  const [showSeats, setShowSeats] = useState(false);

  const searchParams = new URLSearchParams(location.search);
  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("date");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/bus/search?from=${from}&to=${to}&date=${date}`
      )
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

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

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

  const handleViewSeats = (bus) => {
    setSelectedBus(bus);
    setShowSeats(!showSeats);
  };

  if (loading) {
    return <div className="loading-message">Loading buses...</div>;
  }

  return (
    <div className="bus-results-page">
      <h1>
        Bus Results for {from} to {to} on {date}
      </h1>

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

      <div className="bus-results">
        {filteredResults.length > 0 ? (
          filteredResults.map((bus, index) => (
            <div key={index} className="bus-card">
              <h2>{bus.busName}</h2>
              <p>From: {bus.fromCity}</p>
              <p>To: {bus.toCity}</p>
              <p>Date: {bus.date}</p>
              <p>Type: {bus.type}</p>
              <p>Price: ₹{bus.price}</p>
              <button onClick={() => handleViewSeats(bus)}>
                {showSeats && selectedBus === bus ? "Hide Seats" : "View Seats"}
              </button>
              {showSeats && selectedBus === bus && (
                <div className="seat-selection">
                  {/* Placeholder for seat selection UI */}
                  <p>Select your seats for {bus.busName}</p>
                  <BookingForm busId={bus.id} />
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="no-results-message">
            No buses found for the selected criteria.
          </p>
        )}
      </div>

      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
    </div>
  );
};

export default BusResults;
