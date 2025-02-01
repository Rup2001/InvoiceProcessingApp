import axios from 'axios';  // axios function is a asychronous function

const API_URL = 'http://localhost:8080';

export const saveInvoice = async(payload) => {
    try {//axios function is a asychronous function for this we need to write await...
        return await axios.post(`${API_URL}/invoice`, payload);
    }catch(error){
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const getAllInvoices = async () => {
    try {
        return await axios.get(`${API_URL}/invoice`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}

export const deleteInvoice = async (id) => {
    try {
        return await axios.delete(`${API_URL}/invoice/${id}`);
    } catch (error) {
        console.log('Error: ', error.message);
        return error.response.data;
    }
}