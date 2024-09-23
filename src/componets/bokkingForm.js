import React, { useState } from "react";

const BookingForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [busId, setBusId] = useState("");
  const [seat, setSeat] = useState("");

  const handleBooking = () => {
    //     // Call API to book a ticket
    //     axios
    //       .post("/api/bookings", {
    //         name,
    //         email,
    //         phone,
    //         busId,
    //         seat,
    //       })
    //       .then((response) => {
    //         // Handle booking success
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //       });
  };

  return (
    <div>
      <label>Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <br />
      <label>Bus ID:</label>
      <input
        type="text"
        value={busId}
        onChange={(e) => setBusId(e.target.value)}
      />
      <br />
      <label>Seat:</label>
      <input
        type="text"
        value={seat}
        onChange={(e) => setSeat(e.target.value)}
      />
      <br />
      <button onClick={handleBooking}>Book Ticket</button>
    </div>
  );
};

export default BookingForm;
