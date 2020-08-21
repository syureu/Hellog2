import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import team from "assets/img/faces/team.jpg";

export default function UserProfile() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <img className="d-block w-100" src={team} alt="Team 5!" />
        </GridItem>
        <br />
        <GridItem xs={6} sm={6} md={6} textColor>
          <>
            <br />
            <Card>
              <Card.Header>팀장 FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Lee Dong Gyu</Card.Title>
                <h5>https://lab.ssafy.com/skdewww</h5>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Jeon Sang Hyeok</Card.Title>
                <h5>https://lab.ssafy.com/houek0307</h5>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Han Gwang Uk</Card.Title>
                <h5>https://lab.ssafy.com/baramukki</h5>
              </Card.Body>
            </Card>
          </>
        </GridItem>
        <GridItem xs={6} sm={6} md={6} textColor>
          <br />
          <Card>
            <Card.Header>BackEnd</Card.Header>
            {/* <Card.Img variant="top" src={pic1} /> */}
            <Card.Body>
              <Card.Title>Kim Ki Dam</Card.Title>
              <h5>https://lab.ssafy.com/tor01237</h5>
            </Card.Body>
          </Card>
          <br />

          <Card>
            <Card.Header>Embedded</Card.Header>
            {/* <Card.Img variant="top" src={pic1} /> */}
            <Card.Body>
              <Card.Title>Joo Ji Hwan</Card.Title>
              <h5>https://lab.ssafy.com/wngustnf</h5>
            </Card.Body>
          </Card>
          <br />

          <Card>
            <Card.Header>Embedded</Card.Header>
            {/* <Card.Img variant="top" src={pic1} /> */}
            <Card.Body>
              <Card.Title>Jeong Yeon Uk</Card.Title>
              <h5>https://lab.ssafy.com/dusdnrl1</h5>
            </Card.Body>
          </Card>
          <br />
        </GridItem>
      </GridContainer>
    </div>
  );
}
