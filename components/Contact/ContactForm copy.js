import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const sendGridMail = require('@sendgrid/mail');
sendGridMail.setApiKey('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');

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setContact((prevState) => ({ ...prevState, [name]: value }));
  //   console.log(contact)
  // };
  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    console.log(contact)
  };

  // const handleSubmit = async (e) => {
  //   debugger;
  //   e.preventDefault();
  //   try {
  //     const url = `${baseUrl}/api/contact`;
  //     const { name, email, number, subject, text } = contact;
  //     const payload = { name, email, number, subject, text };
  //     const response = await axios.post(url, payload);
  //     console.log(response);
  //     setContact(INITIAL_STATE);
  //     alertContent();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

// backup 15/07/2023
  // function getMessage() {
  //   const body = 'This is a test email using SendGrid from Node.js';
  //   return {
  //     to: 'gangesm1@gmail.com',
  //     // to: 'info@triosource.com',
  //     from: 'info@triosource.com',
  //     // from: 'gangesm1@gmail.com',
  //     subject: 'Test email with Node.js and SendGrid',
  //     text: body,
  //     html: `<strong>${body}</strong>`,
  //   };
  // }
  function getMessage() {
    const body = 'test';
    return {
          // to: 'gangesm1@gmail.com',
          to: 'info@triosource.com',
          from: 'info@triosource.com',
          from: 'gangesm1@gmail.com',
          subject: 'Test email with Node.js and SendGrid',
          text: body,
          html: `<strong>${body}</strong>`,
        };
  }
  
  async function sendEmail() {
    debugger;
    try {
      await sendGridMail.send(getMessage());
      console.log('Test email sent successfully');
    } catch (error) {
      console.error('Error sending test email');
      console.error(error);
      if (error.response) {
        console.error(error.response.body)
      }
    }
  }
  
  (async () => {
    console.log('Sending test email');
    await sendEmail();
  })();

  return (
    <>
      <form onSubmit={getMessage}>
      {/* <form> */}
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={contact.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="form-control"
                value={contact.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="number"
                placeholder="Phone number"
                className="form-control"
                value={contact.number}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-control"
                value={contact.subject}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="form-group">
              <textarea
                name="text"
                cols="30"
                rows="6"
                placeholder="Write your message..."
                className="form-control"
                value={contact.text}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="col-lg-12 col-sm-12">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
