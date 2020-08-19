import React from "react";
import { Card } from "react-bootstrap";
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

import pic1 from "../UserProfile/pic1_nfc.png";
import pic2 from "../UserProfile/pic2_ultrasound.png";
import pic3 from "../UserProfile/pic3_web.png";

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
          <Card className="text-center">
            <Card.Img variant="top" src={team} />
            {/* <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body> */}
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card className="text-center">
            <ListGroup variant="flush">
              <ListGroup.Item>SSAFY 구미 2반</ListGroup.Item>
              <ListGroup.Item>Team 5!</ListGroup.Item>
              <ListGroup.Item>이동규</ListGroup.Item>
              <ListGroup.Item>전상혁</ListGroup.Item>
              <ListGroup.Item>김기담</ListGroup.Item>
              <ListGroup.Item>주지환</ListGroup.Item>
              <ListGroup.Item>한광욱</ListGroup.Item>
              <ListGroup.Item>정연욱</ListGroup.Item>
            </ListGroup>
          </Card>
        </GridItem>
      </GridContainer>
      {/* <GridContainer>
        <GridItem>
          <Card profile>
            <CardAvatar profile>
              <img src={team} alt="..." />
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory}>SSAFY 구미 2반</h6>
              <h4 className={classes.cardTitle}>Team 5!</h4>
              <p className={classes.description}>
                이동규, 전상혁, 김기담, 한광욱, 주지환, 정연욱
              </p>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
    </div>
  );
}
