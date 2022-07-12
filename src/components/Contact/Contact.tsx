import React, { useState, FC, FormEvent } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import "./Contact.css"

const Contact: FC = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const publicKey: string = process.env.REACT_APP_PUBLIC_KEY ? process.env.REACT_APP_PUBLIC_KEY : "error"
        const templateId: string = process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : "error"
        const serviceId: string = process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : "error"

        const resetForm = (): void => {
            setName("")
            setEmail("")
            setMessage("")
        }

        emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
            .then((result) => {
                console.log(result.text)
                resetForm()
            }, (error) => {
                console.log(error.text)
            })
    }

    return (
        <div id="Contact">
            <h1>contact me:</h1>
            <Container>
                <form onSubmit={sendEmail}>
                    <div className="fullName">
                        <input type="text" value={name} required={true} placeholder="Name" name="name" onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="email">
                        <input type="email" value={email} required={true} placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className="message">
                        <textarea rows={5} placeholder="Your Message Here" value={message} required={true} name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                    </div>
                    <button type="submit">Send <i className="fa-solid fa-paper-plane"></i></button>
                </form>
            </Container>
        </div>
    )
}

export default Contact