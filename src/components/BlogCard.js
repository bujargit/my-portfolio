import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import { Link } from "react-router-dom";

export default function BlogCard({ blog }) {
  return (
    <Card sx={{ minWidth: 275, mx: 1 }}>
      <CardContent>
        <Typography variant="h4" component="div" sx={{ mb: 1 }}>
          {blog.title}
        </Typography>
        <Typography
          sx={{ fontSize: 14, mb: 1 }}
          color="text.secondary"
          gutterBottom
          noWrap
        >
          {blog.details}
        </Typography>        
        <Typography sx={{ mt: 1, mb: 1 }} color="text.secondary">          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="secondary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
