import React from "react";
import ContactUs from "../../Pages/Contact/Contact";
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
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;
