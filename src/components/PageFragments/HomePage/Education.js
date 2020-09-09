import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"

const Education = () => {
  return (
    <>
      <h2 className="titleSeparate">Education</h2>
      <Row gutter={[20, 20]}>
        <Col xs={36} sm={36} md={18} lg={12}>
          <AboutTile
            img="SFC.jpeg"
            height={70}
            alt="SFC image"
            textH3="St. Francis' College, Lucknow"
            textH4="Matriculation and Higher Secondary Education"
            textH5="2004 to 2019"
            textP="Matriculation: 90.34%"
            textP1="Higher Secondary Education: 88%"
          />
        </Col>
        <Col xs={36} sm={36} md={18} lg={12}>
          <AboutTile
            img="VIT.png"
            height={70}
            alt="VIT image"
            textH3="Vellore Institute of Technology, Bhopal"
            textH4="Bachelor of Technology in Computer Science"
            textH5="2019 to Present"
            textP="CGPA: 9.1 (till date)"
          />
        </Col>
      </Row>
    </>
  )
}
export default Education
