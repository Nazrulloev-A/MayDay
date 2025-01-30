// src/components/Navbar.js
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Moon icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Sun icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Apply dark mode styles to the body or root element
    document.body.style.backgroundColor = darkMode ? '#ffffff' : '#121212';
    document.body.style.color = darkMode ? '#000000' : '#ffffff';
  };

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // You can replace this with your search logic
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: darkMode ? '#121212' : '#6200ea' }}>
      <Toolbar sx={{ paddingLeft: '16px', paddingRight: '16px' }}>
        {/* Logo on the left */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MayDay
        </Typography>

        {/* Buttons in the middle */}
        <Button color="inherit" component={Link} to="/" startIcon={<HomeIcon />}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about" startIcon={<InfoIcon />}>
          About
        </Button>
        <Button color="inherit" component={Link} to="/services" startIcon={<WorkIcon />}>
          Services
        </Button>
        <Button color="inherit" component={Link} to="/contact" startIcon={<ContactMailIcon />}>
          Contact
        </Button>

        {/* Dark mode toggle (sun/moon icons without round shape) */}
        <IconButton
          color="inherit"
          onClick={handleDarkModeToggle}
          sx={{ marginLeft: '16px', marginRight: '16px' }} // Add spacing
        >
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>

        {/* Search bar at the end of the navbar */}
        <form onSubmit={handleSearchSubmit}>
          <TextField
            size="small"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{
              backgroundColor: darkMode ? '#333' : '#fff',
              borderRadius: 1,
              '& .MuiOutlinedInput-root': {
                '& fieldset': {
                  borderColor: darkMode ? '#fff' : '#ccc', // Adjust border color for dark mode
                },
                '&:hover fieldset': {
                  borderColor: darkMode ? '#fff' : '#ccc', // Adjust hover border color
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: darkMode ? '#fff' : '#000' }} />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;