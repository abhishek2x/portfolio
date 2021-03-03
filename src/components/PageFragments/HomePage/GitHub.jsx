import React from "react"
import { Row, Col } from "antd"
import GitHubCalendar from 'react-github-calendar';

const GitHub = () => (
  <div style={{ marginTop: 20 }}>
    <h2 className="titleSeparate">GitHub</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={24}>
        <GitHubCalendar
          username="abhishek2x"
          showTotalCount={false}
          blockSize={20} 
          blockMargin={4} 
        />
      </Col>
    </Row>
  </div>
)

export default GitHub
