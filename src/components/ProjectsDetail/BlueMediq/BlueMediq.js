import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BlueMediq = () => {
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
                        mt: 15,
                        borderRadius: 4,
                        width: { xl: "80%", lg: "90%", md: "100%" }
                    }}
                >
                    <Typography variant="h3" sx={{ mb: 10 }}>
                        BlueMediQ Screenshot
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
                                    src="https://i.ibb.co/c1p6YkK/bluemediq-1.png"
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
                                    src="https://i.ibb.co/HVBccmK/bluemediq-2.png"
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
                                    src="https://i.ibb.co/V3XXg0R/bluemediq-3.png"
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
                                href="https://bluemediq.web.app/"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Live Demo
                                </Button>
                            </a>
                            <a
                                href="https://github.com/kawsar130/BlueMediQ"
                                style={{ textDecoration: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button sx={{ mx: 1 }} variant="contained">
                                    Client-Side
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
                                BlueMediQ
                            </Typography>
                            <Typography variant="h5">
                                Medical Healthcare Solution
                            </Typography>

                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                BlueMediq is one of the largest Medical
                                Equipment Supplier company in Bangladesh. We are
                                passionate to work with humans health that will
                                make the live easier and trouble-free. We are
                                dedicated to assure you the best services in
                                medical equipment supplying, servicing, and
                                repairing. Empathy inspires our technologies
                                that smartly adapt to a patient’s lifestyle and
                                don’t get in the way of the things they love to
                                do.We’re working to create adaptive technologies
                                to alleviate patients’ concerns and put control
                                in their hands. There is no greater measure of
                                our efforts than the outcomes we enable.For
                                everyone we serve.From better clinical and
                                economic outcomes to societal ones.It motivates
                                us to introduce technologies to underserved
                                regions, dismantle barriers to equity in our
                                communities, and deeply understand the patients
                                and health systems we serve.
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", mt: 5 }}
                            >
                                Website Features
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                · Medical Equipment and Services provider
                                website. <br />· Responsive website designed
                                with Bootstrap. <br />· Implemented React-Router
                                for optimizing website performance. <br />·
                                Technologies: React, Bootstrap, Firebase
                                Authentication, Node.JS, React-Router.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default BlueMediq;
