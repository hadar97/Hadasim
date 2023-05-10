import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';
import React from 'react';
import { async } from 'q';
import { withRouter } from 'react-router-dom';
import { getWorker } from '../Services/WorkersThunk';
import { getCovidDetailsByWorker } from '../Services/CovidDetailsThunk';
import { MDBRow } from 'mdbreact';
import { MDBCol } from 'mdbreact';
import { MDBCard } from 'mdbreact';
import { MDBCardBody, MDBTypography, MDBCardText, MDBBtn, MDBCardImage, MDBIcon, } from 'mdbreact';

import { MDBContainer } from 'mdbreact';

export default withRouter(function ShowWorkerById(props) {

    const [flag, setflag] = useState(false);
    const [worker, setWorker] = useState({});
    const dispatch = useDispatch();
    const [covidDetails, setcovidDetails] = useState([{}]);

    useEffect(async () => {

    }, [])

    const AddCovidDetail = async () => {
        props.history.push(`/AddCovidDetails`)
    }
    const [index,setindex]  = useState(1)
    const GETworker = async () => {
        var id = document.getElementById("ident").value
       var t=await getWorker(id)
       setWorker(t)
        console.log(worker)
        if(t.idWorker==undefined)
   { alert("לא קיים חבר העונה לתז זה")}
        if(t.idWorker!="")
        setcovidDetails(await getCovidDetailsByWorker(id))
        setflag(true)
        console.log(covidDetails)

       myfunc()
    }
const myfunc=()=>{
    console.log(worker)
    if(worker=={})
   { alert("לא קיים חבר העונה לתז זה")}
    console.log(worker.FirstName)
}



    const showForWorkerData=()=>
{
    setindex(2)
}
    return (
   <>
           

            <div className="vh-100" style={{ backgroundColor: '#eeee' }}>
                <label>הכנס תז</label>
                <input  class="inputbox"id="ident" type='text' />
            <div style={{width:'50px'}}></div>
                <button  style={{marginRight:'100px',marginTop:'20px'}} class="btn btn-outline-danger" onClick={() => GETworker()}>לחץ להצגת פרטי חבר</button>
                {flag == true ?
                    <MDBContainer >
                        <MDBRow className="justify-content-center">
                            <MDBCol md="9" lg="7" xl="5" className="mt-5">
                                <MDBCard style={{ borderRadius: '15px', backgroundColor: '#ff5c5c' }}>
                                    <MDBCardBody className="p-4 text-black">
                                        <div>
                                            <MDBTypography tag='h6'>{worker.idWorker}</MDBTypography>
                                            <div className="d-flex align-items-center justify-content-between mb-3" >
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-center mb-4">
                                            <div className="flex-shrink-0">
                                                <MDBCardImage
                                                    style={{ width: '70px',height:'60px' }}
                                                    className="img-fluid rounded-circle border border-dark border-3"
                                                    src={`https://localhost:44359/Myimg/${worker.imgPath}`} 
                                                    alt=' image'
                                                    fluid />
                                            </div>
                                            <div className="flex-grow-1 ms-3">
                                                <div className="d-flex flex-row align-items-center mb-2">

                                                    <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                                                        <li>
                                                            <MDBIcon fas icon="star fa-xs" />
                                                        </li>
                                                        <li>
                                                            <MDBIcon fas icon="star fa-xs" />
                                                        </li>
                                                        <li>
                                                            <MDBIcon fas icon="star fa-xs" />
                                                        </li>
                                                        <li>
                                                            <MDBIcon fas icon="star fa-xs" />
                                                        </li>
                                                        <li>
                                                            <MDBIcon fas icon="star fa-xs" />
                                                        </li>
                                                    </ul>

                                                </div>
                                                <div>
                                                
                                                    <p>שם חבר: {worker.firstName}</p>
                                                    <p>שם משפחה : {worker.lastName}</p>
                                                    <p> כתובת מגורים: {worker.city} {worker.street} {worker.homeNumber}</p>
                                                    <p> תאריך לידה: {new Date(worker.birthDate).toLocaleDateString()}</p>
                                                    <p> טלאפון: {worker.tellephon}</p>
                                                    <p>פלאפון: {worker.cellphone}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />

                                        <MDBBtn  style={{backgroundColor:'black'}}onClick={() => showForWorkerData()} color="success" rounded block size="lg">
                                            <MDBIcon  style={{color:'white'}}far icon="clock me-2" />פרטי קורונה של {worker.firstName} {worker.lastName}
                                        </MDBBtn>

                                        <MDBBtn  style={{backgroundColor:'black'}}onClick={() => AddCovidDetail()} color="success" rounded block size="lg">
                                            <MDBIcon style={{color:'white'}} far icon="clock me-2" />הוספת פרטי קורונה ל {worker.firstName} {worker.lastName}
                                        </MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    : <></>}



            </div>






{index==2?<>


            <section style={{ backgroundColor: '#eeee' }} >
                <MDBContainer  style={{ backgroundColor: '#eeee' }}>
                    <MDBRow className="justify-content-center" >
                        <MDBCol >
                            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <MDBTypography tag='h3'>נתוני חיסונים</MDBTypography>

                                    <hr className="my-4" />
                                    <div className="d-flex justify-content-start align-items-center"></div>
                                    {covidDetails.map((f) =>
                                            <div >
                                             
                                                <p>{f.dateOfSingleVaccine!=null?<>תאריך קבלת חיסון:</>:<></>}</p>
                                                <p>  {f.dateOfSingleVaccine != null ? <p>{new Date(f.dateOfSingleVaccine).toLocaleDateString()}</p> : <></>}</p>
                                                <p>{f.producerOfVaccine!=null?<>יצרן :</>:<></>}</p>
                                                <p>  {f.producerOfVaccine != null ? <p>{f.producerOfVaccine}</p> : <></>}</p>
                                            </div>)}

                            
                                            
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
                                <MDBCardBody className="p-4">
                                    <MDBTypography tag='h3'>נתוני מחלה</MDBTypography>

                                    <hr className="my-4" />
                                    <div >

                                        {covidDetails.map((f) =>
                                            <div style={{}} >
                                                <p style={{marginLeft:'15px'}}>{f.dateOfRecovery!=null?<>תאריך החלמה:</>:<></>}</p>
                                                <p>  {f.dateOfRecovery != null ? <p>{new Date(f.dateOfRecovery).toLocaleDateString()}</p> : <></>}</p>
                                            <p  style={{marginLeft:'15px'}}>{f.dateOfPositiveStart!=null?<>תאריך קבלת תשובה חיובית:</>:<></>}</p>
                                                <p>  {f.dateOfPositiveStart != null ? <p>{new Date(f.dateOfPositiveStart).toLocaleDateString()}</p> : <></>}</p>
                                            </div>)}

                                    </div>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section></>:<></>}
        </>
    )
}, [])

