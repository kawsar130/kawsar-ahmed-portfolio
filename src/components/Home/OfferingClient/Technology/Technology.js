import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Technology.css";

const Technology = ({ tech }) => {
    return (
        <Box
            className="technology"
            sx={{
                display: "flex",
                alignItems: "center",
                p: 2,
                m: 3
            }}
            style={{ boxShadow: "1px 1px 20px rgba(0, 0, 0, 0.1" }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center"
                }}
            >
                <img src={tech.img} style={{ width: "50px" }} alt="" />
            </Box>
            <Box sx={{ ml: 3 }}>
                <Typography variant="h5">{tech.name}</Typography>
            </Box>
        </Box>
    );
};

export default Technology;
