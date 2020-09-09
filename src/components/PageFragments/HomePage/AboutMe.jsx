import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

import SEO from "../../Seo"

const pageText = {
  paraOne: `
  An Entrepreneur by nature and a developer by passion, a tech enthusiast, 
  open-source contributor (https://github.com/abhishek2x), tech blogger 
  (https://medium.com/@abhishek2x), writer, motivator and mentor for 
  those who want to learn programming, development and recent technologies.
  `,
  paraTwo: `
  Being a developer of various Technical Forums, Google Develop Student Club Lead 
  and Metor at Student Code-in I have been contributing to make the youth of this world well versed with 
  programming. Being pragmatic by nature, I inhabit an up help desire and straight forward 
  outlook.
  <br/>
  <br/>
  I am presently pursuing Btech in Computer Science(SCSE) From VIT, Bhopal. 
  `,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Abhishek",
            "Srivastava",
            "TheProgrammedEnthusiast",
            "DSC Lead",
            "Django",
            "ReactJS",
            "Technical Writer",
            "VIT Bhopal",
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>{pageText.paraOne}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Lucknow, UP, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Coffee"
            textH3="Coffee + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="blogging.jpeg"
            alt="meeting image"
            textH4="Blogger and Writer"
            textH3="At Weekends"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="DSC.png"
            alt="motorcycle image"
            textH4="Community Lead"
            textH3="Google DSC, VIT Bhopal"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.Tech in"
            textH3="Computer Science"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
