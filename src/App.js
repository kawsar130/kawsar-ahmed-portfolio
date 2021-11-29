import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import Contact from "./components/Contact/Contact";
import NotFound from "./components/NotFound/NotFound";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Projects from "./components/Projects/Projects";
import HomeBanner from "./components/Home/HomeBanner/HomeBanner";

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route path="home" element={<HomeBanner />} />
                        <Route path="about" element={<About />} />
                        <Route path="resume" element={<Resume />} />
                        <Route path="projects" element={<Projects />} />
                        <Route path="contact" element={<Contact />} />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
