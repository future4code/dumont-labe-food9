import React from "react";
import { Switch, Route } from "react-router-dom";
//Pages
import InitialPage from "../pages/Login+Signup/InitialPage/InitialPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login+Signup/Login/Login";
import Register from "../pages/Login+Signup/Register/Register";
import Cart from "../pages/Cart/Cart";
import Restaurant from "../pages/Restaurant/Restaurant";
import AdressRegistration from "../pages/Login+Signup/AdressResgitration/AdressRegistration";
import Profile from "../pages/ProfilePages/Profile/Profile";
import EditProfile from "../pages/ProfilePages/EditProfile/EditProfile";
import EditAdress from "../pages/ProfilePages/EditAdress/EditAdress";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={InitialPage} />
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/restaurant" exact component={Restaurant} />
      <Route path="/register" exact component={Register} />
      <Route path="/adress" exact component={AdressRegistration} />
      <Route path="/profile" exact component={Profile} />
      <Route path="/editprofile" exact component={EditProfile} />
      <Route path="/editadress" exact component={EditAdress} />
      <Route component={ErrorPage} />
    </Switch>
  );
};

export default Routes;
