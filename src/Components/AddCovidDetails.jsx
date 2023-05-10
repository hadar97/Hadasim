import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';

import { MDBBtn, MDBCheckbox, MDBInput } from 'mdb-react-ui-kit';
import { withRouter } from 'react-router-dom';
import axios from "axios";
import { AddCovidDetailsToserver, getCovidDetailsByWorker } from '../Services/CovidDetailsThunk';
import { getWorker } from '../Services/WorkersThunk';
export default withRouter(function AddCovidDetails(props) {


  const [worker,setWorker]=useState({})
  
  const [error, setError] = useState({});


    //314815897


    const SendData = async() => {
        debugger
       
       if(error.date=='תקין'){
        const myCovidDetails = {
   idCovidDetails: 0,
   dateOfSingleVaccine: document.getElementById("vaccina").value?document.getElementById("vaccina").value:null, 
   producerOfVaccine: document.getElementById("producer").value?document.getElementById("producer").value:null,
   dateOfPositiveStart:document.getElementById("posituve").value?document.getElementById("posituve").value:null,
   dateOfRecovery:document.getElementById("recovery").value?ocument.getElementById("recovery").value:null,
    workerId:  document.getElementById("ident").value?document.getElementById("ident").value:null,
  
        }
      
     var   v = await AddCovidDetailsToserver(myCovidDetails)
        console.log(v)
    if(v==false)
        alert("אין אפשרות להתחסן פעם חמישית")
        debugger
    if(v==true) 
    alert("המידע נוסף בהצלחה")}
    else alert("אחד מהתאריכים שגוי")
    }
    
    
    const CheckIfexist =async()=>{
        setWorker(await getWorker(document.getElementById("ident").value))
        if(worker.idWorker!=null){
            setError({...error,exist:"חבר קיים במערכת"})

        }
        else             setError({...error,exist:"חבר לא קיים במערכת"})

    }
 
    const ValidDate=(e)=>{
        var birthday=e.target.value
         if(!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
            setError({...error,date:"תאריך שגוי"})
            }
            let parts = birthday.split('-');
            let now = new Date();
            let year = parseInt(parts[0], 10);
            let currentYear = now.getFullYear();
            let currentMonth = now.getMonth();
            let currentDay = now.getDay();
            let month = ( parts[1][0] === '0') ? parseInt(parts[1][1], 10) : parseInt(parts[1], 10);
            let day = ( parts[2][0] === '0') ? parseInt(parts[2][1], 10) : parseInt(parts[2], 10);
        
            if(year >= currentYear) {
                setError({...error,date:"שנה שגוי"})
            }
            if(month < 1 || month > 12||(currentMonth<month&&currentYear<=year)) {
                setError({...error,date:"חודש שגוי"})
            }
            if( day < 1 || day > 31 ||(currentDay<day&&currentMonth<=month&&currentYear<=year)) {
                setError({...error,date:"יום שגוי"})
            }
        else    setError({...error,date:"תקין"})
        };
          
        
    return <>
       <form  style={{marginRight:'20%'}}onSubmit={(e)=>SendData(e)}>
       <div> <span>תאריך חיסון</span><div style={{height:'10px'}}></div><input  id="vaccina" type='date' onChange={(e)=>ValidDate(e)}/></div>
           <div style={{height:'20px'}}></div>
       <div><span>תאריך החלמה</span><div style={{height:'10px'}}></div><input  id="recovery" type='date' onChange={(e)=>ValidDate(e)}/> </div>
       <div style={{height:'20px'}}></div>
       <div><span>תאריך קבלת תשובה חיובית</span><div style={{height:'10px'}}></div><input  id="posituve" type='date' onChange={(e)=>ValidDate(e)}/> </div>
       <div style={{height:'20px'}}></div>
       <span>יצרן</span><div style={{height:'10px'}}></div>
     <input type='text' id="producer"/>
     <div style={{height:'20px'}}></div>
     <span>תז עובד</span><div style={{height:'10px'}}></div>
     <input type='text'  id="ident"onChange={(e)=>CheckIfexist(e)}/>
     <div style={{height:'20px'}}></div>
     {error.date}
     <button class="btn btn-outline-danger" type='submit'>הוסף פרטי קורונה</button>
     </form>
    </>
}, [])






