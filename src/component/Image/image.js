import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import React from "react";
import "./image.scss";

const ImageCard = props => {
  return (
    <Card className="root">
      <CardHeader data-test="CardTitle" title={props.name} />
      <CardMedia
        id="thumbImage"
        data-test="CardImage"
        className="media"
        image={props.url}
        onClick={props.onClick}
      />
    </Card>
  );
};

export default ImageCard;
