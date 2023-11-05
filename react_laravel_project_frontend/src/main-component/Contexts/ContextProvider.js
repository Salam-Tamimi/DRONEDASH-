import React, { useState, createContext, useContext } from "react";
import axiosClient from "../axios/axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";

import SimpleReactValidator from "simple-react-validator";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const csrf = () => axiosClient.get("/sanctum/csrf-cookie");
  const [error, setError] = useState([]);

  const push = useNavigate();
  const [validator] = React.useState(
    new SimpleReactValidator({
      className: "errorMessage",
    })
  );

  const getUser = async () => {
    const { data } = await axiosClient.get("/api/user");
    setCurrentUser(data);
    console.log(data.id);
    localStorage.setItem("user_id", JSON.stringify(data.id));

  };
  const login = async ({ data }) => {
    await csrf();
    axiosClient
      .post("/login", data)
      .then((response) => {
        console.log(response);
        const user = response.data

        getUser();
        toast.success("You successfully Login on Parador !");
        push(-1);
      })
      .catch((error) => {
        if (error.response.status == 422) {
          setError(error.response.data.errors);

          validator.showMessages();
          toast.error(error);
        }
      });
    localStorage.setItem("isLoggedIn", JSON.stringify(true));
  };


  const register = async ({ data }) => {
    await csrf();
    axiosClient
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        getUser();
        toast.success("You successfully Login on Parador !");
        push("/login");
      })
      .catch((error) => {
        if (error.response.status == 422) {
          setError(error.response.data.errors);

          validator.showMessages();
          toast.error(error);
        }
      })
  };

  const logout = () => {
    axiosClient.post("/logout").then(() => {
      localStorage.removeItem('user');
      setCurrentUser(null);
      localStorage.removeItem('user_id');
    });
  }
  return (
    <AuthContext.Provider
      value={{ login, register, logout, currentUser, error, getUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuthContext() {
  return useContext(AuthContext);
}