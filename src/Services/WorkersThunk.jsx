
import axios from "axios";
import {dispatch } from "react-redux";
import {loadAllWorkers } from "./WorkerAction";

export const URLAllWorkers ="https://localhost:44359/api/Workers/GetAllWorkers"
export const  URLWorker ="https://localhost:44359/api/Workers/GetWorker/"
export const  URLAddWorker ="https://localhost:44359/api/Workers/AddWorker/"



export const getAllWorkersFromServer = async (dispatch) => {
    debugger
    const WorkersPromise = axios.get("https://localhost:44359/api/Workers/GetAllWorkers");
    const response = await WorkersPromise;
    const workers = response.data;
    dispatch(loadAllWorkers(workers))
    return workers;
}

export const getWorker = async (idWorker) => {
    debugger
    const WorkerPromise = axios.get(URLWorker+idWorker);
    const response = await WorkerPromise;
    const Worker = response.data;
    return Worker;
}
   
export const AddNewWorkerToserver= async (MyWorker) => {
    debugger
       const WorkerPromise = axios.post(URLAddWorker ,MyWorker);
       const response = await WorkerPromise;
       const worker = response.data;
       return worker;
   }

 


