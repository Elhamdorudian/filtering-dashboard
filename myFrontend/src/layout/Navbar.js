import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';
import MCILogo from "../assets/images/MCI-logo.png";
import { Typography } from '@mui/material';

const css = `
  .MCI-logo {
    flex-grow:1;
  }
  `;


const theme = createTheme({
    palette : {
        primary: {
            main : indigo[900]
        }
    },
})

  


export default function Navbar({users}) {

  const handleLogin = () => {

    console.log('try to login');  

  };

  return (
    <ThemeProvider theme={theme}>
     <style type="text/css">{css}</style>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar 
      position="static"
      color="secondary"
      className='aa'
      elevation={4}
      >
        <Toolbar >
          <div className="MCI-logo">
          <img src={MCILogo} alt="logo" width="50" height="50" />
          </div>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Typography variant="h6" component="div"  sx={{ flexGrow: 1 }} className="btn">
            News
          </Typography> */}
          <IconButton 
            onClick={handleLogin}
          // disableFocusRipple
          // disableRipple
          // sx={{"&:hover": {backgroundColor: "transparent", }}}
          size="small"
          color="inherit"
     
          >
            <Typography>
            {users.name}
            </Typography>
            <LoginIcon className="aa" />

            </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}