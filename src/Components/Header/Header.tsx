import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CssBaseline from '@mui/material/CssBaseline';
import MenuItem from '@mui/material/MenuItem';
import { styled, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../assets/triatechnetwork-high-resolution-logo-white-transparent.png';


const Root = styled('div')(({ theme }) => ({
    flexGrow: 1,
}));

const Logo = styled('img')({
    height: '40px', // Adjust as necessary
});


const MenuButton = styled(IconButton)(({ theme }) => ({
    marginRight: theme.spacing(2),
}));

const Title = styled(Typography)(({ theme }) => ({
    flexGrow: 1,
}));

const DrawerPaper = styled('div')(({ theme }) => ({
    width: 240,
}));

const Header: React.FC = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = ['Home', 'About', 'Services', 'Contact'];

    const drawer = (
        <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={handleDrawerToggle}
        >
            <DrawerPaper>
                <List>
                    {menuItems.map((text, index) => (
                        <ListItem button key={index}>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </DrawerPaper>
        </Drawer>
    );

    return (
        <Root>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <Title variant="h6">
                        <Logo src={logo} alt="Logo" />
                    </Title>
                    {isMobile ? (
                        <>
                            <MenuButton
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerToggle}
                            >
                                <MenuIcon />
                            </MenuButton>
                            {drawer}
                        </>
                    ) : (
                        menuItems.map((item) => (
                            <MenuItem key={item}>{item}</MenuItem>
                        ))
                    )}
                </Toolbar>
            </AppBar>
        </Root>
    );
};

export default Header;
