import React, { useState } from 'react';
import Grid from "@mui/material/Grid";
import SimpleReactValidator from "simple-react-validator";
import { toast } from "react-toastify";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../Contexts/ContextProvider";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import './style.scss';
import axiosClient from '../axios/axios';



const LoginPage = (props) => {
  const navigate = useNavigate();

  const push = useNavigate();
  const { login, getUser, error } = useAuthContext(); // Call the context function

  const [value, setValue] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const changeHandler = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    validator.showMessages();
  };

  const rememberHandler = () => {
    setValue({ ...value, remember: !value.remember });
  };

  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const submitForm = (e) => {
    e.preventDefault();
    if (validator.allValid()) {
      setValue({
        email: "",
        password: "",
        remember: false,
      });
      validator.hideMessages();
      const data = {
        email: value.email,
        name: value.name,
        password: value.password,
        confirm_password: value.confirm_password,
      };

      login({ data, error });
    }
  };
  return (
    <Grid className="loginWrapper">
      <Grid className="loginForm">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>

        <form onSubmit={submitForm}>
          <Grid container spacing={3}>
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
              {error.email && <div className="bg-red">{error.email[0]}</div>}

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
                type="password"
                label="Password"
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
              <Grid className="formAction">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={value.remember}
                      onChange={rememberHandler}
                    />
                  }
                  label="Remember Me"
                />
                <Link to="/forgot-password">Forgot Password?</Link>
              </Grid>
              <Grid className="formFooter">
                <Button fullWidth className="cBtnTheme" type="submit">
                  Login
                </Button>
              </Grid>
              <Grid className="loginWithSocial">
                <GoogleLogin
                  onSuccess={(credentialResponse) => {
                    const decoded = jwt_decode(credentialResponse.credential);
                    console.log(decoded);
                    axiosClient
                      .post("/api/google", decoded)
                      .then((response) => {
                        console.log("test");
                        console.log(response.data);
                        getUser();
                        toast.success("You successfully Login on Parador !");
                        localStorage.setItem("isLoggedIn", JSON.stringify(true));
                        navigate(-1);

                      })
                      .catch((error) => {
                        if (error.response.status == 422) {
                          validator.showMessages();
                          toast.error(error);
                        }
                      });



                  }}
                  onError={() => {
                    console.log('login failed');
                  }
                  }
                />

              </Grid>
              <p className="noteHelp">
                Don't have an account?{" "}
                <Link to="/register">Create free account</Link>
              </p>
            </Grid>
          </Grid>
        </form>
        <div className="shape-img">
          <i className="fi flaticon-honeycomb"></i>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginPage;