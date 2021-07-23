import React from "react";
import { useState } from "react";
import axios from "axios";
import "./styles.css";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    text: "",
    disabled: false,
    emailSent: false,
  });

  const handleChange = (e) => {
    setMsg({
      ...msg,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7ayv5rs",
        "template_moyb1q7",
        e.target,
        "user_2nkMBXhy5rWvJxNyjxVwU"
      )
      .then((res) => {
        console.log(res.text);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div>
      <h1>This is where you can send me an email.</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="text" name="email" />
        <label>Comment</label>
        <input type="text" name="text" />
        <label>Subject</label>
        <input type="text" name="subject" />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
