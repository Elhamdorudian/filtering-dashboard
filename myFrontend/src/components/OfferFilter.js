import axios from 'axios';
import TextField from '@mui/material/textField';
import '../styles/OfferFilter.css';
import '../styles/LoginForm.css';
import PlansTable from './PlansTable';
import { useState } from 'react';
import { Card, CardContent, Autocomplete, Typography, Button } from '@mui/material';
import { blueGrey } from '@mui/material/colors';
// import Autocomplete from '@mui/material/Autocomplete';

const OfferFilter = () => {



    // const [username,setUsername] = useState('');
    // const [password, setPassword] = useState('');
    // const [userError, setUserError] = useState(false);
    // const [passError, setPassError] = useState(false);


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


    // Axios({
    //     method: "GET",
    //     url: "http://localhost:5000/",
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   }).then(res => {
    //     console.log(res.data.message);
    //   });


    const category = ['Long Term', 'Short Term', 'Monthly'];
    const type = [ 'Prepaid', 'Postpaid', 'Both' ];
    const subCategory = ['Alpha +', 'Anarestan', 'BPFO', 'On-net', 'Off-net'];
    const service =['Data', 'Voice', 'Combo'];
    const paymentMethod = ['Bill', 'Balance', 'Cash', 'Gift'];
    const [offerID, setOfferID] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedPayment, setSelectedPayment] = useState('');

    const offerFilters = {};
    const [filteredPlans, setFilterPlans] = useState([]);

    const handleFormSubmit = (e) => {

        e.preventDefault();


        if(offerID !== ""){
            offerFilters.offerID = offerID;
            setOfferID("")
        }
        if(selectedType !== ""){
            offerFilters.type= selectedType;
            setSelectedType("");
        }
        if(selectedCategory !== ""){
            offerFilters.category= selectedCategory;
            setSelectedCategory("")
        }
        if(selectedSubcategory !== ""){
            offerFilters.subcategory = selectedSubcategory;
            setSelectedSubcategory("")
        }
        if(selectedService !==""){
            offerFilters.service = selectedService;
            setSelectedService("")
        }
        if(selectedPayment !== ""){
            offerFilters.payment = selectedPayment;
            setSelectedPayment("")
        }

        axios.post("http://localhost:8000/packages", offerFilters)
            .then((res) => {
                console.log(res);
                setFilterPlans(res.data)
                console.log('filteredPlans:', res.data)

            })
            .catch(err => console.log(err))


        
    };




    return(
        <div className="login-wrapper">
            <Card sx={{width: '85%'}} >
                <CardContent >
                    <Typography
                        variant='h6'
                        component='h2'
                        color={blueGrey[500]}
                        gutterBottom
                    >
                        Filter Offers
                    </Typography>
                    <TextField
                        onChange={(e) => setOfferID(e.target.value)}
                        value={offerID}
                        name="offerID"
                        className="login-field"
                        label="OfferID"
                        variant="outlined"
                        color="secondary"
                        fullWidth
                    />
                    <Autocomplete
                        onChange={(e,value) => setSelectedType(value)} 
                        value={selectedType}
                        name="type"
                        className='login-field'
                        disablePortal
                        // id="type"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={type}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Type" />}
                    />
                    <Autocomplete
                        onChange={(e,value)=> setSelectedCategory(value)}
                        value={selectedCategory}
                        className='login-field'
                        disablePortal
                        name="category"
                        // id="category"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={category}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                    <Autocomplete
                        onChange={(e,value)=> setSelectedSubcategory(value)}
                        value={selectedSubcategory}
                        className='login-field'
                        disablePortal
                        // id="sub-category"
                        name="subcategory"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={subCategory}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Sub categoty" />}
                    />
                    <Autocomplete
                        onChange={(e,value)=> setSelectedService(value)}
                        value={selectedService}
                        className='login-field'
                        disablePortal
                        // id="service"
                        name="service"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={service}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Service" />}
                    />
                    <Autocomplete
                        onChange={(e,value)=> setSelectedPayment(value)}
                        value={selectedPayment}
                        className='login-field'
                        disablePortal
                        // id="payment-method"
                        name="payment"
                        isOptionEqualToValue={(option, value) => option.id === value.id}
                        options={paymentMethod}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Payment Method" />}
                    />
                    <Button 
                    onClick={handleFormSubmit}
                    variant='contained' 
                    type='submit'
                    className='login-field'
                    >
                        Submit
                    </Button>
                    <PlansTable filteredPlans={filteredPlans} />
                </CardContent>
            </Card>
        </div>
    )}
export default OfferFilter;