import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typical from "react-typical";
import bannerMainImg from "../../../images/profile_photo.jpg";

import "./HomeBanner.css";
import { makeStyles } from "@mui/styles";

const HomeBanner = () => {
    const useStyle = makeStyles({
        contactInfo: {
            display: "flex",
            alignItems: "center",
            padding: "8px 0 8px 0"
        },
        icon: {
            marginRight: "15px"
        }
    });

    const { contactInfo, icon } = useStyle();

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
                    sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        bgcolor: "white",
                        py: { xs: 4, sm: 4, md: 5, lg: 5 },
                        px: { xs: 2, sm: 4, md: 2, lg: 2 },
                        mt: 10,
                        borderRadius: 4,
                        width: { xl: "80%", lg: "90%", md: "100%" },
                        mx: "auto"
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{ px: { xs: 0, sm: 0, md: 2, lg: 5 } }}
                    >
                        <img
                            style={{ borderRadius: "10px", width: "100%" }}
                            src={bannerMainImg}
                            alt=""
                        />
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        sx={{
                            px: { xs: 0, sm: 0, md: 2, lg: 5 },
                            mt: { xs: 2, sm: 3, md: 0, lg: 0, xl: 0 }
                        }}
                    >
                        <Box className="banner-header-text">
                            <Typography variant="h5">Greetings from</Typography>
                            <Typography
                                fontWeight="bold"
                                sx={{
                                    textAlign: "left",
                                    fontSize: {
                                        xs: "2em",
                                        sm: "2.5em",
                                        md: "3em",
                                        lg: "3em",
                                        xl: "3.5em"
                                    }
                                }}
                            >
                                KAWSAR{" "}
                                <span style={{ color: "#00A3E1" }}>AHMED</span>
                            </Typography>
                            <Typography variant="h5" sx={{ textAlign: "left" }}>
                                I'm a{" "}
                                <Typical
                                    steps={[
                                        "Web Developer",
                                        1000,
                                        "Frontend Developer",
                                        1000
                                    ]}
                                    loop={Infinity}
                                    wrapper="b"
                                />
                            </Typography>
                            <Typography
                                sx={{
                                    fontWeight: "bold",
                                    color: "black",
                                    mt: 3,
                                    textAlign: "left"
                                }}
                            >
                                Junior Frontend Developer
                            </Typography>
                            <Typography sx={{ mt: 1, textAlign: "left" }}>
                                Frontend React Web Developer especially working
                                on MERN Stack Development. I am passionate to
                                learn and work with new technologies that
                                encourage me to go further with my dreams.
                            </Typography>
                            <Box
                                sx={{
                                    pt: { xs: 0, sm: 0, md: 1, lg: 1, xl: 3 },
                                    color: "gray"
                                }}
                            >
                                <Box className={contactInfo}>
                                    <img
                                        className={icon}
                                        src="https://i.ibb.co/gZQGsWF/calendar.png"
                                        alt=""
                                        width="20px"
                                    />
                                    <Typography>31 December, 1997</Typography>
                                </Box>
                                <Box className={contactInfo}>
                                    <img
                                        className={icon}
                                        src="https://i.ibb.co/Kr7TpFn/email.png"
                                        alt=""
                                        width="20px"
                                    />
                                    <Typography>
                                        kawsarahmed130@gmail.com
                                    </Typography>
                                </Box>
                                <Box className={contactInfo}>
                                    <img
                                        className={icon}
                                        src="https://i.ibb.co/r4rnqFP/phone.png"
                                        alt=""
                                        width="20px"
                                    />
                                    <Typography>+88 01722-499529</Typography>
                                </Box>
                                <Box className={contactInfo}>
                                    <img
                                        className={icon}
                                        src="https://i.ibb.co/bH0KYLH/home.png"
                                        alt=""
                                        width="20px"
                                    />
                                    <Typography>Dhaka, Bangladesh</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomeBanner;
