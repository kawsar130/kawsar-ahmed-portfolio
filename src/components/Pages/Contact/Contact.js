import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Alert, Button, TextField, Typography, useTheme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import emailKey from "../../emailkey.js/emailkey";

const Contact = () => {
    const { Service_Id, Template_Id, User_Id } = emailKey;
    const [contactState, setContactState] = useState(false);

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
        setContactState(true);
    };

    return (
        <Box sx={{ py: { xs: 5, sm: 5, md: 5, lg: 10 } }}>
            <Box
                sx={{
                    py: { xs: 5, sm: 5, md: 5, lg: 5 },
                    width: "80%",
                    mx: "auto",
                    borderRadius: 10
                }}
            >
                <Typography variant="h3" sx={{ fontWeight: "bold", mb: 4 }}>
                    Contact Me
                </Typography>
                {!contactState ? (
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
                ) : (
                    <Alert
                        severity="info"
                        sx={{ textAlign: "center", width: "50%", mx: "auto" }}
                    >
                        Message Sent Successfully. I Will Response to you soon.
                        Good Day!
                    </Alert>
                )}
            </Box>
        </Box>
    );
};

export default Contact;
