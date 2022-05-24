import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import "../section1/Section.css";

const Section1 = () => {
  return (
    <div>
      <section1>
        <Typography
          component="h2"
          align="center"
          variant="h4 "
          // color="text.danger"
          gutterBottom
          mt={5}
          sx={{
            color: "#bfbfbf",
            fontWeight: "100",
            fontSize: "20px",
          }}
        >
          What's news
        </Typography>
        <Typography
          // component="h1"
          align="center"
          // variant="h4 "
          // color="text.danger"
          // gutterBottom
          // mr={5}
          sx={{ color: "black", fontSize: "3rem", fontWeight: "100" }}
        >
          Comix
          <span style={{ color: "#bfbfbf" }}>Con </span>
          <span style={{ color: "#29c7ab" }}> Highlights</span>
          <p style={{ color: "#29c7ab" }}>_____</p>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            // margin: "150px",
            marginTop: "55px",
          }}
        >
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Special Event Busses
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Best Cosplay Contest
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  Incredible Hotel Deals
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: "290px", height: "450px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="170"
                image="https://www.odindesignthemes.com/theBebop/comic/images/news-item01.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  component="h1"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  // gutterBottom
                  mt={5}
                  mb={5}
                  sx={{ color: "black", fontSize: "1.5rem", fontWeight: "700" }}
                >
                  New Convention Venue
                </Typography>
                <Typography
                  component="h2"
                  align="center"
                  variant="h4 "
                  // color="text.danger"
                  gutterBottom
                  mb={5}
                  sx={{ color: "#cccccc", fontWeight: "100" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae?
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>

        <Box>
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              className="sectionPage"
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container>
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}></Grid>
              </Grid>
            </Container>
          </Paper>
        </Box>
      </section1>
    </div>
  );
};

export default Section1;

{
  /* <CardMedia
  component="img"
  sx={{ width: "30%", mt: "30px", marginRight: "15px" }}
  image="https://www.odindesignthemes.com/theBebop/comic/images/header-image.png"
  alt="JAWS"
/> */
}
