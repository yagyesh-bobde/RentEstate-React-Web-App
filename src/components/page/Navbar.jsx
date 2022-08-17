import React, { useState, useContext} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Avatar } from '@mui/material';
import logo from '../../assets/images/logo.png';
import { useLocation, useNavigate } from 'react-router-dom';
import Tab from '@mui/material/Tab';
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import Tabs from '@mui/material/Tabs';
import { RentContext } from '../../context/RentState';



const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [value, setValue] = useState(location.pathname);
    const { setproperties } = useContext(RentContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
        navigate(`${newValue}`)
        setproperties([])
    };
    return (
        <AppBar position="static" className='nav-color'>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ textAlign: 'center !important'}}>
                    <Avatar  onClick={()=> navigate('/')} src={logo} sx={{ cursor: 'pointer' ,display: { xs: 'flex', md: 'flex' }, mr: 1}} />
                    <Typography
                         
                        onClick={() => navigate('/')} 
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'flex' },
                            justifyContent: { xs: 'center', md: 'flex-start'},
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
            <Container >
                <Box sx={{ width: '100%' , display: 'flex', justifyContent: 'space-around'}}>
                    <Tabs className='tabs' value={value} onChange={handleChange} aria-label="nav tabs example">
                        <Tab className="link_tab" value={'/'} icon={<HomeTwoToneIcon />} iconPosition="start" label="Rent" />
                        <Tab className="link_tab" value={'/buy'} icon={<ShoppingCartTwoToneIcon />} iconPosition="start" label="Buy" />
                        <Tab className="link_tab" value={'/about'} icon={<InfoTwoToneIcon />} iconPosition="start" label="About" />
                    </Tabs>                    
                </Box>
            </Container>
        </AppBar>
    );
};
export default Navbar;
