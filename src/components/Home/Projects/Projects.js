import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Projects.css";

const Projects = () => {
    return (
        <Box sx={{ bgcolor: "aliceblue" }}>
            <Container
                sx={{
                    py: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold" }}>
                    My Latest Projects
                </Typography>
                <Typography variant="body1" sx={{ mt: 3 }}>
                    Here are my some recent projects. For live preview of
                    specific project, click on 'Details' below.
                </Typography>
                <Box sx={{ mt: 5 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} className="projectBox">
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: "#e1fcfb",
                                    borderRadius: 2,
                                    boxShadow:
                                        "1px 1px 20px rgba(46, 30, 102, 0.2) inset"
                                }}
                            >
                                <Box>
                                    <img
                                        src="https://i.ibb.co/NNHH8mZ/motobet-thumb.jpg"
                                        alt=""
                                        style={{
                                            width: "100%",
                                            borderRadius: "5px"
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        MotoBet
                                    </Typography>
                                    <Typography>
                                        MotoBet provides motorcycle
                                        specification and customer can place
                                        order.
                                    </Typography>
                                    <Link
                                        to="/projects/motobet"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                        >
                                            Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} className="projectBox">
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: "#e1fcfb",
                                    borderRadius: 2,
                                    boxShadow:
                                        "1px 1px 20px rgba(46, 30, 102, 0.2) inset"
                                }}
                            >
                                <Box>
                                    <img
                                        src="https://i.ibb.co/bNRrMwR/tourisent-thumb.jpg"
                                        alt=""
                                        style={{
                                            width: "100%",
                                            borderRadius: "5px"
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        Tourisent
                                    </Typography>
                                    <Typography>
                                        Tourism and Travel based website that
                                        helps traveler to book a tour package.
                                    </Typography>
                                    <Link
                                        to="/projects/tourisent"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                        >
                                            Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} className="projectBox">
                            <Box
                                sx={{
                                    p: 2,
                                    bgcolor: "#e1fcfb",
                                    borderRadius: 2,
                                    boxShadow:
                                        "1px 1px 20px rgba(46, 30, 102, 0.2) inset"
                                }}
                            >
                                <Box>
                                    <img
                                        src="https://i.ibb.co/r2v5Ldw/bluemediq-thumb.jpg"
                                        alt=""
                                        style={{
                                            width: "100%",
                                            borderRadius: "5px"
                                        }}
                                    />
                                </Box>
                                <Box>
                                    <Typography
                                        variant="h5"
                                        sx={{ fontWeight: "bold" }}
                                    >
                                        BlueMediQ
                                    </Typography>
                                    <Typography>
                                        Medical Equipment Supplier shop to
                                        distribute medical equipments. shops.
                                    </Typography>
                                    <Link
                                        to="/projects/bluemediq"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                        >
                                            Details
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Projects;
