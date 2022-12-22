import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MCILogo from "../assets/images/MCI-logo.png";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material';
import myTheme from '../components/myTheme';
import '../styles/Navbar.css'

const css = `
  .MCI-logo {
    flex-grow:1;
  }
  `;



export default function Navbar({users}) {

  const navigate = useNavigate();
  useEffect(() => {
    if (users) {
      navigate("/offers");
    }
  }, [users,navigate]);


  return (
    <ThemeProvider theme={myTheme}>
     <style type="text/css">{css}</style>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static"
      color="secondary"
      elevation={4}
      >
        <Toolbar >
          <div className="MCI-logo">
          <img src={MCILogo} alt="logo" width="50" height="50" />
          </div>
          {users &&
            <>
              <Typography
                className='logged-in-user'
                color="info"
              >
                Welcome {users.name}
              </Typography>
              <AccountCircle 
                className='user-icon'
                color="primary"
              />
            </>
          }

        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}