import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  CardMedia,
  Container,
  Grid,
  Paper,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "../section2/Section2.css";
import StarIcon from "@mui/icons-material/Star";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}

const Section2 = () => {
  const [value, setValue] = React.useState(3);
  const [hover, setHover] = React.useState(-1);
  const [valueSecond, setValueSecond] = React.useState(4);
  const [hoverSecond, setHoverSecond] = React.useState(-1);
  const [valueThree, setValueThree] = React.useState(2);
  const [hoverThree, setHoverThree] = React.useState(-1);
  const [valueFour, setValueFour] = React.useState(5);
  const [hoverFour, setHoverFour] = React.useState(-1);
  const [valueFive, setValueFive] = React.useState(4);
  const [hoverFive, setHoverFive] = React.useState(-1);
  const [valueSix, setValueSix] = React.useState(1);
  const [hoverSix, setHoverSix] = React.useState(-1);
  const [valueSeven, setValueSeven] = React.useState(4);
  const [hoverSeven, setHoverSeven] = React.useState(-1);
  const [valueEight, setValueEight] = React.useState(5);
  const [hoverEight, setHoverEight] = React.useState(-1);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <main>
        <ul class="cards">
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/tales_of_suspense_059.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9lYOIYob45FamPRgLQJxuINgnTm7NB4jaQ&usqp=CAU"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={value}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        onChangeActive={(event, newHover) => {
                          setHover(newHover);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {value !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hover !== -1 ? hover : value]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/harleen_01.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://img.freepik.com/free-vector/halloween-quotes-svg-design-lettering_22345-1246.jpg"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueSecond}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueSecond) => {
                          setValueSecond(newValueSecond);
                        }}
                        onChangeActive={(event, newHoverSecond) => {
                          setHoverSecond(newHoverSecond);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueSecond !== null && (
                        <Box sx={{ ml: 2 }}>
                          {
                            labels[
                              hoverSecond !== -1 ? hoverSecond : valueSecond
                            ]
                          }
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/a_a_the_o_5.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTujpoMDjSB0tZDxAIQYLKLCvIVpJSArgSw&usqp=CAU"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>

                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueThree}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueThree) => {
                          setValueThree(newValueThree);
                        }}
                        onChangeActive={(event, newHoverThree) => {
                          setHoverThree(newHoverThree);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueThree !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverThree !== -1 ? hoverThree : valueThree]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/animosity_006.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://w7.pngwing.com/pngs/870/61/png-transparent-comics-comic-book-others-comics-comic-book-logo.png"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueFour}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueFour) => {
                          setValueFour(newValueFour);
                        }}
                        onChangeActive={(event, newHoverFour) => {
                          setHoverFour(newHoverFour);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueFour !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverFour !== -1 ? hoverFour : valueFour]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
        <ul class="cards">
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/morbius_03.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://img.freepik.com/free-vector/halloween-quotes-svg-design-lettering_22345-1246.jpg"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueFive}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueFive) => {
                          setValueFive(newValueFive);
                        }}
                        onChangeActive={(event, newHoverFive) => {
                          setHoverFive(newHoverFive);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueFive !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverFive !== -1 ? hoverFive : valueFive]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/dc_801.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmTujpoMDjSB0tZDxAIQYLKLCvIVpJSArgSw&usqp=CAU"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueSix}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueSix) => {
                          setValueSix(newValueSix);
                        }}
                        onChangeActive={(event, newHoverSix) => {
                          setHoverSix(newHoverSix);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueSix !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverSix !== -1 ? hoverSix : valueSix]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/rogue_one_05.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://www.freesvgdownload.com/wp-content/uploads/2021/11/star-wars-coffe-starbucks.jpg"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">Jessica Parker</h3>

                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueSeven}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueSeven) => {
                          setValueSeven(newValueSeven);
                        }}
                        onChangeActive={(event, newHoverSeven) => {
                          setHoverSeven(newHoverSeven);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueSeven !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverSeven !== -1 ? hoverSeven : valueSeven]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
          <li>
            <a href="#" class="card">
              <img
                src="http://cm-project.com/uploads/posters/fire_power_001.jpg"
                class="card__image"
                alt=""
              />
              <div class="card__overlay">
                <div class="card__header">
                  <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="card__thumb"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp9lYOIYob45FamPRgLQJxuINgnTm7NB4jaQ&usqp=CAU"
                    alt=""
                  />
                  <div class="card__header-text">
                    <h3 class="card__title">kim Cattrall</h3>
                    <Box
                      sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "center",
                        color: "#29c7ab",
                      }}
                    >
                      <Rating
                        name="hover-feedback"
                        value={valueEight}
                        precision={0.5}
                        getLabelText={getLabelText}
                        onChange={(event, newValueEight) => {
                          setValueEight(newValueEight);
                        }}
                        onChangeActive={(event, newHoverEight) => {
                          setHoverEight(newHoverEight);
                        }}
                        emptyIcon={
                          <StarIcon
                            style={{ opacity: 0.55 }}
                            fontSize="inherit"
                          />
                        }
                      />
                      {valueEight !== null && (
                        <Box sx={{ ml: 2 }}>
                          {labels[hoverEight !== -1 ? hoverEight : valueEight]}
                        </Box>
                      )}
                    </Box>
                  </div>
                </div>
                <p class="card__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
              </div>
            </a>
          </li>
        </ul>
      </main>
      <section>
        <Box>
          <Paper sx={{ maxWidth: "100%", boxShadow: 0 }}>
            <Container
              className="Section2PageContainer"
              maxWidth="xl"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
              spacing={5}
            >
              <Grid container sx={{ margin: "0 auto" }}>
                <Grid
                  item
                  sm={12}
                  md={6}
                  sx={{ marginTop: "100px", margin: "50px" }}
                >
                  <Typography
                    // component="h1"
                    align="left"
                    // variant="h4 "
                    // color="text.danger"
                    // gutterBottom
                    mb={5}
                    sx={{ color: "white", fontSize: "3rem", fontWeight: "700" }}
                  >
                    How to
                    <span style={{ color: "#bfbfbf", fontWeight: "100" }}>
                      {" "}
                      Buy Tickets
                    </span>
                    <p style={{ color: "#29c7ab" }}>_____</p>
                  </Typography>
                  <Accordion
                    expanded={expanded === "panel1"}
                    onChange={handleChange("panel1")}
                    sx={{ margin: "15px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#29c7ab",
                        color: "white",
                        margin: "2px",
                      }}
                    >
                      <Typography>
                        Different Kinds of Tickets and Passes
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: "#372d3f", color: "white" }}
                    >
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel2"}
                    onChange={handleChange("panel2")}
                    sx={{ margin: "15px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#29c7ab",
                        color: "white",
                        margin: "2px",
                      }}
                    >
                      <Typography>Buying Tickets and Passes Online</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: "#372d3f", color: "white" }}
                    >
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel3"}
                    onChange={handleChange("panel3")}
                    sx={{ margin: "15px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#29c7ab",
                        color: "white",
                        margin: "2px",
                      }}
                    >
                      <Typography>Online Payment Methods</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: "#372d3f", color: "white" }}
                    >
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel4"}
                    onChange={handleChange("panel4")}
                    sx={{ margin: "15px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#29c7ab",
                        color: "white",
                        margin: "2px",
                      }}
                    >
                      <Typography>Tickets and Passes Delivery</Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: "#372d3f", color: "white" }}
                    >
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                  <Accordion
                    expanded={expanded === "panel5"}
                    onChange={handleChange("panel5")}
                    sx={{ margin: "15px" }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                      sx={{
                        backgroundColor: "#29c7ab",
                        color: "white",
                        margin: "2px",
                      }}
                    >
                      <Typography>
                        Buying Tickets and Passes Personally
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      sx={{ backgroundColor: "#372d3f", color: "white" }}
                    >
                      <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </Grid>
                <CardMedia
                  component="img"
                  sx={{
                    maxWidth: "500px",
                    maxHeight: "350px",
                    mt: "15%",
                    marginRight: "15px",
                  }}
                  image="https://www.odindesignthemes.com/theBebop/comic/images/promo-image.png"
                  alt="JAWS"
                />
              </Grid>
            </Container>
          </Paper>
        </Box>
      </section>
    </div>
  );
};

export default Section2;
