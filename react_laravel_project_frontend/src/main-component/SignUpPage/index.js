import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, BrowserRouter } from "react-router-dom";
import './style.scss';
import { useAuthContext } from "../Contexts/ContextProvider";

const SignUpPage = () => {
  const { register, error } = useAuthContext();


  const [value, setValue] = useState({
    email: "",
    name: "",
    password: "",
    password_confirmation: "",
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const [validator] = React.useState(new SimpleReactValidator({
    className: 'errorMessage'
  }));


  const submitForm = (e) => {
    e.preventDefault();
    console.log(value);



    const data = {
      email: value.email,
      name: value.name,
      password: value.password,
      password_confirmation: 'confirmed',

    };
    if (validator.allValid()) {
      register({ data, error });


      setValue({
        email: "",
        name: "",
        password: "",
        confirm_password: "",
      });
      validator.hideMessages();
    } else {
      validator.showMessages();
      toast.error(error);

    }
  };
  return (
    <Grid className="loginWrapper">
      <div className="loginForm " style={{ backgroundImage: `url("./bg.jpg")` }}
      >
        <h2>Signup</h2>
        <p>Signup your account</p>

        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Full Name"
                value={value.name}
                variant="outlined"
                name="name"
                label="Name"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {error.email && <div>{error.email[0]}</div>}

              {validator.message("name", value.name, "required|alpha")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="E-mail"
                value={value.email}
                variant="outlined"
                name="email"
                label="E-mail"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message("email", value.email, "required|email")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Password"
                value={value.password}
                variant="outlined"
                name="password"
                label="Password"
                type='password'
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {error.password && <div>{error.password[0]}</div>}

              {validator.message("password", value.password, "required")}
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="inputOutline"
                fullWidth
                placeholder="Confirm Password"
                value={value.password}
                variant="outlined"
                type='password'
                name="confirm_password"
                label="Confirm Password"
                InputLabelProps={{
                  shrink: true,
                }}
                onBlur={(e) => changeHandler(e)}
                onChange={(e) => changeHandler(e)}
              />
              {validator.message(
                "confirm password",
                value.password_confirmation,
                `in:${value.password}`
              )}
            </Grid>
            <Grid item xs={12}>
              <Grid className="formFooter">
                <Button
                  fullWidth
                  className="cBtn cBtnLarge cBtnTheme"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <Button className="facebook">
                  <i className="fa fa-facebook"></i>
                </Button>
                <Button className="twitter">
                  <i className="fa fa-twitter"></i>
                </Button>
                <Button className="linkedin">
                  <i className="fa fa-linkedin"></i>
                </Button>
              </Grid>
              <p className="noteHelp">
                Already have an account?{" "}
                <Link to="/login">Return to Sign In</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </div>
    </Grid>
  );
};

export default SignUpPage;