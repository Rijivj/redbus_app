import React, { useState } from "react";
import axios from "axios";
import "../componets/css/bookingForm.css";

const BookingForm = ({ busId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [seat, setSeat] = useState("");

  const handleBooking = () => {
    if (!name || !email || !phone || !seat) {
      alert("Please fill in all fields.");
      return;
    }

    // Call API to book a ticket
    axios
      .post("http://localhost:5000/api/bus/book", {
        busId,
        userName: name,
        seatNumber: seat,
      })
      .then((response) => {
        alert("Booking successful! Booking ID: " + response.data.bookingId);
        // Clear form fields
        setName("");
        setEmail("");
        setPhone("");
        setSeat("");
      })
      .catch((error) => {
        console.error("Error booking ticket:", error);
        alert("Booking failed. Please try again.");
      });
  };

  return (
    <div className="booking-form">
      <h2>Book Your Ticket</h2>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
      <label>Seat Number:</label>
      <input
        type="text"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
        required
      />
      <button className="book-button" onClick={handleBooking}>
        Book Ticket
      </button>
    </div>
  );
};

export default BookingForm;
