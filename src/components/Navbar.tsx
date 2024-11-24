import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Navbar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = ['Why Choose Us?', 'Our Spaces', 'Contact Us'];

  return (
    <>
      <AppBar position="static" color="secondary" sx={{ padding: '0 16px' }}>
        <Toolbar>
          <Typography variant="h6" color="primary" sx={{ flexGrow: 1 }}>
            BHIVE Workspace
          </Typography>
          {!isMobile ? (
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: theme.palette.text.primary, margin: '0 8px' }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton edge="end" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <List>
          {menuItems.map((item) => (
           <ListItem component="button" key={item} onClick={handleDrawerToggle}>
           <ListItemText primary={item} />
         </ListItem>
         
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;
