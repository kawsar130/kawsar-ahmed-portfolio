import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

export default function Navigation() {
    const theme = useTheme();
    const useStyle = makeStyles({
        navItem: {
            color: "white",
            textDecoration: "none"
        },

        navIcon: {
            [theme.breakpoints.up("sm")]: {
                display: "none !important"
            }
        },
        navItemContainer: {
            [theme.breakpoints.down("sm")]: {
                display: "none !important"
            }
        },
        navLogo: {
            [theme.breakpoints.down("sm")]: {
                textAlign: "right"
            }
        },
        mobileNavItem: {
            textDecoration: "none",
            color: "grey"
        },
        appbarStyle: {
            backgroundColor: "red"
        }
    });

    const { navItem, navIcon, navItemContainer, navLogo, mobileNavItem } =
        useStyle();

    const [state, setState] = React.useState(false);

    return (
        <Box>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position="static"
                    sx={{
                        bgcolor: "transparent",
                        position: "absolute",
                        boxShadow: "none"
                    }}
                >
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            className={navLogo}
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: "none" } }}
                        >
                            Kawsar Ahmed
                        </Typography>

                        <Box className={navItemContainer}>
                            <Link className={navItem} to="/">
                                <Button color="inherit">Home</Button>
                            </Link>
                            <Link className={navItem} to="/contact">
                                <Button color="inherit">Contact Me</Button>
                            </Link>
                            <Link className={navItem} to="/blog">
                                <Button color="inherit">Blog</Button>
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>
                <React.Fragment>
                    <Drawer open={state} onClose={() => setState(false)}>
                        <Box
                            sx={{
                                width: 250
                            }}
                            role="presentation"
                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <Link className={mobileNavItem} to="/">
                                            Home
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link
                                            className={mobileNavItem}
                                            to="/contact"
                                        >
                                            Contact
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        <Link
                                            className={mobileNavItem}
                                            to="/blog"
                                        >
                                            Blog
                                        </Link>
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        </Box>
                    </Drawer>
                </React.Fragment>
            </div>
        </Box>
    );
}
