import React, { useState, FC, FormEvent } from "react";
import { Container } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact: FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const resetForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const publicKey: string = process.env.REACT_APP_PUBLIC_KEY
      ? process.env.REACT_APP_PUBLIC_KEY
      : "error";
    const templateId: string = process.env.REACT_APP_TEMPLATE_ID
      ? process.env.REACT_APP_TEMPLATE_ID
      : "error";
    const serviceId: string = process.env.REACT_APP_SERVICE_ID
      ? process.env.REACT_APP_SERVICE_ID
      : "error";

    emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey).then(
      () => {
        setMessageSent(true);
        resetForm();
        setTimeout(() => {
          setMessageSent(false);
        }, 2500);
      },
      (error) => {
        console.log(error.text);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 2500);
      }
    );
  };

const smallScreen: Boolean = window.innerWidth < 940;

  return (
    <div data-aos="fade-down" data-aos-once={smallScreen && "true"} id="Contact">
      <h1>contact me:</h1>
      <Container>
        <form onSubmit={sendEmail}>
          <p data-aos="fade-down" data-aos-once={smallScreen && "true"}>
            If you came all this way, you probably liked what you've seen.
            <br />
            <span>if so, tell me about it!</span>
          </p>
          <div data-aos="fade-down" data-aos-once={smallScreen && "true"} className="fullName">
            <input
              type="text"
              value={name}
              required={true}
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div data-aos="fade-down" data-aos-once={smallScreen && "true"} className="email">
            <input
              type="email"
              value={email}
              required={true}
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div data-aos="fade-down" data-aos-once={smallScreen && "true"} className="message">
            <textarea
              rows={5}
              placeholder="Your Message Here"
              value={message}
              required={true}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            data-aos="fade-down"
            data-aos-once={smallScreen && "true"}
            className="reset"
            onClick={resetForm}
            type="reset"
          >
            Reset <i className="fa-solid fa-eraser"></i>
          </button>
          <button data-aos="fade-down" data-aos-once={smallScreen && "true"} type="submit">
            Submit <i className="fa-solid fa-paper-plane"></i>
          </button>
          {messageSent && (
            <h3 className="messageSent fade-in">
              Thank you for your response!
            </h3>
          )}
          {error && (
            <h3 className="error fade-in">Failed to send message...</h3>
          )}
        </form>
      </Container>
    </div>
  );
};

export default Contact;
