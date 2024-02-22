import { Grid, Typography, Container, Box, Button } from "@mui/material";
import Lottie from "react-lottie";
import theme from "../../theme";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { defaultAnimationOptions } from "./constants/animation";

export default function Home() {
  return (
    <Container>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "80vh" }}
      >
        <Grid item xs={12} sm={6}>
          <Box textAlign="center">
            <Typography variant="h4" gutterBottom fontWeight="bold">
              Welcome to Our Book Library
            </Typography>
            <Typography variant="body1" color={theme.palette.text.secondary}>
              Dive into a world of stories and adventures with our extensive
              collection of books. From timeless classics to contemporary
              bestsellers, there's something for everyone.
            </Typography>
            <Link to="/list">
              <Button
                color="inherit"
                variant="contained"
                sx={{
                  marginTop: 4,
                  borderRadius: "20px",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.background.default,
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                }}
                endIcon={<ArrowForward />}
              >
                Explore our library
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box display="flex" justifyContent="center">
            <Lottie
              options={defaultAnimationOptions}
              height={400}
              width={400}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
