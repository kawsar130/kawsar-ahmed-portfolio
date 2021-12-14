import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Technology from "./Technology/Technology";

const technologies = [
    {
        name: "HTML",
        img: "https://i.ibb.co/jz1NTC1/html.png"
    },
    {
        name: "CSS",
        img: "https://i.ibb.co/Jt2hK3q/css.png"
    },
    {
        name: "JavaScript",
        img: "https://i.ibb.co/kG2hjY1/js.png"
    },
    {
        name: "Bootstrap",
        img: "https://i.ibb.co/VLgXrgP/bootstrap.png"
    },
    {
        name: "React",
        img: "https://i.ibb.co/MsjxLvx/react.png"
    },
    {
        name: "MongoDB",
        img: "https://i.ibb.co/LgDkzm5/mongodb.png"
    },
    {
        name: "NodeJS",
        img: "https://i.ibb.co/mDfSPv3/nodejs.png"
    },
    {
        name: "Express",
        img: "https://i.ibb.co/CHB4XhL/express.png"
    },
    {
        name: "Material UI",
        img: "https://i.ibb.co/kHxTypV/material-ui.png"
    }
];

const OfferingClient = () => {
    return (
        <Container sx={{ py: 10 }}>
            <Box>
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    SkillSet
                </Typography>
            </Box>
            <Container sx={{ mt: 5 }}>
                <Grid container spacing={2}>
                    {technologies.map((tech) => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Technology
                                key={tech.name}
                                tech={tech}
                            ></Technology>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default OfferingClient;
