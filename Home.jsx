

import React,{ useState, useEffect } from "react";
import Header from '../components/Header';
import { Box, Typography, styled, Button } from '@mui/material';
import Invoices from '../components/Invoices';
import AddInvoice from "../components/AddInvoice";
import { getAllInvoices, deleteInvoice } from "../services/api";

const Cmp = styled(Box)`
    width: 80%;
    margin: 50px auto;
    & > h4 {
        margin-bottom: 20px;
    }
    & > thead {
        background-color: #000;
    }
    & > th {
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
    } 
    & > td {
        font-size: 16px;
    }
`

const defaultObj = {
    id: '',
    vendor: '',
    product: '',
    amount: '',
    date: ''
}

const Home = () => {

    const [invoices, setInvoices] = useState([]);
    const [addInvoice, setAddInvoice] = useState(false);
    useEffect(() => {
        const getData = async() => {
            const response = await getAllInvoices();
            response && response.data && setInvoices(response.data);
        }
        getData();
    }, [addInvoice]);

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoices = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoices);
    }

    const toggleInvoice =()=> {
        setAddInvoice(true);
    }

    return(
        // <div>
        // <Header />
        // <p>Pending Invoices</p>
        // </div>
        <React.Fragment>
        {/* React.Fragment is more faster than div... */}
            <Header />
            <Box fontStyle={{margin: 20}}> 
            {/* // Div is replaced by Box in material UI */}
                <Typography variant="h3">Pending Invoices</Typography> 
                {/* Typography is a p tag by default but we can set it on H1,H2,H3 etc... */}
                {!addInvoice && <Button variant="contained" 
                        style={{ marginTop: 15}}
                        onClick={()=>toggleInvoice()}
                >Add Invoice</Button>
                }
                { addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
                <Box>
                    <Invoices 
                        removeInvoice={removeInvoice}
                        invoices={invoices}
                    />
                </Box>
            </Box>
            
            
        </React.Fragment>
        
    )
    
}

export default Home;