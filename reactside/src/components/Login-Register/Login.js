import React, { useState, useEffect } from "react";
import { Login } from "../../redux/actions/LoginRegisterActions/loginActions";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginHooks() {
  const classes = useStyles();
  const [loginPerson, setLoginPerson] = useState({});
  //const loginUser = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();


  function handleChange(event) {
    const { name, value } = event.target;
    setLoginPerson((previousPerson) => ({
      ...previousPerson,
      [name]: name === "id" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    //Login(loginPerson)
    dispatch(Login(loginPerson));
   
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Giriş Yap
        </Typography>
        <form onSubmit={handleSave} className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Bilgilerimi Hatırla"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Giriş Yap
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Şifremi Unuttum
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Bir hasabın yok mu?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}></Box>
    </Container>
  );
}
