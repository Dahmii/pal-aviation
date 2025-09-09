import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../../components/Header/Header";
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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Send details to Pal Aviation business email
    emailjs
      .send(
        "service_h5f5y3p", // Service ID
        "template_jk42smo", // Template ID for business
        form,
        "KDM4I53FtVmvCaAwz" // Public Key
      )
      .then(
        (result) => {
          // ✅ Send confirmation email to customer
          emailjs.send(
            "service_h5f5y3p",
            "template_eg9pf05", // Confirmation template ID
            {
              name: form.name,
              email: form.email,
              departure: form.departure,
              destination: form.destination,
              date: form.date,
              passengers: form.passengers,
              aircraftType: form.aircraftType,
              phone: form.phone,
            },
            "KDM4I53FtVmvCaAwz"
          );

          alert("Your request has been submitted successfully!");
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
          setLoading(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Oops! Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div>
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
            <select
              name="aircraftType"
              value={form.aircraftType}
              onChange={handleChange}
              required
            >
              <option value="">Select Preferred Aircraft</option>
              <option value="Bombardier">Bombardier</option>
              <option value="Gulfstream G550/GIV">Gulfstream G550/GIV</option>
              <option value="Embraer Legacy 600">Embraer Legacy 600</option>
              <option value="Challenger 605">Challenger 605</option>
              <option value="Challenger 604">Challenger 604</option>
              <option value="Hawker XP">Hawker XP</option>
              <option value="Learjet">Learjet</option>
              <option value="AW139 Helicopter">AW139 Helicopter</option>
              <option value="AW109 Helicopter">AW109 Helicopter</option>
            </select>
          </div>
          <textarea
            name="message"
            placeholder="Additional Information (optional)"
            value={form.message}
            onChange={handleChange}
            rows={4}
          />
          <button type="submit" className="quote-btn" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Submit Request"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default RequestQuote;
