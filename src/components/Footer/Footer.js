import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { makeStyles } from "@mui/styles";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const footer = {
    marginTop: "4em",
    borderRadius: "10px 10px 0 0"
};

const Footer = () => {
    const facebook = <FontAwesomeIcon icon={faFacebookSquare} />;
    const github = <FontAwesomeIcon icon={faGithubSquare} />;
    const twitter = <FontAwesomeIcon icon={faTwitterSquare} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedin} />;

    const useStyle = makeStyles({
        socialIcon: {
            paddingRight: "15px"
        },
        socialLink: {
            color: "white",
            textDecoration: "none"
        },
        socialLinkText: {
            textDecoration: "none"
        }
    });

    const { socialIcon, socialLink, socialLinkText } = useStyle();

    return (
        <Box className="footer" sx={footer}>
            <Grid className="grid-container" sx={{ color: "white", pb: 5 }}>
                <Grid container sx={{ py: 5, width: "80%", mx: "auto" }}>
                    <Grid item xs={12} md={6}>
                        <Box>
                            <Typography
                                variant="h5"
                                sx={{
                                    mb: 3,
                                    borderBottom: 2,
                                    width: "50%",
                                    mx: "auto",
                                    paddingBottom: 1
                                }}
                            >
                                About Me
                            </Typography>
                            <Typography>
                                Along with Web Development, I gained expertise
                                in some other skills that help me to get
                                advantages in the related zones. I worked with
                                Robotics and Automation and made some commercial
                                projects that built a strong foundation on
                                Electronic Devices and components,
                                Micro-Controller and Hardware programming, Home
                                Automation, Project Troubleshooting, and other
                                related tasks. Besides that, I am very efficient
                                in PhotoShop, Microsoft Office, SolidWorks 3D,
                                Amateur photography, Online-Support, and higher
                                computer proficiency.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        md={6}
                        sx={{ mt: { xs: 5, sm: 5, md: 0, lg: 0, xl: 0 } }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                mb: 3,
                                borderBottom: 2,
                                width: "50%",
                                mx: "auto",
                                paddingBottom: 1
                            }}
                        >
                            Find Me
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center"
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column"
                                }}
                            >
                                <a
                                    href="https://github.com/kawsar130"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={socialLinkText}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Typography
                                            className={socialIcon}
                                            variant="h5"
                                            sx={{ color: "white" }}
                                        >
                                            {github}
                                        </Typography>
                                        <Typography className={socialLink}>
                                            GitHub
                                        </Typography>
                                    </Box>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/kawsar130/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={socialLinkText}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Typography
                                            className={socialIcon}
                                            variant="h5"
                                            sx={{ color: "white" }}
                                        >
                                            {linkedin}
                                        </Typography>
                                        <Typography className={socialLink}>
                                            LinkedIn
                                        </Typography>
                                    </Box>
                                </a>
                                <a
                                    href="https://twitter.com/kawsar130"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={socialLinkText}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Typography
                                            className={socialIcon}
                                            variant="h5"
                                            sx={{ color: "white" }}
                                        >
                                            {twitter}
                                        </Typography>
                                        <Typography className={socialLink}>
                                            Twitter
                                        </Typography>
                                    </Box>
                                </a>
                                <a
                                    href="https://web.facebook.com/kawsar130"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={socialLinkText}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Typography
                                            className={socialIcon}
                                            variant="h5"
                                            sx={{
                                                color: "white"
                                            }}
                                        >
                                            {facebook}
                                        </Typography>
                                        <Typography className={socialLink}>
                                            Facebook
                                        </Typography>
                                    </Box>
                                </a>
                            </Box>
                        </Box>
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
                    <Typography>Need Consultancy? Call Me!</Typography>
                    <Typography>+88 01722-499529</Typography>
                </Box>
            </Grid>
        </Box>
    );
};

export default Footer;
