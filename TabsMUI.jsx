import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Select,
  MenuItem,
  IconButton,
  Menu,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Frontpage from "./components/Frontpage";
import Products from "./components/Product";
import AboutUs from "./components/AboutUs";
import Register from "./components/Register";

function TabsMUI() {
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (newValue) => {
    setValue(newValue);
    handleMenuClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="absolute"
        sx={{ width: "100%", backgroundColor: "#000000" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            AnchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: "top", horizontal: "left" }}
            transformOrigin={{ vertical: "top", horizontal: "left" }}
          >
            <MenuItem onClick={() => handleMenuItemClick(0)}>
              Frontpage
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(1)}>Products</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(2)}>About Us</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(3)}>Register</MenuItem>
          </Menu>
          <Typography variant="h5" sx={{ flexGrow: 1 }}>
            {value === 0
              ? "Frontpage"
              : value === 1
              ? "Products"
              : value === 3
              ? "Register"
              : "About Us"}
          </Typography>
        </Toolbar>
      </AppBar>

      <Box>
        {value === 0 && <Frontpage />}
        {value === 1 && <Products />}
        {value === 2 && <AboutUs />}
        {value === 3 && <Register />}
      </Box>
    </Box>
  );
}

export default TabsMUI;
