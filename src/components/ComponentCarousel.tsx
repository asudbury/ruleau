import React from 'react';
import Carousel from 'react-material-ui-carousel'
import Login from "./Login";

export default function ComponentCarousel()
{
    function onNullFunction() {alert("hello you!")}

    return (
        <Carousel navButtonsAlwaysVisible={true} indicators={true}>
                <Login initialState={0} />
                <Login initialState={1} />
                <Login initialState={2} />
        </Carousel>
    )
}
