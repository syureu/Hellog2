import React from "react";
import { Card } from "react-bootstrap";
import { CardDeck } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
// import Card from "components/Card/Card.js";
// import CardHeader from "components/Card/CardHeader.js";
// import CardAvatar from "components/Card/CardAvatar.js";
// import CardBody from "components/Card/CardBody.js";
// import CardFooter from "components/Card/CardFooter.js";

import team from "assets/img/faces/team.jpg";
import back from "assets/img/faces/back.jpg";

import pic1 from "../UserProfile/pic1_nfc.png";
import pic2 from "../UserProfile/pic2_ultrasound.png";
import pic3 from "../UserProfile/pic3_web.png";
import donggyu from "../UserProfile/donggyu.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
};

const useStyles = makeStyles(styles);

export default function UserProfile() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <img className="d-block w-100" src={team} alt="Team 5!" />
        </GridItem>
        <br />
        <GridItem xs={12} sm={12} md={4}>
          <>
            <Card>
              <Card.Header>팀장 FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Lee Dong Gyu</Card.Title>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Jeon Sang Hyeok</Card.Title>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>FrontEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Han Gwang Uk</Card.Title>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>BackEnd</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Kim Ki Dam</Card.Title>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>Embedded</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Joo Ji Hwan</Card.Title>
              </Card.Body>
            </Card>
            <br />

            <Card>
              <Card.Header>Embedded</Card.Header>
              {/* <Card.Img variant="top" src={pic1} /> */}
              <Card.Body>
                <Card.Title>Jeong Yeon Uk</Card.Title>
              </Card.Body>
            </Card>
            <br />
          </>
        </GridItem>
      </GridContainer>
    </div>
  );
}
