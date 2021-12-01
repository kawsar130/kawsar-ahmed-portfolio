import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

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
                py: { xs: 10, sm: 15, lg: 20 },
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
                                sx={{ fontWeight: "bold", mb: 3 }}
                            >
                                About Myself
                            </Typography>
                            <Typography>
                                I am Kawsar Ahmed, a frontend React Web
                                Developer especially working on MERN Stack
                                development. For three years, I have been
                                involved with computer programming. Initially, I
                                worked with Robotics and Automation where I
                                needed to work with both software and hardware.
                                In 2021, I started my journey with Web
                                Development and started to learn with my full
                                efforts. At this stage, I think I am very able
                                to do some professional projects that make a
                                significant reason to learn more to go further
                                in this sector.
                            </Typography>
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
