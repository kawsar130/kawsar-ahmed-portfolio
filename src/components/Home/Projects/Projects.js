import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <Box sx={{ bgcolor: "aliceblue" }}>
            <Container
                sx={{
                    p: 10,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center"
                }}
            >
                <Typography variant="h3">My Latest Projects</Typography>
                <Box sx={{ mt: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Box>
                                    <img
                                        src="https://i.ibb.co/NNHH8mZ/motobet-thumb.jpg"
                                        alt=""
                                        style={{ width: "100%" }}
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
                                        Motorcycle Retail Shop where customer
                                        can check motorcycle specification and
                                        place order.
                                    </Typography>
                                    <Link
                                        to="/projects/motobet"
                                        style={{ textDecoration: "none" }}
                                    >
                                        <Button
                                            variant="contained"
                                            sx={{ mt: 2 }}
                                        >
                                            Check Demo
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Box>
                                    <img
                                        src="https://i.ibb.co/bNRrMwR/tourisent-thumb.jpg"
                                        alt=""
                                        style={{ width: "100%" }}
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
                                            Check Demo
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box>
                                <Box>
                                    <img
                                        src="https://i.ibb.co/r2v5Ldw/bluemediq-thumb.jpg"
                                        alt=""
                                        style={{ width: "100%" }}
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
                                            Check Demo
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
