import { Box } from "@mui/system";
import React from "react";
import Contact from "../Contact/Contact";

const ContactTab = () => {
    return (
        <Box className="banner-header">
            <Box
                sx={{
                    p: { xs: 0, sm: 3, md: 6 },
                    display: "flex",
                    justifyContent: "center"
                }}
            >
                <Box
                    sx={{
                        bgcolor: "white",
                        mt: 10,
                        borderRadius: 4,
                        width: {
                            xl: "80%",
                            lg: "90%",
                            md: "100%",
                            sm: "100%",
                            xs: "100%"
                        },
                        mx: "auto"
                    }}
                >
                    <Contact></Contact>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactTab;
