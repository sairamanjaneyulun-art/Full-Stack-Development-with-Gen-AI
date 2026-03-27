import axios from "axios";
import { useEffect, useState } from "react";
import { validateBookingForm, hasErrors } from "../utils/validation";

function Booking() {
  const [cabs, setCabs] = useState([]);
  const [booking, setBooking] = useState({
    customerName: "",
    phone: "",
    pickupLocation: "",
    dropLocation: "",
    cabId: "",
    cabType: ""
  });

  const [errors, setErrors] = useState({});
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("");

  const CAB_URL = "http://localhost:3000/cabs";
  const BOOKING_URL = "http://localhost:3000/bookings";

  useEffect(() => {
    axios
      .get(CAB_URL)
      .then((res) => setCabs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBooking({ ...booking, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const bookCab = () => {
    // Validate form
    const newErrors = validateBookingForm(booking);
    setErrors(newErrors);

    if (hasErrors(newErrors)) {
      setMsg("Please fix all errors before booking");
      setMsgType("error");
      return;
    }

    // Find the selected cab
    const selectedCab = cabs.find(cab => cab.id === booking.cabId);
    if (!selectedCab) {
      setMsg("Please select a cab");
      setMsgType("error");
      return;
    }

    const newBooking = {
      ...booking,
      cabId: selectedCab.id,
      cabType: selectedCab.cabName,
      driverName: selectedCab.driverName,
      status: "Booked"
    };

    axios
      .post(BOOKING_URL, newBooking)
      .then(() => {
        setMsg("✓ Cab booked successfully! Driver will contact you shortly.");
        setMsgType("success");
        setBooking({
          customerName: "",
          phone: "",
          pickupLocation: "",
          dropLocation: "",
          cabId: "",
          cabType: ""
        });
        setErrors({});
      })
      .catch((err) => {
        setMsg("Error booking cab. Please try again.");
        setMsgType("error");
        console.log(err);
      });
  };

  const containerStyle = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 30px",
    backgroundColor: "#f8f9fa",
    minHeight: "calc(100vh - 200px)"
  };

  const headingStyle = {
    color: "#1e90ff",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2.2em",
    fontWeight: "600"
  };

  const formContainerStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    marginBottom: "30px"
  };

  const formGroupStyle = {
    marginBottom: "20px"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#333",
    fontWeight: "600",
    fontSize: "0.95em"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "2px solid #e0e0e0",
    borderRadius: "5px",
    fontSize: "1em",
    fontFamily: "inherit",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease",
    backgroundColor: "#fff"
  };

  const errorStyle = {
    color: "#d32f2f",
    fontSize: "0.85em",
    marginTop: "5px",
    fontWeight: "500"
  };

  const carsHeadingStyle = {
    color: "#1e90ff",
    marginTop: "40px",
    marginBottom: "20px",
    fontSize: "1.5em",
    fontWeight: "600"
  };

  const carsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "20px",
    marginBottom: "30px"
  };

  const cabCardStyle = (isSelected) => ({
    border: `2px solid ${isSelected ? "#1e90ff" : "#e0e0e0"}`,
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: isSelected ? "#e6f3ff" : "white",
    transition: "all 0.3s ease",
    cursor: "pointer",
    boxShadow: isSelected ? "0 4px 8px rgba(30, 144, 255, 0.2)" : "none"
  });

  const cabNameStyle = {
    fontSize: "1.3em",
    fontWeight: "600",
    color: "#333",
    marginBottom: "12px"
  };

  const cabDetailStyle = {
    color: "#666",
    fontSize: "0.95em",
    marginBottom: "8px",
    lineHeight: "1.4"
  };

  const cabFareStyle = {
    color: "#1e90ff",
    fontSize: "1.2em",
    fontWeight: "bold",
    marginTop: "12px",
    paddingTop: "12px",
    borderTop: "1px solid #e0e0e0"
  };

  const bookButtonStyle = {
    width: "100%",
    padding: "12px",
    backgroundColor: "#1e90ff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "1em",
    transition: "background-color 0.3s ease",
    marginTop: "12px"
  };

  const messageStyle = {
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
    fontWeight: "500",
    fontSize: "0.95em",
    borderLeft: "4px solid #d32f2f",
    backgroundColor: "#ffebee",
    color: "#d32f2f"
  };

  const successMessageStyle = {
    padding: "15px",
    borderRadius: "5px",
    marginBottom: "20px",
    fontWeight: "500",
    fontSize: "0.95em",
    borderLeft: "4px solid #4caf50",
    backgroundColor: "#e8f5e9",
    color: "#2e7d32"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Book Your Ride</h2>

      {msg && (
        <div style={msgType === "error" ? messageStyle : successMessageStyle}>
          {msg}
        </div>
      )}

      <div style={formContainerStyle}>
        <form>
          <div style={formGroupStyle}>
            <label style={labelStyle}>Full Name *</label>
            <input
              type="text"
              name="customerName"
              placeholder="Enter your full name"
              value={booking.customerName}
              onChange={handleInput}
              onFocus={(e) => (e.target.style.borderColor = "#1e90ff")}
              onBlur={(e) => (e.target.style.borderColor = errors.customerName ? "#d32f2f" : "#e0e0e0")}
              style={{
                ...inputStyle,
                borderColor: errors.customerName ? "#d32f2f" : "#e0e0e0"
              }}
            />
            {errors.customerName && (
              <div style={errorStyle}>{errors.customerName}</div>
            )}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Phone Number *</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your 10-digit phone number"
              value={booking.phone}
              onChange={handleInput}
              onFocus={(e) => (e.target.style.borderColor = "#1e90ff")}
              onBlur={(e) => (e.target.style.borderColor = errors.phone ? "#d32f2f" : "#e0e0e0")}
              style={{
                ...inputStyle,
                borderColor: errors.phone ? "#d32f2f" : "#e0e0e0"
              }}
            />
            {errors.phone && <div style={errorStyle}>{errors.phone}</div>}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Pickup Location *</label>
            <input
              type="text"
              name="pickupLocation"
              placeholder="Enter your pickup location"
              value={booking.pickupLocation}
              onChange={handleInput}
              onFocus={(e) => (e.target.style.borderColor = "#1e90ff")}
              onBlur={(e) => (e.target.style.borderColor = errors.pickupLocation ? "#d32f2f" : "#e0e0e0")}
              style={{
                ...inputStyle,
                borderColor: errors.pickupLocation ? "#d32f2f" : "#e0e0e0"
              }}
            />
            {errors.pickupLocation && (
              <div style={errorStyle}>{errors.pickupLocation}</div>
            )}
          </div>

          <div style={formGroupStyle}>
            <label style={labelStyle}>Drop Location *</label>
            <input
              type="text"
              name="dropLocation"
              placeholder="Enter your drop location"
              value={booking.dropLocation}
              onChange={handleInput}
              onFocus={(e) => (e.target.style.borderColor = "#1e90ff")}
              onBlur={(e) => (e.target.style.borderColor = errors.dropLocation ? "#d32f2f" : "#e0e0e0")}
              style={{
                ...inputStyle,
                borderColor: errors.dropLocation ? "#d32f2f" : "#e0e0e0"
              }}
            />
            {errors.dropLocation && (
              <div style={errorStyle}>{errors.dropLocation}</div>
            )}
          </div>
        </form>
      </div>

      <h3 style={carsHeadingStyle}>Select Your Preferred Cab</h3>

      <div style={carsGridStyle}>
        {cabs.map((cab) => {
          const isSelected = booking.cabId === cab.id;
          return (
            <div
              key={cab.id}
              style={cabCardStyle(isSelected)}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "#1e90ff";
                  e.currentTarget.style.boxShadow =
                    "0 6px 12px rgba(30, 144, 255, 0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "#e0e0e0";
                  e.currentTarget.style.boxShadow = "none";
                }
              }}
              onClick={() => setBooking({ ...booking, cabId: cab.id })}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "12px"
                }}
              >
                <h4 style={cabNameStyle}>{cab.cabName}</h4>
                <input
                  type="radio"
                  name="cabSelection"
                  checked={isSelected}
                  onChange={() => setBooking({ ...booking, cabId: cab.id })}
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                />
              </div>

              <p style={cabDetailStyle}>
                <strong>Model:</strong> {cab.carModel}
              </p>
              <p style={cabDetailStyle}>
                <strong>Driver:</strong> {cab.driverName}
              </p>
              <p style={cabDetailStyle}>
                <strong>Phone:</strong> {cab.driverPhone}
              </p>
              <p style={cabDetailStyle}>
                <strong>Seats:</strong> {cab.seats}
              </p>
              <p style={cabFareStyle}>₹{cab.farePerKm} per km</p>
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={bookCab}
          disabled={!booking.cabId}
          style={{
            ...bookButtonStyle,
            opacity: booking.cabId ? 1 : 0.5,
            cursor: booking.cabId ? "pointer" : "not-allowed",
            padding: "15px 30px",
            fontSize: "1.1em"
          }}
          onMouseEnter={(e) => {
            if (booking.cabId) {
              e.target.style.backgroundColor = "#1873cc";
            }
          }}
          onMouseLeave={(e) => {
            if (booking.cabId) {
              e.target.style.backgroundColor = "#1e90ff";
            }
          }}
        >
          Book Selected Cab
        </button>
      </div>
    </div>
  );
}

export default Booking;