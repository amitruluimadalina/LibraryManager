import { Button, Drawer, List, ListItem } from "@mui/material";
import { DrawerMenuProps } from "../types/types";
import { Link } from "react-router-dom";
import theme from "../theme";

export default function DrawerMenu({ open, onClose }: DrawerMenuProps) {
  const handleItemClick = () => {
    onClose();
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <ListItem onClick={handleItemClick} sx={{ textAlign: "center" }}>
          <Link to="/home">
            <Button sx={{ color: theme.palette.primary.main }}>Home</Button>
          </Link>
        </ListItem>
        <ListItem onClick={handleItemClick} sx={{ textAlign: "center" }}>
          <Link to="/list">
            <Button sx={{ color: theme.palette.primary.main }}>Explore</Button>
          </Link>
        </ListItem>
        <ListItem onClick={handleItemClick} sx={{ textAlign: "center" }}>
          <Link to="/new">
            <Button sx={{ color: theme.palette.primary.main }}>Create</Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  );
}
