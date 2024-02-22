import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { defaultAnimationOptions } from "../constants/animation";
import Lottie from "react-lottie";

export default function EmptyLibrary() {
  return (
    <Box textAlign="center" mt={4}>
      <Box display="flex" justifyContent="center">
        <Lottie options={defaultAnimationOptions} height={400} width={400} />
      </Box>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/new"
        sx={{ marginTop: 2 }}
      >
        Create a New Book
      </Button>
    </Box>
  );
}
