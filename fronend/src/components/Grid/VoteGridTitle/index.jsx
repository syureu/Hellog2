import React from "react";
import { Grid, Typography } from "@material-ui/core";

const VoteGridTitle = (props) => {
  const { categoryData } = props;
  return (
    <Grid className="vote-grid-title-grid">
      <Typography
        variant="h2"
        align="center"
        className="vote-grid-title-typography1"
      >
        {categoryData.cat_title}
      </Typography>

      <Typography
        variant="h6"
        align="center"
        className="vote-grid-title-typography2"
      >
        {categoryData.cat_desc}
      </Typography>
    </Grid>
  );
};

export default VoteGridTitle;
