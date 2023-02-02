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
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import { useState } from "react";
import { useSelector } from "react-redux";

const theme = createTheme();

export default function SignUp() {
  const navigate = useNavigate();
  const { isAuth } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [successRegistration, setSuccessRegistration] = useState(false);
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

  const handleRegistration = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const validationHelper = users.filter(
      (el) => el.login === data.get("login")
    );

    const validateLogin = validationHelper.length > 0;
    const validatePasswords = data.get("password") !== data.get("password1");

    if (validateLogin) {
      setLoginError("Пользователь с таким логином уже зарегистрирован");
    } else {
      setLoginError("");
    }
    if (validatePasswords) {
      setPasswordError("Введенные пароли не совпадают");
    }
    if (!validateLogin && !validatePasswords) {
      setSuccessRegistration(true);
      setPasswordError("Успешная регистрация");
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
            Зарегистрироваться
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleRegistration}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  fullWidth
                  id="login"
                  label="Логин"
                  name="login"
                  autoComplete="family-name"
                />
              </Grid>
              <Typography ml={2} fontSize={15} color="red">
                {loginError}
              </Typography>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Пароль"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password1"
                  label="Повторите пароль"
                  type="password"
                  id="password1"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            {successRegistration ? (
              <Typography color="green">{passwordError}</Typography>
            ) : (
              <Typography color="red">{passwordError}</Typography>
            )}
            {successRegistration ? (
              <Button
                onClick={() => navigate("/login")}
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Войти
              </Button>
            ) : (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Зарегистрироваться
              </Button>
            )}
            {!successRegistration && (
              <Grid container justifyContent="flex-start">
                <Grid sx={{ display: "flex", gap: "10px" }} item>
                  <Typography>Уже есть аккаунт?</Typography>
                  <Link
                    style={{ cursor: "pointer", fontSize: "16px" }}
                    onClick={() => navigate("/login")}
                    variant="body1"
                  >
                    Войти
                  </Link>
                </Grid>
              </Grid>
            )}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
