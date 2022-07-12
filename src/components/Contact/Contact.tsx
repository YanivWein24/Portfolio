import React, { useState, FC, FormEvent } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap'
import emailjs from '@emailjs/browser'
import "./Contact.css"

const Contact: FC = () => {

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(firstName, lastName, email, message)

        const publicKey: string = process.env.REACT_APP_PUBLIC_KEY ? process.env.REACT_APP_PUBLIC_KEY : "error"
        const templateId: string = process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : "error"
        const serviceId: string = process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : "error"

        emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey)
            .then((result) => {
                console.log(result.text)
                // e.currentTarget.reset()
                setFirstName("")
                setLastName("")
                setEmail("")
                setMessage("")
            }, (error) => {
                console.log(error.text)
            })
    }


    return (
        <Container id="Contact">
            <h1>contact me:</h1>
            <form onSubmit={sendEmail}>
                <Row>
                    <Col>
                        <input type="text" className="name firstName" value={firstName} placeholder="First Name" name="firstName" onChange={(e) => setFirstName(e.target.value)}></input>
                    </Col >
                    <Col>
                        <input type="text" className="name lastName" value={lastName} placeholder="Last Name" name="lastName" onChange={(e) => setLastName(e.target.value)}></input>
                    </Col>
                </Row>
                <Row>
                    <input type="email" className="email" value={email} placeholder="Email" name="email" onChange={(e) => setEmail(e.target.value)}></input>
                </Row>
                <Row>
                    <textarea placeholder="Your Message Here" value={message} name="message" onChange={(e) => setMessage(e.target.value)}></textarea>
                </Row>
                <Button type="submit">Send</Button>
            </form>
        </Container>
    )
}

export default Contact