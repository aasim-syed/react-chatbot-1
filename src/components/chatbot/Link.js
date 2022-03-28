import React from 'react'
import '../../App.css'
import { Table } from 'react-bootstrap'

const Link = () => {
  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Useful Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://indianhelpline.com/Floods-Disaster-Helpline/"
                target="_blank"
              >
                indianhelpline.com🚀⚡
              </a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="http://www.floodrelief.tn.gov.in/flood_relief.html"
                target="_blank"
              >
               floodrelief.tn.gov.in🗺️📌
              </a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href=""
                target="_blank"
              >
               Real time UPDATES🔔
              </a>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://kp17mbji4lv.typeform.com/to/DzlpFhiK?typeform-source=g-2-c-2.vercel.app"
                target="_blank"
              >
                Update details
              </a>
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              <a
                style={{ textDecoration: 'none' }}
                href="https://kp17mbji4lv.typeform.com/to/DzlpFhiK?typeform-source=g-2-c-2.vercel.app"
                target="_blank"
              >
               Enter flood details
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default Link
