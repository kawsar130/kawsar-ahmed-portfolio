import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Button } from "@mui/material";

import SkillBar from "react-skillbars";

const About = () => {
    const skills = [
        {
            type: "HTML",
            level: 85
        },
        {
            type: "CSS",
            level: 90
        },
        {
            type: "Javascript",
            level: 65
        },
        {
            type: "React",
            level: 80
        },
        {
            type: "MongoDB",
            level: 75
        },
        {
            type: "Node.Js",
            level: 60
        },
        {
            type: "Material UI",
            level: 80
        }
    ];

    const colors = {
        bar: "#3498db",
        title: {
            text: "#fff",
            background: "#2980b9"
        }
    };
    return (
        <Box
            sx={{
                textAlign: "left",
                pt: { xs: 10, sm: 15, md: "40vh", lg: "40vh", xl: "400px" },
                pb: { xs: 10, sm: 15, md: 15, lg: 20 },
                Height: "100%",
                display: "flex",
                alignItems: "center",
                bgcolor: "aliceblue"
            }}
        >
            <Container>
                <Grid container spacing={10}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h3"
                                sx={{ fontWeight: "bold", mb: 2 }}
                            >
                                About Myself
                            </Typography>
                            <Typography>
                                I am Kawsar Ahmed, a frontend React Web
                                Developer especially working on MERN Stack
                                development. For three years, I have been
                                working with computer programming. Initially, I
                                started with Robotics and Automation where I
                                worked with both software and hardware together.
                                In 2021, I started my journey with Web
                                Development and started to learn with my full
                                effort. Now I am working as a full time
                                freelance Web Developer and building projects
                                for my Local Clients.
                                <Typography sx={{ fontWeight: "bold", mt: 1 }}>
                                    Here you can check my Resume.
                                </Typography>
                            </Typography>
                            <a
                                href="https://drive.google.com/file/d/1Zpr6LBoWIx0GEKzeWuuZ8jumdma3K7R6/view?usp=sharing"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mt: 1 }} variant="contained">
                                    Download Resume
                                </Button>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <SkillBar skills={skills} colors={colors} />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
