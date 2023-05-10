
import axios from "axios";
import {dispatch } from "react-redux";

export const URLAllCovidDetails ="https://localhost:44359/api/CovidDetails/GetAllCovidDetails"
export const  URLCovidDetailsByWorker ="https://localhost:44359/api/CovidDetails/GetCovidDetailsByWorker/"
export const  URLAddCovidDetails ="https://localhost:44359/api/CovidDetails/AddCovidDetails"



export const getAllCovidDetailsFromServer = async (dispatch) => {
    debugger
   const WorkersPromise = axios.get(URLAllCovidDetails);
   const response = await WorkersPromise;
   const workers = response.data;
   return workers;
}

export const getCovidDetailsByWorker = async (idWorker) => {
    debugger
    const CovidDetailsPromise = axios.get(URLCovidDetailsByWorker+idWorker);
    const response = await CovidDetailsPromise;
    const CovidDetails = response.data;
    return CovidDetails;
}
   
export const AddCovidDetailsToserver= async (CovidDetails) => {
    debugger
       const CovidDetailsPromise = axios.post(URLAddCovidDetails ,CovidDetails);
       const response = await CovidDetailsPromise;
       const CovidDetail = response.data;
       return CovidDetail;
   }

 


