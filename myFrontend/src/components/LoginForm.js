import TextField from '@mui/material/textField';
import axios from 'axios';
import '../styles/FormStyles.css'
import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, Button, Alert, AlertTitle } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { cyan, orange } from '@mui/material/colors';



const theme = createTheme({
  palette: {
    primary: {
      main: orange[200]},
    secondary: {
      main: cyan[600],
    },
  },
})


const LoginForm = ({handleValidUser}) => {


    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [validUser, setValidUser] = useState(true);

    let users = {};
    const usersRef = useRef();
    usersRef.current = users;
    const [submitted, setSubmitted] = useState(false);

    // const getUser = {
    //   username,
    //   password
    // };

    // const getUser = useMemo(() => {
    //   return {
    //     username,
    //     password
    //   };
    // }, [username,password]); 

    const handleSubmit = (e) => {
      e.preventDefault();

      console.log(submitted)

      if(username === ''){
        setUserError(true)
      }
    
      if(password === ''){
        setPassError(true)
      }

      if (username && password) {


        setUserError(false);
        setPassError(false);
        setSubmitted(true);

      }
      
    };



    useEffect(() => {
      console.log("in the useEffect")
      if (submitted) {
        const getUser = {
          username,
          password
        }


          axios.post("http://localhost:8000/users", getUser)
            .then((res) => {
              console.log(res.data[0]);
        
              if (res.data.length !== 0) {
                setValidUser(true);

                handleValidUser(res.data[0]);
              } else {
                setValidUser(false);
              }
              setSubmitted(false);
            })
            .catch(err => console.log(err))
        
      }
    }, [submitted, handleValidUser,username,password]);



    return(
              <ThemeProvider theme={theme}>
                {console.log(usersRef.current)}
                <div className="form-wrapper">
                    <Card>
                        <CardContent className='form-card'>
                          <form 
                            noValidate 
                            autoComplete='off'
                            className='login-form' 
                            onSubmit = {handleSubmit}
                          >
                          <TextField
                              onChange={(e) => setUsername(e.target.value)}
                              value={username}
                              className="form-fields"
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
                              type="password"
                              className="form-fields"
                              variant="outlined"
                              color="secondary"
                              placeholder='password'
                              fullWidth
                              error={passError}
                              required
                          />
                          <Button
                          variant='contained'
                          fullWidth
                          color='primary'
                          type='submit'
                          >
                              Login
                          </Button>
                          <Alert severity="error" className={!validUser ? null : "hide-error"}>
                            <AlertTitle >Error</AlertTitle>
                            <strong>username or password is incorrect!</strong>
                          </Alert>
                       </form>
                </CardContent>
                </Card>
                </div>
              </ThemeProvider>
    )
}

export default LoginForm;