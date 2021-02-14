import React from "react";
import Carousel from "react-material-ui-carousel";
import Login from "../containers/Login";
import Dashboard from "../components/Dashboard";

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
      </Carousel>
  );
}
