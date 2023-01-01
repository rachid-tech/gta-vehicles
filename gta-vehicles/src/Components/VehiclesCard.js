import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function VehiclesCard({ props }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="10%"
          image={props.images.frontQuarter}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price !== undefined ? props.price + "$" : "Not to buy"}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.topSpeed !== undefined
              ? props.topSpeed.kmh + " km/h"
              : "No Informations about the speed"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
