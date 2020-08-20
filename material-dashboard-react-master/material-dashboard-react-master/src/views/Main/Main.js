import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import gym_unsplash from "../Main/gym_unsplash.jpg";
import gym_unsplash2 from "../Main/gym_unsplash2.jpg";
import gym_unsplash3 from "../Main/gym_unsplash3.jpg";

export default function Main() {
  return (
    <div>
      <Carousel interval={null} align="center">
        <Carousel.Item>
          <img
            className="d-block"
            width="83%"
            src={gym_unsplash}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>헬로그는 건강(Health)과 기록(Log)의 합성어입니다.</h2>
            {/* <h3>First slide label</h3> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            width="83%"
            src={gym_unsplash2}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>정직하고 꾸준한 기록으로 운동의 즐거움을 선사합니다.</h2>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            width="83%"
            src={gym_unsplash3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h2>헬로그와 함께 변화를 시작해보세요.</h2>
            <p>
              <a href="/login">
                <Button className="btn btn-light">로그인</Button>
              </a>{" "}
              <a href="/signup">
                <Button className="btn btn-light">회원가입</Button>
              </a>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
