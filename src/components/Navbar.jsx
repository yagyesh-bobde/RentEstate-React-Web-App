import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Avatar } from '@mui/material';
import logo from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';




const Navbar = () => {
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = (page) => {
        navigate(`/rent`)
        setAnchorElNav(null);
    };


    return (
        <AppBar position="static" className='nav-color'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Avatar  onClick={()=> navigate('/')} src={logo} sx={{ cursor: 'pointer' ,display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                         
                        onClick={() => navigate('/')} 
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        RentEstate
                    </Typography>
                    

                    <Avatar src={logo} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                         
                        onClick={() => navigate('/')} 
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        RentEstate
                    </Typography>

                    
                    
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
