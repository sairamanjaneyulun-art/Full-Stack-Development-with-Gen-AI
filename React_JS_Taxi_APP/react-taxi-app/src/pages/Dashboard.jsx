import axios from "axios";
import { useEffect, useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [cabs, setCabs] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const CAB_URL = "http://localhost:3000/cabs";
  const BOOKING_URL = "http://localhost:3000/bookings";

  const loadCabs = async () => {
    try {
      const res = await axios.get(CAB_URL);
      setCabs(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const loadBookings = async () => {
    try {
      const res = await axios.get(BOOKING_URL);
      setBookings(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    const init = async () => {
      await loadCabs();
      await loadBookings();
    };
    init();
  }, []);

  const completedBookings = bookings.filter((b) => b.status === "Completed").length;
  const cancelledBookings = bookings.filter((b) => b.status === "Cancelled").length;
  const totalBookings = bookings.length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>📊 Taxi Booking Dashboard</h1>
        <p>Real-time overview of your taxi booking service</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🚕</div>
          <div className="stat-content">
            <h3>Total Cabs</h3>
            <p className="stat-number">{cabs.length}</p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📅</div>
          <div className="stat-content">
            <h3>Total Bookings</h3>
            <p className="stat-number">{totalBookings}</p>
          </div>
        </div>

        <div className="stat-card success">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <h3>Completed</h3>
            <p className="stat-number">{completedBookings}</p>
          </div>
        </div>

        <div className="stat-card danger">
          <div className="stat-icon">❌</div>
          <div className="stat-content">
            <h3>Cancelled</h3>
            <p className="stat-number">{cancelledBookings}</p>
          </div>
        </div>
      </div>

      <div className="bookings-section">
        <h2>📋 Recent Bookings</h2>
        {loading ? (
          <div className="loading">Loading bookings...</div>
        ) : bookings.length === 0 ? (
          <div className="no-data">No bookings found</div>
        ) : (
          <div className="table-responsive">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Customer</th>
                  <th>Pickup Location</th>
                  <th>Drop Location</th>
                  <th>Cab Type</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((b) => (
                  <tr key={b.id} className={`status-${b.status.toLowerCase()}`}>
                    <td>#{b.id}</td>
                    <td>{b.customerName}</td>
                    <td>{b.pickupLocation}</td>
                    <td>{b.dropLocation}</td>
                    <td>{b.cabType}</td>
                    <td>
                      <span className={`status-badge status-${b.status.toLowerCase()}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;