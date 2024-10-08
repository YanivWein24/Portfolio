import { useState } from "react";
import { Container, Form, FormGroup } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Text from "../../../constants";
import "./Contact.css";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [messageSent, setMessageSent] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const form = document.querySelector("form");

  const resetForm = (): void => {
    setName("");
    setEmail("");
    setMessage("");
    if (form) form.classList.remove("was-validated");
  };

  const sendEmail = () => {
    const publicKey: string = process.env.REACT_APP_PUBLIC_KEY || "error";
    const templateId: string = process.env.REACT_APP_TEMPLATE_ID || "error";
    const serviceId: string = process.env.REACT_APP_SERVICE_ID || "error";
    setIsLoading(true);
    setIsError(false);
    setMessageSent(false);

    emailjs.sendForm(serviceId, templateId, form || "error", publicKey).then(
      () => {
        setMessageSent(true);
        setIsLoading(false);
        window.navigator.vibrate(250); // only on devices with supported hardware
        resetForm();
        setTimeout(() => {
          setMessageSent(false);
        }, 2500);
      },
      (err) => {
        console.log(err.text); // eslint-disable-line
        setIsError(true);
        setIsLoading(false);
      },
    );
  };

  const submitForm = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    !!form && form.checkValidity()
      ? sendEmail()
      : form?.classList.add("was-validated");
  };

  return (
    <div data-aos="fade-down" data-aos-once="true" id="Contact">
      <h1>{Text.headers.contactMe}</h1>
      <Container className="formContainer">
        <Form>
          <p data-aos="fade-down" data-aos-once="true">
            {Text.ContactMe}
            <br />
            <span>{Text.ContactMeBold}</span>
          </p>
          <FormGroup
            data-aos="fade-down"
            data-aos-once="true"
            className="fullName"
          >
            <input
              type="text"
              value={name}
              className="form-control"
              required
              placeholder="Name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
            <div className="invalid-feedback">Required Field</div>
          </FormGroup>
          <FormGroup
            data-aos="fade-down"
            data-aos-once="true"
            className="email"
          >
            <input
              type="email"
              value={email}
              className="form-control"
              required
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="invalid-feedback">
              {email.length === 0 ? "Required Field" : "Invalid Email"}
            </div>
          </FormGroup>
          <FormGroup
            data-aos="fade-down"
            data-aos-once="true"
            className="message"
          >
            <textarea
              rows={5}
              placeholder="Your Message Here"
              value={message}
              className="form-control"
              required
              name="message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="invalid-feedback">Required Field</div>
          </FormGroup>
          <div className="bottomContainer">
            <button
              data-aos="fade-down"
              data-aos-once="true"
              type="submit"
              onClick={submitForm}
            >
              Submit <i className="fa-solid fa-paper-plane" />
            </button>
            {(isError || messageSent || isLoading) && (
              <h3 className="bottomMessage fade-in">
                {messageSent
                  ? Text.MessageSent
                  : isError
                    ? Text.ErrorMessage
                    : "Submitting..."}
              </h3>
            )}
          </div>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
