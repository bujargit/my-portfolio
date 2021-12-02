import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <Container>
      <Grid container>
        {blogs.map((blog) => (
          <Grid item key={blog.id} xs={12} md={6} lg={4}>            
            <BlogCard blog={blog} />            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
