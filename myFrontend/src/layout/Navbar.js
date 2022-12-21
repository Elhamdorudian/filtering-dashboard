import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MCILogo from "../assets/images/MCI-logo.png";
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { cyan, orange } from '@mui/material/colors';




const css = `
  .MCI-logo {
    flex-grow:1;
  }
  `;


  const theme = createTheme({
    palette: {
      primary: {
        main: orange[200],
        dark: orange[800]
      },
      secondary: {
        main: cyan[400],
      },
    },
  })

  


export default function Navbar({users}) {

  const navigate = useNavigate();
  useEffect(() => {
    if (users) {
      navigate("/offers");
    }
  }, [users,navigate]);


  return (
    <ThemeProvider theme={theme}>
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
                color="primary"
              >
                Welcome {users.name}
              </Typography>
              <AccountCircle 
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