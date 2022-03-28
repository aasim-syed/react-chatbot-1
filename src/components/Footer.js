import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-4">
            Copyright <a href="https://g-2-c-2.vercel.app"> &copy;2021 G2C2-chatbot⚡🚀 </a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
