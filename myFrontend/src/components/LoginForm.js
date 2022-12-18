import TextField from '@mui/material/textField';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { blue, orange } from '@mui/material/colors';
import '../styles/LoginForm.css'
import { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';


// const theme = createTheme({
//     palette : {
//         secondary: {
//             main: blue[700]
//         },
//     },
// })

const LoginForm = () => {

    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);


    const handleSubmit = (e) => {

      e.preventDefault();
      setUserError(false)
      setPassError(false)
        
      if(username === ''){
        setUserError(true)
      }

      if(password === ''){
        setPassError(true)
      }
      if(username && password){
        console.log(username,password)
        setUsername('');
        setPassword('');
      }}; 

    return(

                <div className="login-wrapper">
                    <Card>
                        <CardContent>
                    <form 
                        noValidate 
                        autoComplete='off'
                        className='login-form' 
                        onSubmit={handleSubmit}
                          >

                            <Typography
                                variant='h6'
                                component="h2"
                                color="textSecondary"
                                gutterBottom
                            >
                                Enter your Username and Password
                            </Typography>
                        
                        <TextField
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            className="login-field"
                            label="Username"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            error={userError}
                            required
                            
                        />
                        <TextField
                        onChange={e => setPassword(e.target.value)}
                            value={password}
                            label="Password"
                            className="login-field"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                            error={passError}
                            required
                        />
                        <Button
                        variant='contained'
                        fullWidth
                        color='secondary'
                        type='submit'
                        >
                            Login
                        </Button>
                </form>
                </CardContent>
                </Card>
                </div>

    )

}

export default LoginForm;