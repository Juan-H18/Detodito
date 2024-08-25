import { AppBar, Button, Drawer,IconButton,Toolbar,Typography} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";

import { NavLink } from "react-router-dom";

export default function Navbar({ navegationLinks }) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <AppBar position="fixed" sx={{ zIndex: 100 }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        size="large"
                        onClick={() => setOpen(true)}
                        edge="start"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{ flexGrow: 1 }}
                    >
                        <img
                            src="../images/logo.png"
                            alt="Logo"
                            style={{
                                height: '3em',
                                verticalAlign: 'middle',
                                marginLeft: '0.5em'
                            }}
                        />
                        Perro_Come_Perro_
                    </Typography>

                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        <Box sx={{background: 'black', borderRadius: '10px' }}>
                        {navegationLinks.map((item) => (
                            <Button
                                color="inherit"
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >
                                {item.title}
                            </Button>
                        ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                open={open}
                anchor="left"
                onClose={() => setOpen(false)}
            >
                <NavListDrawer
                    navegationLinks={navegationLinks}
                    component={NavLink}
                    setOpen={setOpen}
                />
            </Drawer>
        </>
    );
}