import React, { useState } from "react";
import "../componets/css/offers.css";

function TrendingOffers() {
  const offers = [
    {
      title: "Save up to Rs 250 on bus tickets",
      code: "FIRST",
      validity: "Valid till 01 Oct",
    },
    {
      title: "Save up to Rs 300 on Karnataka, Tamil",
      code: "CASH300",
      validity: "Valid till 01 Oct",
    },
    {
      title: "Save up to Rs 300 on AP, TS routes",
      code: "SUPERHIT",
      validity: "Valid till 01 Oct",
    },
    {
      title: "Save up with ICICI Bank",
      code: "ICICI300",
      validity: "Valid till 22 Oct",
    },
  ];

  return (
    <div className="trending-offers">
      <h2>Trending Offers</h2>
      <button className="view-all-button">View All</button>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <div className="offer-title">{offer.title}</div>
            <div className="offer-code">{offer.code}</div>
            <div className="offer-validity">{offer.validity}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrendingOffers;
