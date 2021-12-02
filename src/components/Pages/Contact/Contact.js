import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { Button, TextField, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import emailKey from "../../emailkey.js/emailkey";

const ContactUs = () => {
    const { Service_Id, Template_Id, User_Id } = emailKey;

    const theme = useTheme();
    const useStyle = makeStyles({
        formWidth: {
            [theme.breakpoints.up("sm")]: {
                width: "60%"
            },
            [theme.breakpoints.down("sm")]: {
                width: "90%"
            }
        }
    });

    const { formWidth } = useStyle();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                `${Service_Id}`,
                `${Template_Id}`,
                form.current,
                `${User_Id}`
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <Box sx={{ py: { xs: 5, sm: 10, md: 15, lg: 20 } }}>
            <Box
                sx={{
                    py: { xs: 5, sm: 5, md: 5, lg: 5 },
                    width: "80%",
                    mx: "auto",
                    borderRadius: 10
                }}
            >
                <Typography variant="h3" sx={{ mb: 3 }}>
                    Contact Me
                </Typography>
                <form
                    ref={form}
                    onSubmit={sendEmail}
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}
                >
                    <TextField
                        name="name"
                        type="text"
                        required
                        id="filled-basic"
                        label="Your Name"
                        variant="filled"
                        className={formWidth}
                    />
                    <TextField
                        name="email"
                        type="email"
                        required
                        id="filled-basic"
                        label="Your Email"
                        variant="filled"
                        className={formWidth}
                    />
                    <TextField
                        name="phone"
                        type="text"
                        id="filled-basic"
                        label="Your Phone Number (Optional)"
                        variant="filled"
                        className={formWidth}
                    />

                    <TextField
                        name="message"
                        type="text"
                        required
                        id="filled-textarea"
                        label="Your Message"
                        multiline
                        variant="filled"
                        rows={4}
                        className={formWidth}
                    />
                    <Button
                        sx={{ mt: 3 }}
                        onClick={sendEmail}
                        variant="contained"
                        color="info"
                    >
                        Send Email
                    </Button>
                </form>
            </Box>
        </Box>
    );
};

export default ContactUs;
