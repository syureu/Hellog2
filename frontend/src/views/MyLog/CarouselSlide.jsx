import React, { useRef } from "react";
import { ColumnChart } from "@toast-ui/react-chart";
import "tui-chart/dist/tui-chart.css";

const CarouselSlide = (props) => {
  const chart = useRef(null);
  const { data, options } = props.content;

  return <ColumnChart ref={chart} data={data} options={options} />;
};

export default CarouselSlide;
