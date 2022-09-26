import React, {useState} from 'react';

import {AppBar, Grid, Toolbar, Typography, IconButton, Drawer, Box} from "@mui/material"
import {Link} from "react-router-dom";


let navlinks = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "95%",
}

type navProps  = {
    isLight: boolean,
    toggleMode : any
}
let navlinksSmall = {
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    "&:hover": {
        color: "#e2b402",
    },
}



let link = {
    borderRadius: 0,
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: "20px",
    display: {xs: 'none', sm: 'block',},
    "&:hover": {
        borderBottom: "1px solid white",
    },
}

const Nav = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                    <Box sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width:"100%",

                    }}
                    >
                        <Link to="/">
                            <Typography sx={link}>Home</Typography>
                        </Link>
                        <Link to="/contact">
                            <Typography sx={link}>contact</Typography>
                        </Link>
                        <Link to="/overons">
                            <Typography sx={link}>over ons</Typography>
                        </Link>
                    </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
