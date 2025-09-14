import React, { useState } from "react";
import Select from "react-select";
import emailjs from "emailjs-com";
import "./Plan.css";

const airportOptions = [
  { value: "LOS", label: "Murtala Muhammed International (LOS) – Lagos" },
  { value: "ABV", label: "Nnamdi Azikiwe International (ABV) – Abuja" },
  { value: "PHC", label: "Port Harcourt International (PHC) – Port Harcourt" },
  { value: "KAN", label: "Mallam Aminu Kano International (KAN) – Kano" },
  { value: "ENU", label: "Akanu Ibiam International (ENU) – Enugu" },
  { value: "CBQ", label: "Margaret Ekpo International (CBQ) – Calabar" },
  {
    value: "QOW",
    label: "Sam Mbakwe International Cargo Airport (QOW) – Owerri",
  },
  { value: "SKO", label: "Sadiq Abubakar III International (SKO) – Sokoto" },
  { value: "ILR", label: "Ilorin International (ILR) – Ilorin" },
  { value: "YOL", label: "Yola Airport (YOL) – Yola" },
  { value: "KAD", label: "Kaduna International (KAD) – Kaduna" },
  { value: "AKR", label: "Akure Airport (AKR) – Akure" },
  { value: "BNI", label: "Benin Airport (BNI) – Benin City" },
  { value: "IBA", label: "Ibadan Airport (IBA) – Ibadan" },
];

const airplaneOptions = [
  { value: "Bombardier", label: "Bombardier" },
  { value: "Gulfstream G550/GIV", label: "Gulfstream G550/GIV" },
  { value: "Embraer Legacy 600", label: "Embraer Legacy 600" },
  { value: "Challenger 605", label: "Challenger 605" },
  { value: "Challenger 604", label: "Challenger 604" },
  { value: "Hawker XP", label: "Hawker XP" },
  { value: "Learjet", label: "Learjet" },
  { value: "AW139 Helicopter", label: "AW139 Helicopter" },
  { value: "AW109 Helicopter", label: "AW109 Helicopter" },
];

export default function PlanForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    departure: "",
    destination: "",
    date: "",
    passengers: 1,
    aircraftType: "",
  });

  const [showMore, setShowMore] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setShowMore(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_h5f5y3p", // Service ID
        "template_jk42smo", // Template ID (same as RequestQuote)
        form,
        "KDM4I53FtVmvCaAwz" // Public Key
      )
      .then(
        (result) => {
          // ✅ Confirmation email
          emailjs.send(
            "service_h5f5y3p",
            "template_eg9pf05", // Confirmation template
            form,
            "KDM4I53FtVmvCaAwz"
          );

          alert("Your flight request has been submitted successfully!");
          setForm({
            name: "",
            email: "",
            phone: "",
            departure: "",
            destination: "",
            date: "",
            passengers: 1,
            aircraftType: "",
          });
          setShowMore(false);
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
    <div className="plan-container">
      <div className="plan-text">
        <h2>Plan a Flight</h2>
        <p>
          Enter your flight details below and our team will contact you shortly.
          Private jet charter flight prices are subject to the market rate and
          start from $11,000 per hour.
        </p>
      </div>

      <form className="plan-form" onSubmit={handleSubmit}>
        {/* From */}
        <div className="form-group">
          <label>From</label>
          <Select
            options={airportOptions}
            value={
              form.departure
                ? { value: form.departure, label: form.departure }
                : null
            }
            onChange={(opt) => setForm({ ...form, departure: opt.value })}
            placeholder="Select departure airport"
            isSearchable
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        {/* To */}
        <div className="form-group">
          <label>To</label>
          <Select
            options={airportOptions}
            value={
              form.destination
                ? { value: form.destination, label: form.destination }
                : null
            }
            onChange={(opt) => setForm({ ...form, destination: opt.value })}
            placeholder="Select destination airport"
            isSearchable
            classNamePrefix="react-select"
            menuPortalTarget={document.body}
            styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
          />
        </div>

        {/* Departure date */}
        <div className="form-group">
          <label>Travel Date</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
          />
        </div>

        {/* Passengers */}
        <div className="form-group">
          <label>Passengers</label>
          <div className="passenger-control">
            <button
              type="button"
              onClick={() =>
                setForm({
                  ...form,
                  passengers: form.passengers > 1 ? form.passengers - 1 : 1,
                })
              }
            >
              -
            </button>
            <span>{form.passengers}</span>
            <button
              type="button"
              onClick={() =>
                setForm({ ...form, passengers: form.passengers + 1 })
              }
            >
              +
            </button>
          </div>
        </div>

        {/* Next Button */}
        {!showMore && (
          <div className="form-group full-width">
            <button className="quote-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        )}

        {/* Expand Section */}
        <div className={`expand-section ${showMore ? "show" : ""}`}>
          {/* Airplane selection */}
          <div className="form-group">
            <label>Preferred Airplane</label>
            <Select
              options={airplaneOptions}
              value={
                form.aircraftType
                  ? { value: form.aircraftType, label: form.aircraftType }
                  : null
              }
              onChange={(opt) => setForm({ ...form, aircraftType: opt.value })}
              placeholder="Select an airplane"
              isSearchable
              classNamePrefix="react-select"
              menuPortalTarget={document.body}
              styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
            />
          </div>

          {/* Full Name */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Submit */}
          <div className="form-group full-width">
            <button type="submit" className="quote-btn" disabled={loading}>
              {loading ? <span className="spinner"></span> : "Request Quote"}
            </button>
          </div>
        </div>
      </form>

      <p className="multi-city">
        Need more flights? <a href="#">Switch to multi-city</a>
      </p>
    </div>
  );
}
