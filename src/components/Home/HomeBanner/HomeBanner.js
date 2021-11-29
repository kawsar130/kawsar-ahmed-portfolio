import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Typical from "react-typical";

import "./HomeBanner.css";

const HomeBanner = () => {
    return (
        <Box className="banner-header">
            <Box className="banner-header-text">
                <Typography variant="h5">Greetings from</Typography>
                <Typography variant="h2" fontWeight="bold">
                    KAWSAR <span style={{ color: "#00A3E1" }}>AHMED</span>
                </Typography>
                <Typography variant="h5">
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
            </Box>
        </Box>
    );
};

export default HomeBanner;
