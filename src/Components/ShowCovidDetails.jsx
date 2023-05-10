import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';
import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { withRouter } from 'react-router-dom';
import { getAllWorkersFromServer } from '../Services/WorkersThunk';
import { getAllCovidDetailsFromServer } from '../Services/CovidDetailsThunk';

export default withRouter(function ShowCovidDetails(props) {

    let AllCovidDetailsTemp
    const [AllCovidDetails, setCovidDetails] = useState([{}]);
const dispatch= useDispatch();





    useEffect(async () => {
        debugger
        AllCovidDetailsTemp = await getAllCovidDetailsFromServer(dispatch);
        setCovidDetails(AllCovidDetailsTemp)
    }, [])


    const AddNewCovidDetails = async () => {
        props.history.push(`/AddCovidDetails`)
    }

    return (<>  
        <table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
<tr>
          <th>תעודת זהות חבר</th>
          <th>  תאריך החלמה</th>
          <th>  תאריך קבלת תשובה חיובית</th>
          <th>  יצרן חיסון</th>
          <th>  תאריך קבלת חיסון</th>
            </tr></thead>
         
        {AllCovidDetails.map((f) =>   
         <tr >
            <div class="ms-3">
          <th class="fw-bold mb-1">{f.workerId==null?<p>-----</p>:f.workerId}</th> </div>
          <th class="fw-bold mb-1">{f.dateOfRecovery==null?<p>-----</p>:new Date(f.dateOfRecovery).toLocaleDateString()}</th>
          <th class="fw-bold mb-1">{f.dateOfPositiveStart==null?<p>-----</p>:new Date(f.dateOfPositiveStart).toLocaleDateString()}</th>
          <th class="fw-bold mb-1">{f.producerOfVaccine==null?<p>-----</p>:f.producerOfVaccine}</th>
          <th class="fw-bold mb-1">{f.dateOfSingleVaccine==null?<p>-----</p>:new Date(f.dateOfSingleVaccine).toLocaleDateString()}</th>
         
        </tr>
)}
      </table>
      
      
        <button class="btn btn-outline-danger" style={{ float: 'right' }} onClick={()=>AddNewCovidDetails()}>הוספת פרטי קורונה  </button>

  
    </>



    )
}, [])













