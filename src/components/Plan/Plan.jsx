import React, { useState } from "react";
import Select from "react-select";
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

export default function PlanForm() {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState(1);

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

      <form className="plan-form">
        {/* From */}
        <div className="form-group">
          <label>From</label>
          <Select
            options={airportOptions}
            value={from}
            onChange={setFrom}
            placeholder="Select departure airport"
            isSearchable
          />
        </div>

        {/* To */}
        <div className="form-group">
          <label>To</label>
          <Select
            options={airportOptions}
            value={to}
            onChange={setTo}
            placeholder="Select destination airport"
            isSearchable
          />
        </div>

        {/* Departure date */}
        <div className="form-group">
          <label>Departure Date</label>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {/* Return date */}
        <div className="form-group">
          <label>Return Date</label>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
        </div>

        {/* Passengers */}
        <div className="form-group">
          <label>Passengers</label>
          <div className="passenger-control">
            <button
              type="button"
              onClick={() => setPassengers(passengers > 1 ? passengers - 1 : 1)}
            >
              -
            </button>
            <span>{passengers}</span>
            <button type="button" onClick={() => setPassengers(passengers + 1)}>
              +
            </button>
          </div>
        </div>
      </form>

      {/* Button */}
      <div className="form-group full-width">
        <button type="submit" className="quote-btn">
          Get Quote
        </button>
      </div>

      <p className="multi-city">
        Need more flights? <a href="#">Switch to multi-city</a>
      </p>
    </div>
  );
}
