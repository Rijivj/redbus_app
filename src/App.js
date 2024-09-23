import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./componets/seacrchbar";
import BookingForm from "./componets/bokkingForm";
import Header from "./componets/header";
import Footer from "./componets/footer";
import BusResults from "./componets/busResults";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <Routes>
          <Route path="/" exact element={<SearchBar />} />
          <Route path="/results" element={<BusResults />} />
          <Route path="/book" element={<BookingForm />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
