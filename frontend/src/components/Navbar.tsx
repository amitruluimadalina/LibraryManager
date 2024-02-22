import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import DrawerMenu from "./DrawerMenu";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function Navbar() {
  const small = useMediaQuery("(max-width:600px)");

  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.secondary.main,
        borderBottom: `2px solid ${theme.palette.background.default}`,
      }}
    >
      <Toolbar>
        {small && (
          <>
            <Button onClick={handleDrawerToggle}>
              {drawerOpen ? (
                <ExpandLess sx={{ color: theme.palette.background.default }} />
              ) : (
                <ExpandMore sx={{ color: theme.palette.background.default }} />
              )}
            </Button>
            <Typography
              variant="h6"
              color="inherit"
              sx={{
                cursor: "pointer",
                color: theme.palette.background.default,
              }}
              onClick={handleDrawerToggle}
            >
              Library
            </Typography>
            <DrawerMenu open={drawerOpen} onClose={handleDrawerToggle} />
          </>
        )}

        {!small && (
          <>
            <Typography
              variant="h5"
              sx={{ color: theme.palette.background.default, flexGrow: 1 }}
            >
              Library
            </Typography>
            <Link to="/home">
              <Button
                color="inherit"
                sx={{ color: theme.palette.background.default }}
              >
                Home
              </Button>
            </Link>
            <Link to="/list">
              <Button sx={{ color: theme.palette.background.default }}>
                Explore
              </Button>
            </Link>
            <Link to="/new">
              <Button
                sx={{ color: theme.palette.background.default }}
                color="inherit"
              >
                Create
              </Button>
            </Link>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}
