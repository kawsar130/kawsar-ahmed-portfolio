import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Tourisent = () => {
    return (
        <Box className="banner-header">
            <Box
                sx={{
                    p: { xs: 0, sm: 3, md: 6 },
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Grid
                    container
                    spacing={2}
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        bgcolor: "white",
                        p: { xs: 1, sm: 2, md: 5 },
                        mt: 10,
                        borderRadius: 4,
                        width: { xl: "80%", lg: "90%", md: "100%" },
                        mx: "auto"
                    }}
                >
                    <Typography variant="h3" sx={{ mb: 10 }}>
                        Tourisent Screenshot
                    </Typography>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                style={{
                                    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3"
                                }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/86CPFTJ/tourisent-1.png"
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                style={{
                                    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3"
                                }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/DQpRCgY/tourisent-2.png"
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={4}
                                style={{
                                    boxShadow: "1px 1px 10px rgba(0, 0, 0, 0.3"
                                }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/0QPxsKv/tourisent-3.png"
                                    alt=""
                                />
                            </Grid>
                        </Grid>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                mt: 10
                            }}
                        >
                            <a
                                href="https://tourisent.web.app/"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Live Demo
                                </Button>
                            </a>
                            <a
                                href="https://github.com/kawsar130/Tourisent"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Client-Side
                                </Button>
                            </a>
                            <a
                                href="https://github.com/kawsar130/Tourisent-server"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Server-Side
                                </Button>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12}>
                        <Box className="banner-header-text">
                            <Typography
                                fontWeight="bold"
                                sx={{
                                    textAlign: "left",
                                    fontSize: {
                                        xs: "2em",
                                        sm: "3em",
                                        md: "3.5em"
                                    }
                                }}
                            >
                                Tourisent
                            </Typography>
                            <Typography variant="h5">
                                Your Travel Partner
                            </Typography>

                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                Tourisent is one of the largest Travel Agency in
                                Bangladesh. We are passionate to Revamp your
                                bucket list and give wings to your dreamy
                                destinations. Liberating in the delightful
                                international travel destinations is no more a
                                task. Give yourself a break from the monotonous
                                life, explore the breath-taking beauty through
                                international tourism guide with Tourisent.
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mt: 5 }}
                            >
                                Website Features
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                · Tour and Travel agencies website that provides
                                tour packages. <br />· Google Sign-In, Email &
                                Password Sign-In available. <br />· Tour
                                packages and user data are connected and stored
                                in MongoDB. <br />· Technologies: React,
                                React-Bootstrap, Firebase Authentication,
                                Node.JS, MongoDB, Express.JS.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Tourisent;
