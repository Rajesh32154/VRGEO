import React from 'react';
import './Contact.css'; // Optional: Include your custom CSS here
import { FaAddressCard, FaPhone } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
const Contact = () => {
  return (
    <section className="VREGOcontact-section">
      {/* Section Header */}
      <div className="VREGOsection-header">
        <div className="container VREGOsectionContainer">
          <h2>Contact Us</h2>
          <p>
            VR Geo Solutions offers cutting-edge
            satellite imagery and geospatial services
            tailored to that your needs. Our expertise
            spans from imagery search to data delivery
            and technical consulting. solutions We are
            dedicated to providing innovative that
            empower businesses and enhance
            decision-making.
          </p>
          <hr />
          {/* Contact Info and Form */}
          <div className="container">
            <div className="row contactRow">
              {/* Contact Info */}
              <div className="col-md-6 my-4 px-5 VREGOcontact-info">
                <h2 className='ContactAddresHeding'>VR GEO SOLUTIONS</h2>
                <div className="VREGOcontact-info-item">
                  <div className="VREGOcontact-info-icon">
                    <FaAddressCard />
                  </div>
                  <div className="VREGOcontact-info-content">
                    <h4>Address</h4>
                    <p>
                      Plot no14 Phase 1 Subhadra nagar More opposite Vanstalipuram 500072
                    </p>
                  </div>
                </div>

                <div className="VREGOcontact-info-item">
                  <div className="VREGOcontact-info-icon">
                    <FaPhone />
                  </div>
                  <div className="VREGOcontact-info-content">
                    <h4>Phone</h4>
                    <p>7670967086</p>
                  </div>
                </div>

                <div className="VREGOcontact-info-item">
                  <div className="VREGOcontact-info-icon">
                    <MdEmail />
                  </div>
                  <div className="VREGOcontact-info-content">
                    <h4>Email</h4>
                    <p>info@vrgeosolutions.in</p>
                  </div>
                </div>
              </div>


              {/* Contact Form */}
              <div className="col-md-6 contact-form">
                <form id="VREGOcontact-form">
                  <h2>Send Message</h2>

                  <div className="VREGOinput-box">
                    <input type="text" required />
                    <span>Full Name</span>
                  </div>

                  <div className="VREGOinput-box">
                    <input type="email" required />
                    <span>Email</span>
                  </div>

                  <div className="VREGOinput-box">
                    <textarea required></textarea>
                    <span>Type your Message...</span>
                  </div>

                  <div className="VREGOinput-box">
                    <input type="submit" value="Send" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Contact;
