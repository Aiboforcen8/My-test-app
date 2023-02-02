import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import { useContext, useEffect, useState } from "react";

const theme = createTheme();

export default function SignIn() {
  const users = useSelector((state) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const validationHelper = users.filter(
      (el) =>
        el.login === data.get("login") && el.password === data.get("password")
    );

    if (validationHelper.length > 0) {
      console.log("вы авторизированы");
      setIsAuth(true);
      localStorage.setItem("isAuth", true);
      localStorage.setItem("login", validationHelper[0].login);
      navigate("/profile");
      dispatch({ type: "CHECK_AUTH", payload: validationHelper[0] });
    } else {
      setError("Имя пользователя или пароль введены неверно");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Войти
          </Typography>
          <Box
            component="form"
            onSubmit={handleLogin}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="login"
              label="Логин"
              name="login"
              autoComplete="login"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Пароль"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography color="red">{error}</Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Войти
            </Button>
            <Grid container>
              <Grid sx={{ display: "flex", gap: "10px" }} item>
                <Typography>Еще нет аккаунта?</Typography>
                <Link
                  style={{ cursor: "pointer", fontSize: "16px" }}
                  onClick={() => navigate("/registration")}
                  variant="body2"
                >
                  Зарегистрироваться
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
