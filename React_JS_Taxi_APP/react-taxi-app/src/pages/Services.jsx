function Services() {
  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 30px",
    backgroundColor: "#f8f9fa",
    minHeight: "calc(100vh - 200px)"
  };

  const headingStyle = {
    color: "#1e90ff",
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "2.5em",
    fontWeight: "600"
  };

  const subHeadingStyle = {
    textAlign: "center",
    color: "#555",
    fontSize: "1.1em",
    marginBottom: "50px",
    lineHeight: "1.6"
  };

  const servicesGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    marginBottom: "50px"
  };

  const serviceCardStyle = {
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "30px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer",
    textAlign: "center"
  };

  const serviceIconStyle = {
    fontSize: "3em",
    marginBottom: "15px",
    color: "#1e90ff"
  };

  const serviceNameStyle = {
    fontSize: "1.5em",
    color: "#333",
    marginBottom: "15px",
    fontWeight: "600"
  };

  const serviceDescStyle = {
    color: "#666",
    lineHeight: "1.6",
    marginBottom: "15px",
    fontSize: "0.95em"
  };

  const servicePriceStyle = {
    fontSize: "1.3em",
    color: "#1e90ff",
    fontWeight: "bold",
    marginTop: "20px",
    paddingTop: "20px",
    borderTop: "2px solid #f0f0f0"
  };

  const featureListStyle = {
    backgroundColor: "#f0f8ff",
    padding: "30px",
    borderRadius: "10px",
    marginBottom: "40px"
  };

  const featureHeadingStyle = {
    color: "#1e90ff",
    marginBottom: "20px",
    fontSize: "1.8em",
    fontWeight: "600"
  };

  const featureItemStyle = {
    padding: "12px 0",
    color: "#555",
    borderBottom: "1px solid #e0e0e0",
    fontSize: "1em"
  };

  const featureItemLastStyle = {
    ...featureItemStyle,
    borderBottom: "none"
  };

  const services = [
    {
      id: 1,
      icon: "🚗",
      name: "Mini Cab",
      description: "Economical 4-seater cab for comfortable short and long distance travel.",
      featureDetails: "Swift, Hatchback"
    },
    {
      id: 2,
      icon: "🚙",
      name: "Sedan",
      description: "Premium 4-seater sedan for business travel and luxury commute.",
      featureDetails: "Dzire, Etios"
    },
    {
      id: 3,
      icon: "🚐",
      name: "SUV",
      description: "Spacious 6-seater SUV perfect for family trips and group travel.",
      featureDetails: "XUV500, Fortuner"
    },
    {
      id: 4,
      icon: "👑",
      name: "Luxury Cab",
      description: "Premium luxury vehicle with high-end amenities for executive travel.",
      featureDetails: "BMW, Audi, Mercedes"
    }
  ];

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Our Services</h2>
      <p style={subHeadingStyle}>
        Choose from our wide range of cab services tailored to meet your travel needs.
        Book now and enjoy a comfortable, safe, and reliable ride experience.
      </p>

      <div style={servicesGridStyle}>
        {services.map((service) => (
          <div
            key={service.id}
            style={serviceCardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow =
                "0 8px 16px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 8px rgba(0, 0, 0, 0.1)";
            }}
          >
            <div style={serviceIconStyle}>{service.icon}</div>
            <h3 style={serviceNameStyle}>{service.name}</h3>
            <p style={serviceDescStyle}>{service.description}</p>
            <p style={servicePriceStyle}>Models: {service.featureDetails}</p>
          </div>
        ))}
      </div>

      <div style={featureListStyle}>
        <h3 style={featureHeadingStyle}>Why Choose Book_A_Taxi?</h3>
        <div style={featureItemStyle}>✓ 24/7 Customer Support</div>
        <div style={featureItemStyle}>✓ Verified and Professional Drivers</div>
        <div style={featureItemStyle}>✓ Transparent Pricing - No Hidden Charges</div>
        <div style={featureItemStyle}>✓ Real-time Tracking & Safety Features</div>
        <div style={featureItemStyle}>✓ Multiple Payment Options</div>
        <div style={featureItemStyle}>✓ Comfortable and Well-Maintained Vehicles</div>
        <div style={featureItemStyle}>✓ Flexible Booking Options</div>
        <div style={featureItemLastStyle}>✓ Special Discounts for Frequent Users</div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h3 style={{ color: "#333", marginBottom: "15px" }}>Ready to Book?</h3>
        <a
          href="/booking"
          style={{
            display: "inline-block",
            padding: "12px 40px",
            backgroundColor: "#1e90ff",
            color: "white",
            textDecoration: "none",
            borderRadius: "5px",
            fontWeight: "600",
            fontSize: "1.1em",
            transition: "background-color 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#1873cc";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#1e90ff";
          }}
        >
          Book Your Ride Now
        </a>
      </div>
    </div>
  );
}

export default Services;
