import React, { FC } from 'react'
import "./Skills.css"
import { Row, Col } from 'react-bootstrap'

const Skills: FC = () =>
    <div data-aos="fade-down" data-aos-once="true" className="skills" id="Skills">
        <h1>Skills:</h1>
        <div data-aos="fade-left" data-aos-once="true">
            <h2>Front-End:</h2>
            <Row >
                <Col>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" /></a>
                    <a href="https://www.typescriptlang.org/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="TypeScript" /></a>
                    <a href="https://reactjs.org/"><img src="https://soobinnn.github.io/assets//img/logo/react-logo.png" alt="React" /></a>
                    <a href="https://redux.js.org//"><img src="https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png" alt="Redux" /></a>
                    <a href="https://www.w3.org/html/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" /></a>
                    <a href="https://www.w3schools.com/css/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" /></a>
                    <a href="https://getbootstrap.com"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" /></a>
                </Col>
            </Row>
        </div>
        <div data-aos="fade-right" data-aos-once="true">
            <h2>Back-End:</h2>
            <Row >
                <Col>
                    <a href="https://nodejs.org/en/"> <img src="https://miro.medium.com/max/800/1*bc9pmTiyKR0WNPka2w3e0Q.png" alt="Node.js" /></a>
                    <a href="https://expressjs.com/"> <img src="https://www.guayerd.com/wp-content/uploads//2021/04/expressjs-logo.svg" alt="Express.js" /></a>
                    <a href="https://en.wikipedia.org/wiki/Representational_state_transfer"> <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png" alt="REST-API" /></a>
                    <a href="https://www.mongodb.com/"> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" /></a>
                    <a href="https://www.passportjs.org/"> <img src="https://cdn.glitch.me/project-avatar/0d184ee3-fd8d-4b94-acf4-b4e686e57375.png" alt="Passport.js" /></a>
                    <a href="https://oauth.net/"> <img src="https://net.cloudinfrastructureservices.co.uk/wp-content/uploads/2021/12/OAuth-2.png" alt="Oauth2.0" /></a>
                </Col>
            </Row>
        </div>
        <div data-aos="fade-left" data-aos-once="true">
            <h2>Misc:</h2>
            <Row >
                <Col>
                    <a href="https://www.python.org/"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png" alt="Python" /></a>
                    <a href="https://git-scm.com/"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="Git" /></a>
                    <a href="https://www.postman.com/"> <img src="https://iconape.com/wp-content/png_logo_vector/postman.png" alt="Postman" /></a>
                    <a href="https://axios-http.com/docs/intro"> <img src="data:image/png;base64,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" alt="Axios" /></a>
                    <a href="https://heroku.com/"> <img src="https://iconape.com/wp-content/files/xn/371066/svg/371066.svg" alt="Heroku" /></a>
                </Col>
            </Row>
        </div >
    </div >

export default Skills