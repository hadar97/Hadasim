import { withRouter } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import React from 'react';
import axios from "axios";
import Chart from 'chart.js'
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';
import { getAllCovidDetailsFromServer } from "../Services/CovidDetailsThunk";
import { getAllWorkersFromServer } from "../Services/WorkersThunk";
export default  withRouter( function PaticenInDay(props) {

let AllCovidDetailsTemp
const [AllCovidDetails, setCovidDetails] = useState([{}]);
const dispatch= useDispatch();



    useEffect(async () => {
        debugger
        const WorkersPromise = axios.get("https://localhost:44359/api/CovidDetails/GetCountDay");
        const response = await WorkersPromise;
        const workers = response.data;
       
 debugger


var ctxB = document.getElementById("barChart").getContext('2d');
debugger
var myBarChart = new Chart(ctxB, {
  type: 'bar',
  data: {
    labels: ["0","1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11", "12",
    "13", "14", "15", "16", "17", "18","19", "20", "21", "22", "23", "24","25", "26", "27"
    , "28", "29", "30","31"],
    datasets: [{
      label: 'כמות החולים החודש לפי יום',
      data: workers,
      backgroundColor: [
        'red',
        'red',
        'red',
        'red',
        'red',
        'red'
      ],
      borderColor: [
        'black',
        'black',
        'black',
        'black',
        'black',
        'black'
      ],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtzero: true
        }
      }]
    }
  }
});

}, [])
const [index,setindex]=useState(0)
const [Mycount,setCount]=useState()
const countOfNotV=async()=>{
 setindex(1)
  debugger
   var temp = axios.get("https://localhost:44359/api/CovidDetails/GetCountVaccine")
    const response = await temp;
   const count = response.data;
setCount(count)
}
return(
<>
<body style={{backgroundImage:'none',opacity:'100%'}}>
<div style={{backgroundImage:'none'}}><canvas  style={{color:'white'}}id="barChart"> </canvas> </div>
<button  class="btn btn-outline-danger" onClick={()=>countOfNotV()}>לצפייה בכמות חברים שאינם מחוסנים</button>
{index==1?<>
<p>כמות העובדים שאינם מחוסנים:</p>

<p>{Mycount}</p></>:<></>}
</body>
</> );
          
        
        


}, [])
