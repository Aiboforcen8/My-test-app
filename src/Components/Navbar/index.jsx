import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { checkSessionAC } from "../../redux/actionCreators/sessionAC";

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const navigateHandler = (endpoint) => navigate(endpoint);

  const handleLogoOut = () => {
    localStorage.setItem("isAuth", false);
    localStorage.removeItem("login");
    setIsAuth(false);
    dispatch(checkSessionAC());
    navigateHandler("/");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            onClick={() => navigateHandler("/")}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            На главную
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>
          <Button onClick={() => navigateHandler("profile")} color="inherit">
            Профиль
          </Button>
          <Button onClick={() => navigateHandler("login")} color="inherit">
            Логин
          </Button>
          <Button
            onClick={() => navigateHandler("registration")}
            color="inherit"
          >
            Регистрация
          </Button>
          {isAuth && (
            <Button onClick={() => handleLogoOut()} color="inherit">
              Выйти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navigation;
