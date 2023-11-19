import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import img1 from './Crmlogo.png';
import LoginIcon from '@mui/icons-material/AccountCircle';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();
  const location = useLocation();

  // Check if the current route is an authentication page
  const isAuthPage = ['/', '/register'].includes(location.pathname);
  if (isAuthPage) {
    return null;
  }

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#000' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src={img1} alt="logo" width={150} height={45} style={{ marginRight: '20px' }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                component={Link}
                to="/home"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'yellow',
                  },
                }}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/About"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'yellow',
                  },
                }}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/Contact"
                sx={{
                  fontSize: 18,
                  marginLeft: 5,
                  my: 2,
                  color: 'white',
                  display: 'block',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    color: 'yellow',
                  },
                }}
              >
                Contact
              </Button>
            </Box>

            {isAuthPage ? null : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0, '&:hover': { border: '2px dashed white' } }}
                  >
                    <LoginIcon style={{ fontSize: 45, color: 'grey' }} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
