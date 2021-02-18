import React from "react";
import Carousel from "react-material-ui-carousel";
import Login from "../containers/LoginContainer";
import Dashboard from "../components/Dashboard";
import ProcessPage from "../pages/ProcessPage";

export default function ComponentCarousel() {
  return (
      <Carousel
        navButtonsAlwaysVisible={true}
        indicators={true}
        autoPlay={false}
      >
        <Login initialState={0} />
        <Login initialState={1} />
        <Login initialState={2} />
        <Dashboard />
        <ProcessPage />
      </Carousel>
  );
}
