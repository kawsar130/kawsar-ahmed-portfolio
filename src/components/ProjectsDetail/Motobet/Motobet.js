import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Motobet = () => {
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
                    <Typography variant="h4" sx={{ mb: 5 }}>
                        MotoBet Screenshots
                    </Typography>
                    <Box>
                        <Grid container>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={3.8}
                                style={{
                                    boxShadow:
                                        "1px 1px 10px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "10px"
                                }}
                                sx={{ m: 1 }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/GvjFXDs/1.png"
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={3.8}
                                style={{
                                    boxShadow:
                                        "1px 1px 10px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "10px"
                                }}
                                sx={{ m: 1 }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/RgdNh6h/2.png"
                                    alt=""
                                />
                            </Grid>
                            <Grid
                                item
                                xs={12}
                                sm={12}
                                md={3.8}
                                style={{
                                    boxShadow:
                                        "1px 1px 10px rgba(0, 0, 0, 0.3)",
                                    borderRadius: "10px"
                                }}
                                sx={{ m: 1 }}
                            >
                                <img
                                    style={{
                                        borderRadius: "10px",
                                        width: "100%"
                                    }}
                                    src="https://i.ibb.co/9Ht7SSv/3.png"
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
                                href="https://motobet-31cbd.web.app/"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Live Demo
                                </Button>
                            </a>
                            <a
                                href="https://github.com/kawsar130/MotoBet"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Client-Side
                                </Button>
                            </a>
                            <a
                                href="https://github.com/kawsar130/MotoBet-server"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Server-Side
                                </Button>
                            </a>
                        </Box>
                    </Box>
                    <Box sx={{ mt: 5 }}>
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
                                MotoBet
                            </Typography>
                            <Typography variant="h5">
                                A motorcycle Retail Shop
                            </Typography>

                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                MotoBet is one of the largest Motorcycle Retail
                                seller. We are passionate to Revamp your bucket
                                list and give wings to your dreamy wish. When
                                most shoppers think of buying a motorcycle
                                online they think of places like Ebay or
                                Craigslist as places to shop online for a
                                motorcycle. These sites along with others all
                                will allow you to buy a motorcycle online. But
                                wait, There are other places to buy a motorcycle
                                online. We happen to be one of those places
                                where you can buy a motorcycle online at a cheap
                                price. We offer new motorcycles for sale from
                                Yamaha, Kawasaki, Spyder or Slingshot. We offer
                                used motorcycles for sale online from all of the
                                major motorcycle manufacturers. While it's a
                                little unlikely that you will find a new
                                motorcycle for sale on the other sites, you can
                                find used motorcycles for sale there.
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mt: 5 }}
                            >
                                Website Features
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                · Motorcycle retail seller and maintenance
                                provider website. <br />· Includes Order &
                                Product management, Reviews, and other essential
                                things. <br />· Admin panel is implemented with
                                Firebase Admin & JSON Web Token. <br />·
                                Technologies: React, MUI, Firebase Admin &
                                Authentication, Node.JS, MongoDB, Express.JS,
                                JWT.
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Box>
        </Box>
    );
};

export default Motobet;
