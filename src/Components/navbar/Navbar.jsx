import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";
import { useAuth } from "../../contexts/AuthContextProvider";

const Navbar = () => {
  const pages = [
    { name: "Home", link: "/", id: 1 },
    { name: "Store", link: "/products", id: 2 },
    { name: "About Us", link: "/about", id: 3 },
    { name: "Admin panel", link: "/admin", id: 4 },
  ];
  const { user, checkAuth, logout } = useAuth();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      checkAuth();
    }
  }, []);

  const navigate = useNavigate;
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar sx={{ background: "#7575a3" }} position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink to={page.link} key={page.id}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      ml: "auto",
                      my: 2,
                      color: "black",
                      display: "block",
                      fontWeight: "bold",
                    }}
                  >
                    {page.name}
                  </Button>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box
            sx={{
              justifyContent: "center",
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <NavLink to={page.link} key={page.id}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{
                    ml: "auto",
                    my: 2,
                    color: "white",
                    display: "block",
                    fontWeight: "500",
                  }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {user ? (
              <Button
                color="inherit"
                sx={{ color: "white" }}
                onClick={() => {
                  logout();
                  navigate("/login");
                }}
              >
                Logout
              </Button>
            ) : (
              <>
                <NavLink to="/login">
                  <Button color="inherit" sx={{ color: "white" }}>
                    Login
                  </Button>
                </NavLink>

                <NavLink to="/register">
                  <Button color="inherit" sx={{ color: "white" }}>
                    Register
                  </Button>
                </NavLink>
              </>
            )}

            {/* <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <NavLink to="/login">
                  <Typography sx={{ color: "black" }}>Login</Typography>
                </NavLink>
              </MenuItem>

              
              <MenuItem>
                <NavLink to="/register">
                  <Typography sx={{ color: "black" }}>Register</Typography>
                </NavLink>
              </MenuItem>
            </Menu> */}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
