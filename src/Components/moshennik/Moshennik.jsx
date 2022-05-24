import * as React from "react";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();
export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Paper sx={{ maxWidth: "100%", m: 6, boxShadow: 0 }}>
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
                <Grid item sm={12} md={6} sx={{ margin: "auto" }}>
                  <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                    mr={3}
                  >
                    Внимание, мошенники!
                    <Typography
                      variant="h5"
                      color="text.secondary"
                      paragraph
                      sx={{ margin: "auto", verticalAlign: "middle" }}
                    >
                      Уважаемые читатели! «Издательской Группе «Азбука-Аттикус»
                      стало известно, что участились случаи использования наших
                      торговых знаков «Махаон», «Азбука» в мошеннических целях,
                      в том числе в предложениях вакансий на работу в
                      издательстве при условии предварительного перевода
                      средств. Мы размещаем информацию о вакансиях только на
                      ресурсах, которые внимательно относятся к законности
                      объявлений (hh.ru, Superjob и подобные) и НИКОГДА не
                      просим соискателей перевести нам какие-либо деньги — это
                      незаконно. Сотрудники издательства не связываются с
                      соискателями через мессенджеры ВК, Facebook, Whatsapp,
                      Telegram и никогда не пишут в личные сообщения. В нашем
                      издательстве нет вакансий «Наборщик текстов». Если вы
                      встретите схожее объявление, пожалуйста, обратите внимание
                      на адрес электронной почты: официальные почтовые домены
                      издательской группы - @atticus-group.ru и @azbooka.spb.ru.
                      Эти домены присутствуют во всех письмах от сотрудников
                      издательства. Пожалуйста, будьте внимательны!
                    </Typography>
                  </Typography>
                </Grid>
                <Grid item sm={12} md={5}>
                  <CardMedia
                    component="img"
                    sx={{ width: "80%", height: "80%" }}
                    image="https://api.azbooka.ru/upload/iblock/a6b/a6b252dcf329e0acfe46f559f0e92a36.jpg"
                    alt="Сomic"
                  />
                </Grid>
              </Grid>
              <Stack sx={{ pt: 8 }} spacing={6} justifyContent="center"></Stack>
            </Container>
          </Paper>
        </Box>
      </main>
    </ThemeProvider>
  );
}
