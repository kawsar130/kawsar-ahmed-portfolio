import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const url = "https://i.ibb.co/z4Rhfq9/footer-cropped.jpg";

const footer = {
    background: `url(${url})`,
    backgroundColor: "rgba(0, 0, 0, 0.80)",
    backgroundBlendMode: "darken, luminosity",
    marginTop: "4em"
};

const Footer = () => {
    return (
        <Box className="footer" sx={footer}>
            <Grid className="grid-container" sx={{ color: "white", pb: 5 }}>
                <Grid
                    container
                    spacing={2}
                    sx={{ p: 5, width: "80%", mx: "auto" }}
                >
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography variant="h5" sx={{ mb: 3 }}>
                                About Me
                            </Typography>
                            <Typography>
                                Along with Web Development, I am very good at
                                some other extra curriculum activities. From
                                2018- 2021, I worked with Robotics and
                                Automation where I built a strong foundation on
                                Electronic Devices and components,
                                Micro-Controller and Hardware programming, Home
                                Automation, Project Troubleshooting, and other
                                related tasks.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            Find Me
                        </Typography>
                        <a
                            href="https://github.com/kawsar130/"
                            style={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography>GitHub</Typography>
                        </a>
                        <a
                            href="https://twitter.com/kawsar130"
                            style={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography>Twitter</Typography>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/kawsar130/"
                            style={{ textDecoration: "none", color: "white" }}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Typography>LinkedIn</Typography>
                        </a>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        mt: 3,
                        py: 1,
                        border: 2,
                        borderRadius: 3,
                        width: "80%",
                        mx: "auto"
                    }}
                >
                    <Typography>Need Consultancy? Call Me.</Typography>
                    <Typography>01722-499529</Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default Footer;
