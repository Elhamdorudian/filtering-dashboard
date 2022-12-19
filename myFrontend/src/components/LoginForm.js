import TextField from '@mui/material/textField';
import axios from 'axios';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { blue, orange } from '@mui/material/colors';
import '../styles/LoginForm.css'
import { useState } from 'react';
import { Card, CardContent, Button, Alert, AlertTitle } from '@mui/material';


// const theme = createTheme({
//     palette : {
//         secondary: {
//             main: blue[700]
//         },
//     },
// })



    // const handleSubmit = (e) => {

    //   e.preventDefault();
    //   setUserError(false)
    //   setPassError(false)
        
    //   if(username === ''){
    //     setUserError(true)
    //   }

    //   if(password === ''){
    //     setPassError(true)
    //   }
    //   if(username && password){
    //     console.log(username,password)
    //     setUsername('');
    //     setPassword('');
    //   }}; 

const LoginForm = ({users, setUsers}) => {


    const [username,setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userError, setUserError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [validUser, setValidUser] = useState(true);


    const handleSubmit = (e) => {

      e.preventDefault();
      // setUserError(false)
      // setPassError(false)
        
      if(username === ''){
        setUserError(true)
      }

      if(password === ''){
        setPassError(true)
      }
      if(username && password){
        // console.log(username,password);
        setUsers.username = username;
        setUsers.password = password;
        setUserError(false);
        setPassError(false);

        axios.post("http://localhost:8000/users", users)
        .then((res) => {

            console.log(users);
            if(res.data.length !== 0){
                setValidUser(true);
            }else{
              setValidUser(false);
            }

        })
        .catch(err => console.log(err))

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
                              type="password"
                              className="login-field"
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
                          color='secondary'
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

    )

}

export default LoginForm;