import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, Outlet } from "react-router-dom";

const drawerWidth = 200;

function Home(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Divider />
            <Box
                style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left"
                }}
                sx={{ pl: 8 }}
            >
                <Link
                    to="/home"
                    style={{ textDecoration: "none", color: "grey" }}
                >
                    <Button color="inherit">Home</Button>
                </Link>
                <Link
                    to="/about"
                    style={{ textDecoration: "none", color: "grey" }}
                >
                    <Button color="inherit">About</Button>
                </Link>
                <Link
                    to="/resume"
                    style={{ textDecoration: "none", color: "grey" }}
                >
                    <Button color="inherit">Resume</Button>
                </Link>
                <Link
                    to="/projects"
                    style={{ textDecoration: "none", color: "grey" }}
                >
                    <Button color="inherit">Projects</Button>
                </Link>
                <Link
                    to="/contact"
                    style={{ textDecoration: "none", color: "grey" }}
                >
                    <Button color="inherit">Contact</Button>
                </Link>
            </Box>
        </div>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    display: { sm: "none" },
                    bgcolor: "#2A2B30"
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            mr: 2,
                            display: { sm: "none" }
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Kawsar Ahmed
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: "none", sm: "block" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth
                        }
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    mt: { xs: 7, sm: 0 }
                }}
            >
                <Outlet></Outlet>
            </Box>
        </Box>
    );
}

Home.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func
};

export default Home;
