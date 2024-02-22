import { Typography, AppBar } from "@mui/material";
import theme from "../theme";

export default function Footer() {
  return (
    <AppBar
      position="fixed"
      sx={{ top: "auto", bottom: 0, backgroundColor: theme.palette.secondary.dark }}
    >
      <Typography
        variant="body1"
        color="inherit"
        align="center"
        sx={{ marginBlock: 1 }}
      >
        © 2024 Your Book Library. All rights reserved.
      </Typography>
    </AppBar>
  );
}
