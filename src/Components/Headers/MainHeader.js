import React from "react";
import "./MainHeader.css";
import { useSelector, useDispatch } from "react-redux";
import { authenticationSliceActions } from "../../Utils/store";

const Header = () => {
  const signedIn = useSelector((state) => state.authentication.signedIn);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(authenticationSliceActions.logIn());
    console.log("login");
  };

  const logoutHandler = () => {
    dispatch(authenticationSliceActions.logOut());
    console.log("logout");
  };

  return (
    <div className="header-container">
      <div className="header-component">
        <div className="left-nav">
          <div className="logo-link">
            <p>
              <i className="fa-solid fa-plane"></i>
            </p>
            <h2>wanderbranch</h2>
          </div>
          <div className="nav-links">
            <a href="/home">Home</a>
            <a href="#">Travel guides</a>
          </div>
        </div>
        {signedIn && (
          <div className="right-nav">
            <div className="search-notification-account">
              <div className="search-bar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <form action="/search" method="POST">
                  <input type="text" placeholder="Search a place or user"></input>
                </form>
              </div>
              <div className="notifications-icon">
                <i className="fa-regular fa-bell"></i>
              </div>
              <div className="account-icon">
                <p>J</p>
              </div>
            </div>
            <button onClick={logoutHandler} type="button">
              Logout
            </button>
          </div>
        )}
        {!signedIn && (
          <button onClick={loginHandler} type="button">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
