import React, { useState } from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form submission logic here
    console.log("Form submitted:", value);

    const mailtoLink = `mailto:walia3616@gmail.com?subject=Message%20from%20${encodeURIComponent(value.name)}&body=${encodeURIComponent(value.message)}`;
    window.location.href = mailtoLink;
    // Clear the form fields
    setValue({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });

    alert("Message sent successfully!"); // Show a success message
  };

  return (
    <div className="contact-page">
      <div className="cont-img"></div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={value.name}
              required
              placeholder="Enter your name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={value.email}
              required
              placeholder="abc@gmail.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={value.mobile}
              onChange={handleChange}
              required
              placeholder="+910000000000"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={value.message}
              onChange={handleChange}
              required
              placeholder="Type Your Message Here"
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              className="facebook"
              href="https://www.facebook.com/your-profile"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              className="twitter"
              href="https://twitter.com/MRVARUN09"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
              className="instagram"
              href="https://www.instagram.com/coder_varun/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/coder-varun-walia/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <h1 className="address">
        Address : City-Rajpura, Distt - Patiala, Punjab Pincode-140401
      </h1>
      <a
        className="address3"
        href="https://mail.google.com/mail/u/0/#inbox?compose=new"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn-sub">
          <AttachEmailIcon /> Email: walia3616@gmail.com
        </button>
      </a>
      <a
        className="address3"
        href="https://wa.me/9988663616"
        target="_blank"
        rel="noreferrer"
      >
        <button className="btn-sub">
          <WhatsAppIcon /> Connect Me on WhatsApp
        </button>
      </a>
    </div>
  );
}

export default Contact;
