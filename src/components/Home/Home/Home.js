import React from "react";
import About from "../About/About";

import HomeBanner from "../HomeBanner/HomeBanner";
import OfferingClient from "../OfferingClient/OfferingClient";
import Projects from "../Projects/Projects";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <OfferingClient></OfferingClient>
            <Projects></Projects>
        </div>
    );
};

export default Home;
