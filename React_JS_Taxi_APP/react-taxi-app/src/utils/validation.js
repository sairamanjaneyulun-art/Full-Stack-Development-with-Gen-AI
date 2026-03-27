// Validation functions for form fields

export const validateName = (name) => {
  if (!name || name.trim() === "") {
    return "Name is required";
  }
  if (name.trim().length < 3) {
    return "Name must be at least 3 characters long";
  }
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name should only contain letters and spaces";
  }
  return "";
};

export const validatePhone = (phone) => {
  if (!phone || phone.trim() === "") {
    return "Phone number is required";
  }
  if (!/^[0-9]{10}$/.test(phone.replace(/\D/g, ""))) {
    return "Phone number must be 10 digits";
  }
  return "";
};

export const validateEmail = (email) => {
  if (!email || email.trim() === "") {
    return "Email is required";
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Please enter a valid email address";
  }
  return "";
};

export const validateLocation = (location, locationType = "") => {
  if (!location || location.trim() === "") {
    return `${locationType} location is required`;
  }
  if (location.trim().length < 2) {
    return `${locationType} location must be at least 2 characters long`;
  }
  if (!/^[a-zA-Z0-9\s,.-]+$/.test(location)) {
    return `${locationType} location contains invalid characters`;
  }
  return "";
};

export const validateBookingForm = (booking) => {
  const errors = {};

  errors.customerName = validateName(booking.customerName);
  errors.phone = validatePhone(booking.phone);
  errors.pickupLocation = validateLocation(booking.pickupLocation, "Pickup");
  errors.dropLocation = validateLocation(booking.dropLocation, "Drop");

  if (!booking.cabId || booking.cabId === "") {
    errors.cabId = "Please select a cab";
  }

  return errors;
};

export const validateContactForm = (contact) => {
  const errors = {};

  errors.name = validateName(contact.name);
  errors.email = validateEmail(contact.email);

  if (!contact.message || contact.message.trim() === "") {
    errors.message = "Message is required";
  } else if (contact.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters long";
  }

  return errors;
};

export const hasErrors = (errors) => {
  return Object.values(errors).some((error) => error !== "");
};
