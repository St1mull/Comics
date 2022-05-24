import {
  Box,
  CardMedia,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <Typography
        sx={{ backgroundColor: "whitesmoke" }}
        variant="h3"
        component="h4"
        p={2}
        pl={5}
        pt={3}
      >
        About Us
      </Typography>
      ;
      <Box
        sx={{
          // bgcolor: "background.paper",
          pt: 8,
        }}
      >
        <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            spacing={5}
          >
            <Grid container>
              <Grid
                item
                sm={12}
                md={6}
                sx={{ margin: "auto", marginBottom: "130px", fontSize: "bold" }}
              >
                <Typography
                  component="h1"
                  variant="h4 "
                  align="start"
                  color="text.danger"
                  gutterBottom
                  mr={5}
                  sx={{ color: "black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem,
                  ipsum..
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    paragraph
                    sx={{
                      margin: "auto",
                      marginTop: "10px",
                      verticalAlign: "middle",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi veniam, voluptatem sequi quam sapiente officia
                    voluptate assumenda doloribus placeat, cumque ea id deserunt
                    cum minima eius reprehenderit deleniti beatae possimus!
                    Nostrum, praesentium earum? Distinctio, consequatur.
                    <Typography
                      component="h3"
                      variant="h4 "
                      mt={15}
                      align="end"
                      color="text.danger"
                      gutterBottom
                      sx={{ color: "black" }}
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Incidunt, delectus!
                    </Typography>
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      align="end"
                      paragraph
                      sx={{
                        margin: "auto",
                        marginTop: "10px",
                        verticalAlign: "middle",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nisi veniam, voluptatem sequi quam sapiente officia
                      voluptate assumenda doloribus placeat, cumque ea id
                      deserunt cum minima eius reprehenderit deleniti beatae
                      possimus! Nostrum, praesentium earum? Distinctio,
                      consequatur.
                    </Typography>
                    <Typography
                      component="h3"
                      variant="h4 "
                      align="start"
                      color="text.danger"
                      gutterBottom
                      mr={5}
                      mt={15}
                      sx={{ color: "black" }}
                    >
                      Lorem ipsum dolor sit amet consectetur adipisicing Lorem,
                      ipsum..
                    </Typography>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi veniam, voluptatem sequi quam sapiente officia
                    voluptate assumenda doloribus placeat, cumque ea id deserunt
                    cum minima eius reprehenderit deleniti beatae possimus!
                    Nostrum, praesentium earum? Distinctio, consequatur.
                  </Typography>
                </Typography>
              </Grid>

              <CardMedia
                component="img"
                sx={{ width: "36%", marginBottom: "130px" }}
                image="https://xlm.ru/storage/uploads/images/2021/07/21/z4rm5DXqFxC5FlTKwaMnPMq1IAerAE9TV2ARMCQR.jpeg"
                alt="JAWS"
              />
            </Grid>
          </Container>
        </Paper>
      </Box>
      <Typography
        sx={{ backgroundColor: "whitesmoke" }}
        variant="h3"
        component="h4"
        p={2}
        pl={5}
        pt={3}
      >
        Our Partners
      </Typography>
      <Box
        sx={{
          // bgcolor: "background.paper",
          pt: 8,
        }}
      >
        <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
          <Container
            maxWidth="xl"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
            spacing={5}
          >
            <Grid container>
              <Grid
                item
                sm={12}
                md={6}
                sx={{ margin: "auto", marginBottom: "130px", fontSize: "bold" }}
              >
                <div style={{ display: "flex" }}>
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", marginRight: "100px" }}
                    image="https://img.icons8.com/doodle/2x/twitter--v1.png"
                    alt="JAWS"
                  />
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", marginRight: "100px" }}
                    image="https://img.icons8.com/doodle/2x/--tinder.png"
                    alt="JAWS"
                  />
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", marginRight: "100px" }}
                    image="https://img.icons8.com/doodle/2x/instagram--v1.png"
                    alt="JAWS"
                  />
                  <CardMedia
                    component="img"
                    sx={{ width: "15%", marginRight: "100px" }}
                    image="https://img.icons8.com/doodle/2x/facebook-new.png"
                    alt="JAWS"
                  />
                </div>

                <Typography
                  component="h1"
                  variant="h4 "
                  align="start"
                  color="text.danger"
                  mt={15}
                  gutterBottom
                  mr={5}
                  sx={{ color: "black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing Lorem,
                  ipsum..
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    paragraph
                    sx={{
                      margin: "auto",
                      marginTop: "10px",
                      verticalAlign: "middle",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nisi veniam, voluptatem sequi quam sapiente officia
                    voluptate assumenda doloribus placeat, cumque ea id deserunt
                    cum minima eius reprehenderit deleniti beatae possimus!
                    Nostrum, praesentium earum? Distinctio, consequatur.
                  </Typography>
                </Typography>
              </Grid>

              <CardMedia
                component="img"
                sx={{ width: "36%" }}
                image="https://uploads.turbologo.com/uploads/design/hq_preview_image/1847934/draw_svg20210507-22909-18ipq8j.svg.png"
                alt="JAWS"
              />
            </Grid>
          </Container>
        </Paper>
      </Box>
      <Typography
        sx={{ backgroundColor: "whitesmoke" }}
        variant="h3"
        component="h4"
        p={2}
        pl={5}
        pt={3}
      >
        Our Team
      </Typography>
      <div class="main">
        <div class="profile-card">
          <div class="img">
            <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1847934/draw_svg20210507-22909-18ipq8j.svg.png" />
          </div>
          <div class="caption">
            <h3>Vuglizov Said</h3>
            <p>Senior App Developer</p>
          </div>
          <div class="social-links">
            <a href="#">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src="team-2.jpg" />
          </div>
          <div class="caption">
            <h3>Esenzhanov Emil</h3>
            <p>Front End Developer</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1847934/draw_svg20210507-22909-18ipq8j.svg.png" />
          </div>
          <div class="caption">
            <h3>Berik Arapov</h3>
            <p>Full Stact Developer</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="profile-card">
          <div class="img">
            <img src="https://uploads.turbologo.com/uploads/design/hq_preview_image/1847934/draw_svg20210507-22909-18ipq8j.svg.png" />
          </div>
          <div class="caption">
            <h3>---Sultan---</h3>
            <p>Full Stact Developer</p>
            <div class="social-links">
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
