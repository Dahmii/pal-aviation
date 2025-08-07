import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./RequestQuote.css";

const RequestQuote = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    date: "",
    passengers: "",
    aircraftType: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to backend or email service)
    alert("Your request has been submitted!");
    setForm({
      name: "",
      email: "",
      phone: "",
      departure: "",
      destination: "",
      date: "",
      passengers: "",
      aircraftType: "",
      message: "",
    });
  };

  return (
    <div>
      <Navbar />
      <Header
        title={
          <>
            Request a <span style={{ color: "#ff5a5f" }}>Quote</span>
          </>
        }
        subtitle="Let us know your travel details and we'll get back to you with a personalized quote."
        showAnimatedText={false}
        showButton={false}
      />
      <main className="quote-main">
        <form className="quote-form" onSubmit={handleSubmit}>
          <div className="quote-form-row">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-form-row">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="passengers"
              placeholder="No. of Passengers"
              value={form.passengers}
              onChange={handleChange}
              min={1}
              required
            />
          </div>
          <div className="quote-form-row">
            <input
              type="text"
              name="departure"
              placeholder="Departure Location"
              value={form.departure}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={form.destination}
              onChange={handleChange}
              required
            />
          </div>
          <div className="quote-form-row">
            <input
              type="date"
              name="date"
              placeholder="Travel Date"
              value={form.date}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="aircraftType"
              placeholder="Preferred Aircraft Type"
              value={form.aircraftType}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Additional Information (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit" className="quote-btn">
            Submit Request
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default RequestQuote;
