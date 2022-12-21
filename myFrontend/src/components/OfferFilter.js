import axios from 'axios';
import { useState } from 'react';
import { styled } from "@mui/material/styles";
import TextField from '@mui/material/textField';
import PlansTable from './PlansTable';
import { Card, CardContent, Autocomplete, Typography, Button } from '@mui/material';
import { cyan, orange } from '@mui/material/colors';
import '../styles/FormStyles.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';




const theme = createTheme({
        palette: {
          primary: {
            main: orange[200]},
          secondary: {
            main: cyan[600],
          },
        },
      })


const StyledAutocomplete = styled(Autocomplete)({
    "&.Mui-focused .MuiInputLabel-outlined": {
      color: "#00acc1"
      
    },
    "& .MuiAutocomplete-inputRoot": {
      color: "#222",
      "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#00acc1"
      }
    }
  });

const OfferFilter = () => {

    
    const category = ['Long Term', 'Short Term', 'Monthly'];
    const type = [ 'Prepaid', 'Postpaid' ];
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
          
            // useEffect(() => {
            //     axios.post("http://localhost:8000/packages", offerFilters)
            //     .then((res) => {
            //         setFilterPlans(res.data)
            //     })
            //     .catch(err => console.log(err))
            // }, []);

        axios.post("http://localhost:8000/packages", offerFilters)
            .then((res) => {
                setFilterPlans(res.data)
            })
            .catch(err => console.log(err))
    };


    return(
        <ThemeProvider theme={theme}>

        <div className="form-wrapper">
            <Card sx={{width: '88%'}} > 
                <CardContent className="form-card"  >
                    <Typography
                        variant='h5'
                        component='h2'
                        color="gray"
                        className="filter-header"
                        gutterBottom
                    >
                        Filter Offers
                    </Typography>
                    <form
                        onSubmit={handleFormSubmit}
                        className="offer-form"
                    >
                        <TextField
                            onChange={(e) => setOfferID(e.target.value)}
                            value={offerID}
                            name="offerID"
                            className="form-fields"
                            label="OfferID"
                            variant="outlined"
                            color="secondary"
                            fullWidth
                        />
                        <StyledAutocomplete
                            onChange={(e,value) => setSelectedType(value)} 
                            value={selectedType}
                            name="type"
                            // color="primary"
                            className='form-fields'
                            disablePortal
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={type}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Type" />}
                        />
                        <StyledAutocomplete
                            onChange={(e,value)=> setSelectedCategory(value)}
                            value={selectedCategory}
                            className='form-fields'
                            disablePortal
                            color="secondary"
                            name="category"
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={category}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Category" />}
                        />
                        <StyledAutocomplete
                            onChange={(e,value)=> setSelectedSubcategory(value)}
                            value={selectedSubcategory}
                            className='form-fields'
                            disablePortal
                            name="subcategory"
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={subCategory}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Sub categoty" />}
                        />
                        <StyledAutocomplete
                            onChange={(e,value)=> setSelectedService(value)}
                            value={selectedService}
                            className='form-fields'
                            disablePortal
                            name="service"
                            isOptionEqualToValue={(option, value) => option.id === value.id}
                            options={service}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Service" />}
                        />
                        <StyledAutocomplete
                            onChange={(e,value)=> setSelectedPayment(value)}
                            value={selectedPayment}
                            className='form-fields'
                            disablePortal
                            name="payment"
                            isOptionEqualToValue={(option, value) => option.id === value.id }
                            options={paymentMethod}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Payment Method" />}
                        />
                        <Button 
                        variant='contained' 
                        type='submit'
                        className='filter-submit'
                        >
                            Submit
                        </Button>
                    </form>
                    <PlansTable filteredPlans={filteredPlans} />
                </CardContent>
            </Card>
        </div>
        </ThemeProvider>
    )}


export default OfferFilter;