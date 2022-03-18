import React from 'react'
import './index.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

import { ReactCountrySelectComponent } from 'react-country-select-component'

const App = () => {
  return (
    <div className='app-container'>
      <Container>
        <Row>
          <Col xl={6} className="mx-auto">
            <Card className='shadow rounded border-0'>
              <Card.Header className='text-center border-0 bg-white pt-4'>
                <h4 className='fw-bolder'>React country select component</h4>
              </Card.Header>
              <Card.Body>
                <ReactCountrySelectComponent
                  name={'country'}
                  isClearable={true}
                  error={false}
                  label='Country'
                  placeholder={'Select country'}
                  borderRadius={6}
                  defaultvalue={null}
                  onChange={(event) => console.log(event)}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default App
