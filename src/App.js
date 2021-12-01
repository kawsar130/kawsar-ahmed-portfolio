import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Pages/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/Home/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";

import Navigation from "./components/Navigation/Navigation";
import Blog from "./components/Pages/Blog/Blog";
import Motobet from "./components/ProjectsDetail/Motobet/Motobet";
import Tourisent from "./components/ProjectsDetail/Tourisent/Tourisent";
import BlueMediq from "./components/ProjectsDetail/BlueMediq/BlueMediq";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation></Navigation>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="home" element={<Home />} />

                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />

                    <Route path="/projects/motobet" element={<Motobet />} />
                    <Route path="/projects/tourisent" element={<Tourisent />} />
                    <Route path="/projects/bluemediq" element={<BlueMediq />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
