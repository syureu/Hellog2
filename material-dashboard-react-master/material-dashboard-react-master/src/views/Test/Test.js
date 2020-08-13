import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import gym_unsplash from "../Test/gym_unsplash.jpg";
import gym_unsplash2 from "../Test/gym_unsplash2.jpg";
import gym_unsplash3 from "../Test/gym_unsplash3.jpg";

export default function Test() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={gym_unsplash} alt="First slide" />
          <Carousel.Caption>
            <h2>
              <b>First slide label</b>
            </h2>
            <h2>First slide label</h2>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gym_unsplash2}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={gym_unsplash3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <div>
              <Button variant="light">로그인</Button>
              <Button variant="light">회원가입</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
