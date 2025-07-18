import axios from '../axios';


export const getCountries = async ()=>{
    try {

        const response = await axios.get(`/all?fields=name,region,flag`);
    
        return response.data;
        
    } catch (error) {
      
        throw error;
    }
}