import React from "react";
import { Typography } from "@material-ui/core";

const ButtonBases = (props) => {
  const {
    categoryData,
    isSelected,
    serverImgUrl,
    categoeyXAxis,
    yAxis,
    index,
  } = props;

  const imgUrl = `${serverImgUrl}${categoryData.cat_img_url}`;

  return (
    <div
      key={categoryData.cat_title}
      className={
        yAxis === 0 && categoeyXAxis === index
          ? "image button-base selected-tab2"
          : "image button-base"
      }
    >
      <span
        className="image-src"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
        }}
      />
      <span
        className={
          isSelected ? "image-backdrop selected-tab" : "image-backdrop"
        }
      />
      <span className="image-button">
        <Typography component="span" variant="h6" className="image-title">
          {categoryData.cat_title}
        </Typography>
      </span>
    </div>
  );
};
export default ButtonBases;
