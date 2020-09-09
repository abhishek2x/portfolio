import React from "react"
import { Row, Col } from "antd"
import ProgressBar from "../../Progress"

const SkillsProgress = () => (
  <div>
    <h2 className="titleSeparate">My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={80} text="Javascript" />
        <ProgressBar percent={90} text="ReactJS" />
        <ProgressBar percent={95} text="Django" />
        <ProgressBar percent={85} text="NodeJS" />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar percent={85} text="Python" />
        <ProgressBar percent={90} text="Mysql" />
        <ProgressBar percent={95} text="C++" />
        <ProgressBar percent={90} text="DSA" />
      </Col>
    </Row>
  </div>
)

export default SkillsProgress
