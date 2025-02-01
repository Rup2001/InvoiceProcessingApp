import { useState } from 'react'
import{Box, Typography,TextField,Button,styled} from '@mui/material'
import { saveInvoice } from '../services/api'

const Cmp = styled(Box)({
    marginTop: 20,
    '& > div > div':{
        marginRight:20,
        minWidth:200
    },
    '& > Button':{
        marginTop:20
    }
})

const defaultObj = {  //default values  of new added invoices...
    vendor:'',
    product:'',
    amount: 0,
    date:'',
    action:'pending'
}

const AddInvoice = ({setAddInvoice}) => {
    const[invoice,setInvoice] = useState(defaultObj); //Set in default state the newly added invoice...
    
    const onValueChange = (e) => {
        setInvoice({...invoice, [e.target.name]: e.target.value}); //here the values are fetched from the textfields differ by name using e.target.name....
    }

    const addNewInvoice = async () => {
        await saveInvoice({...invoice, amount: Number(invoice['amount'])});

        setAddInvoice(false);
    }
    
    return(
        <Cmp>
            <Typography variant='h3' marginBottom={10}>Add Invoice</Typography>
            <Box >
                <TextField
                    variant = "standard"
                    placeholder = "Enter vender name"
                    //onChange function will called when ever the text or value 
                    //changed in this textfield...
                    onChange={(e)=> onValueChange(e)} //Here in every textfield we call this same onChange Function
                    name='vendor' // name used to deferenciate the getting values from each textfields...
                    autoComplete='off'
                />
                <TextField
                    variant = "standard"
                    placeholder = "Enter Product Name"
                    onChange={(e)=> onValueChange(e)}
                    name='product'
                    autoComplete='off'
                />
                <TextField
                    variant = "standard"
                    placeholder = "Enter amount (in Rs.)"
                    type='number'
                    onChange={(e)=> onValueChange(e)}
                    name='amount'
                    autoComplete='off'
                />
                <TextField
                    variant = "standard"
                    placeholder = "Enter Date"
                    type='date'
                    onChange={(e)=> onValueChange(e)}
                    name='date'
                    autoComplete='off'
                />
                
            </Box>
            <Button 
                 variant = "contained"
                 onClick={() =>addNewInvoice()}
             >Add Invoice</Button>
        </Cmp>
    )
}

export default AddInvoice;