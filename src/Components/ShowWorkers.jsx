import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';
import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { withRouter } from 'react-router-dom';
import { getAllWorkersFromServer } from '../Services/WorkersThunk';

export default withRouter(function ShowWorkers(props) {

    let AllWorkersTemp
    const [AllWorkers, setAllWorkers] = useState([{}]);
const dispatch= useDispatch();

var dt = new Date();



    useEffect(async () => {
        debugger
        AllWorkersTemp = await getAllWorkersFromServer(dispatch);
        setAllWorkers(AllWorkersTemp)
    }, [])


    const AddNewWorker = async () => {
        props.history.push(`/AddNewWorker`)
    }

    return (<> 
<div>
<table class="table align-middle mb-0 bg-white">
  <thead class="bg-light">
    <tr>
    <th>תעודת זהות</th>
          <th>  שם פרטי</th>
          <th>  שם משפחה</th>
          <th>  עיר מגורים</th>
          <th>  רחוב</th>
          <th>  מספר בית</th>
          <th>  תאריך לידה</th>
          <th>  טלפון</th>
          <th>  פלאפון</th>
    </tr>
  </thead>
  {AllWorkers.map((f) => 
          
          <tr >
            <div class="ms-3">
            <th class="fw-bold mb-1"><img style={{width:'50px',height:'50px',borderRadius:'5px'}}  src={`https://localhost:44359/Myimg//${f.imgPath}` } type="jpg/png"/></th>
           <th class="fw-bold mb-1">{f.idWorker}</th>
           </div>
           <th class="fw-bold mb-1">{f.firstName}</th>
           <th class="fw-bold mb-1">{f.lastName}</th>
           <th class="fw-bold mb-1">{f.city}</th>
           <th class="fw-bold mb-1">{f.street}</th>
           <th class="fw-bold mb-1">{f.homeNumber}</th>
           <th class="fw-bold mb-1">{new Date(f.birthDate).toLocaleDateString()}</th>
           <th class="fw-bold mb-1">{f.tellephon}</th>
           <th class="fw-bold mb-1">{f.cellphone}</th>
 
         </tr>
       )}  
</table>
<button class="btn btn-outline-danger" style={{ alignContent:'center',marginTop:'20px' }} onClick={()=>AddNewWorker()}>הוספת עובד חדש </button>
</div>
      
      

  
    </>



    )
}, [])













