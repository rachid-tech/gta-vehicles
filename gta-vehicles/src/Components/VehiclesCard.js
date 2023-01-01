import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function VehiclesCard({ props }) {
  React.useEffect(() => {
    console.log(props);
  }, []);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.images.frontQuarter}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.model}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price !== undefined ? props.price + "$" : "Not to buy"}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
