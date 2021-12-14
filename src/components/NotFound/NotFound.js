import { Box, Typography } from "@mui/material";
import React from "react";

const NotFound = () => {
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
                    <Typography variant="h4" sx={{ py: 5 }}>
                        Error 404! Page Not Found!
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NotFound;
