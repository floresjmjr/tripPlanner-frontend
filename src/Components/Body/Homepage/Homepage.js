import React from "react";
import "./Homepage.css";
import TripPlanning from "./TripPlanning/TripPlanning";
import Explore from "./Explore/Explore";
import Footer from "../../Footers/MainFooter";
import Header from "../../Headers/MainHeader";
import { useSelector } from "react-redux";

const Homepage = () => {
  const signedIn = useSelector((state) => state.authentication.signedIn);
  return (
    <React.Fragment>
      <Header />
      {signedIn && (
        <React.Fragment>
          <div className="body-container">
            <div className="body-component">
              <TripPlanning />
              <Explore />
            </div>
          </div>
          <Footer />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Homepage;
