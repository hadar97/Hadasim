import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from "react";
import { useEffect } from 'react';
import React from "react";
import { MDBModalBody } from 'mdbreact';
import { MDBModalHeader } from 'mdbreact';
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { withRouter } from 'react-router-dom';
import { AddNewWorkerToserver, AddWorkerToserver, getAllWorkersFromServer } from '../Services/WorkersThunk';
import { Options } from 'react-redux';
import option from '../Components/Option.css';
import axios from "axios";
import { MDBModal } from 'mdbreact';
export default withRouter(function AddNewWorker(props) {
var thestreet=""
var thecity=""
let myFile
let myFiletxt   
 let [SelectedFile, SetSelectedFile] = useState({});
const ChooseCity=(event)=>{
/**
 * Select a street by city in Israel
 * Cities data is from https://data.gov.il/dataset/citiesandsettelments
 * Streets data is from https://data.gov.il/dataset/321
 * API documentation https://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_search
 */

// REST API URL
const api_url = "https://data.gov.il/api/3/action/datastore_search";
// Cities endpoint
const cities_resource_id = "5c78e9fa-c2e2-4771-93ff-7f400a12f7ba";
// Streets endpoint
const streets_resource_id = "a7296d1a-f8c9-4b70-96c2-6ebb4352f8e3";
// Field names
const city_name_key = "שם_ישוב";
const street_name_key = "שם_רחוב";
// dataset ids
const cities_data_id = "cities-data";
const streets_data_id = "streets-data";
// input elements
const cities_input = document.getElementById("city-choice");
const streets_input = document.getElementById("street-choice");

/**
 * Get data from gov data API
 * Uses Axios just because it was easy
 */
const getData = (resource_id, q = "", limit = "100") => {
  //console.log("sending", resource_id, query);
  return axios.get(api_url, {
    params: { resource_id, q, limit },
    responseType: "json"
  });
};

/**
 * Parse records from data into 'option' elements,
 * use data from key 'field_name' as the option value
 */
const parseResponse = (records = [], field_name) => {
  const parsed =
    records
      .map((record) => `<option value="${record[field_name].trim()}">`)
      .join("\n") || "";
  //console.log("parsed", field_name, parsed);
  return Promise.resolve(parsed);
};

/**
 * Fetch data, parse, and populate Datalist
 */
const populateDataList = (id, resource_id, field_name, query, limit) => {
  const datalist_element = document.getElementById(id);
  if (!datalist_element) {
    console.log(
      "Datalist with id",
      id,
      "doesn't exist in the document, aborting"
    );
    return;
  }
  getData(resource_id, query, limit)
    .then((response) =>
      parseResponse(response?.data?.result?.records, field_name)
    )
    .then((html) => (datalist_element.innerHTML = html))
    .catch((error) => {
      console.log("Couldn't get list for", id, "query:", query, error);
    });
};

// ---- APP ----

/**
 * Populate cities.
 * There are about 1300 cities in Israel, and the API upper limit is 32000
 * so we can safely populate the list only once.
 */
populateDataList(
  cities_data_id,
  cities_resource_id,
  city_name_key,
  undefined,
  32000
);

/**
 * Populate streets
 * Update the streets list on every city name change
 * (assuming there aren't more than 32,000 streets in any city)
 */
cities_input.addEventListener("change", (event) => {
  populateDataList(
    streets_data_id,
    streets_resource_id,
    street_name_key,
    {
      שם_ישוב: cities_input.value
    },
    32000
  );
 
});

}





    let WorkersTemp
    const [Worker, setWorker] = useState([{}]);
const dispatch= useDispatch();

const [modal14, setModal14] = useState();

const [error, setError] = useState({});
const [user, setUser] = useState();
const [lastname, setlastname] = useState();





  const [file, setFile] = useState(null);
    const [Myerror, setMyError] = useState(null);
  
    const handleFileChange = async(event) => {
      debugger
      const selectedFile = event.target.files[0];
  
      if (selectedFile && isImageFile(selectedFile)) {
        setFile(selectedFile);
        setMyError(null);
      } else {
        setFile(null);
        setMyError("Please select a valid image file (JPEG, PNG, or GIF)");
      }
    };
  
    const handleUpload = async (event) => {
      AddWorkerToserver()
      debugger
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
  
        try {
          const response = await fetch("https://localhost:44359/api/Workers/upload", {
            method: "POST",
            body: formData,
          });
  debugger
          if (response.ok) {
           alert("נתונים נשמרו בהצלחה!");
          } else {
            throw new Error(await response.text());
          }
        } catch (ex) {
          alert(`Error: ${ex.message}`);
        }
      } else {
        setError("Please select an image file");
      }
      debugger
     
    };
  
    const isImageFile = (file) => {
      const acceptedImageTypes = ["image/jpeg", "image/png", "image/gif"];
      return file && acceptedImageTypes.includes(file.type);
    };
  










const validname = (event) => {
  var matches = /\d+/g;
  var SignMatch = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (!event.target.value)
    setError({ ...error, errorName: 'נדרש' })
  else if (event.target.value.includes("!"))
    setError({ ...error, errorName: 'לא חוקי' })
  else if (event.target.value.match(matches))
    setError({ ...error, errorName: 'אין להכניס מספרים' })
  else if (event.target.value.match(SignMatch))
    setError({ ...error, errorName: 'ללא סמלים' })
  else {
    setError({ ...error, errorName: 'תקין' })
  }
  setUser({ ...user, usrName: event.target.value })
}





const validLastname = (event) => {
    var matches = /\d+/g;
  var SignMatch = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (!event.target.value)
    setError({ ...error, errorLastName: 'נדרש' })
  else if (event.target.value.includes("!"))
    setError({ ...error, errorLastName: 'לא חוקי' })
  else if (event.target.value.match(SignMatch))
    setError({ ...error, errorLastName: 'אין להכניס מספרים' })
    else if (event.target.value.match(matches))
    setError({ ...error, errorLastName: 'אין להכניס מספרים' })
  else {
    setError({ ...error, errorLastName: 'תקין' })
  }
  setlastname({ ...lastname, usrName: event.target.value })
}



const isValidIsraeliID=(e) =>{
  var letters=/[a-z]/
    var myid=e.target.value
    var id = String(myid).trim();
    if (id.length > 9 || id.length < 5 || isNaN(id)) 
    setError({...error,errorid:"תעודת זהות שגויה"});
    else if(e.target.value.match(letters))
    setError({...error,errorid:"אין להכניס אותיות"});
    // Pad string with zeros up to 9 digits
    else  if  (id.length== 9 )
    setError({...error,errorid:"תקין"});

  }
const AddWorkerToserver = async () => {
  
  if(error.errorid=='תקין'&&error.errorName=='תקין' &&error.errorLastName=='תקין'&&error.num=='תקין'
  &&error.errortellphone=='תקין'&&error.errorcellphone=='תקין'&&error.date=='תקין'){
    setModal14(!modal14)
  let newUser1;
  const nameuser = document.getElementById("NameUser").value
  const LastName = document.getElementById("LastName").value
  const identity = document.getElementById("identity").value
  const cell = document.getElementById("cellphone").value
  const tell = document.getElementById("tellphone").value
  const city =   document.getElementById("city-choice").value
  const street = document.getElementById("street-choice").value
  const numberOfhouse = document.getElementById("numberOfhouse").value
  const date=document.getElementById("thedate").value 
  const myImg=file.name 
  const MyWorker = {
  
    
        idWorker: identity,
        firstName: nameuser,
        lastName: LastName,
        city: city,
        street: street,
        homeNumber:numberOfhouse ,
        birthDate: date,
        tellephon: tell,
        cellphone: cell,
        imgPath:myImg
      }
      debugger
  WorkersTemp = await AddNewWorkerToserver(MyWorker);

  setUser(newUser1)}
  else alert('נתון או יותר שגויים')
  if(WorkersTemp==false){
    alert('חבר קיים במערכת')
  }
}
const validCellPhone=(e)=>{
    var val=/\d/g
    if (!e.target.value)
    setError({ ...error, errorcellphone: 'נדרש' })
if(e.target.value.match(val)&&e.target.value.length==10){
setError({ ...error, errorcellphone: 'תקין' })}
else    { setError({ ...error, errorcellphone: 'שגוי' })}
}


const validTellPhone=(e)=>{
    var val=/\d/g
    if (!e.target.value)
    setError({ ...error, errortellphone: 'נדרש' })
if(e.target.value.match(val)&&e.target.value.length==10){
setError({ ...error, errortellphone: 'תקין' })}
else    { setError({ ...error, errortellphone: 'שגוי' })}
}
const validnum=(e)=>{
 var matches = /\d+/g; 
 if (!e.target.value)
 setError({ ...error, num: 'נדרש' })
else if(e.target.value.match(matches))
{
    setError({...error,num:"תקין"})
}
else setError({...error,num:"שגוי"})
}
useEffect(async () => {
  setModal14(true);
}, [])

const ValidDate=(e)=>{
var birthday=e.target.value
 if(!/^\d{4}-\d{2}-\d{2}$/.test(birthday)) {
    setError({...error,date:"תאריך שגוי"})
    }
    debugger
    let parts = birthday.split('-');
    let now = new Date();
    let year = parseInt(parts[0], 10);
    let currentYear = now.getFullYear();
    let currentMonth = now.getMonth();
    let currentDay = now.getDay();
    let month = ( parts[1][0] === '0') ? parseInt(parts[1][1], 10) : parseInt(parts[1], 10);
    let day = ( parts[2][0] === '0') ? parseInt(parts[2][1], 10) : parseInt(parts[2], 10);
debugger
    if(year >= currentYear) {
        setError({...error,date:"שנה שגוי"})
    }
   else if( (currentYear - year) < 18 || (currentYear - year) > 80) {
        setError({...error,date:"אינך בגיל המתאים לעבודה"})
    }
   else if( month < 1 || month > 12||(currentMonth<month&&currentYear<=year)) {
        setError({...error,date:"חודש שגוי"})
    }
  else  if( day < 1 || day > 31 ||(currentDay<day&&currentMonth<=month&&currentYear<=year)) {
        setError({...error,date:"יום שגוי"})
    }
  else  setError({...error,date:"תקין"})
};
// const AddImg=async(e)=>{
// var myid=document.getElementById("identity").value
//   myFile = e.target.files[0];
//   console.log(myFiletxt)
//   const formData = new FormData();
// debugger
//   formData.append('file', myFile,myFile.name);
//   debugger
//   await axios.post("https://localhost:44339/api/Workers/UploadImg", formData, { reportProgress: true, observe: 'events' })
//   .then((event) => {
//       console.log(event);
//   })
// alert("upload complete");
// }
  

    return (<>  
  
  
        <form >
   
       
    <span  style={{marginRight:'20%'}}>תעודת זהות</span>
         <div style={{marginRight:'20%'}} >
      
              <input required="required" type="text" id="identity" icon="user-edit"  validate error="wrong" onChange={(e) => { isValidIsraeliID(e) }} />
             <p>{error.errorid}</p>

</div>   <span style={{marginRight:'20%'}}>שם פרטי</span>
<div style={{marginRight:'20%'}} >

              <input  required="required" type="text" id="NameUser" icon="user-edit"  validate error="wrong" onChange={(e) => { validname(e) }} />
             <p>{error.errorName}</p>
          
           </div>    <span style={{marginRight:'20%'}}>שם משפחה   </span>
           <div style={{marginRight:'20%'}} >
                  <input required="required" type="text" id="LastName" icon="user-friends"  validate error="wrong" onChange={(e) => { validLastname(e) }} />
              <div>{error.errorLastName}</div>
        </div>
        <div style={{marginTop:'20px'}}></div>
        <span style={{marginRight:'20%'}}>מספר בית</span>
        <div style={{marginRight:'20%'}} >
             
            <input class="inputbox" required="required" type='text' id="numberOfhouse" icon="lock"  validate onChange={(e) => { validnum(e) }} />
            <div>{error.num}</div> 
             <div style={{marginTop:'20px'}}></div>
       </div>    <span style={{marginRight:'20%'}}>טלפון</span>
       <div style={{marginRight:'20%'}} >
          
            <input class="inputbox" required="required" id="tellphone" icon="lock"  validate onChange={(e) => { validTellPhone(e) }} />
         <div> {error.errortellphone}</div> 
      </div>        <div style={{marginTop:'20px'}}></div>
    <span style={{marginRight:'20%'}}>פלאפון</span>
      <div style={{marginRight:'20%'}} >
         
       
            <input class="inputbox" required="required" id="cellphone" icon="lock"  validate onChange={(e) => { validCellPhone(e) }} />
       <div>   {error.errorcellphone}</div> 
           <div style={{marginTop:'20px'}}></div>
</div><span style={{marginRight:'20%'}}>תאריך לידה</span>
<div style={{marginRight:'20%'}} >
<input  id="thedate" type='date' onChange={(e)=>ValidDate(e)}></input><div>{error.date} </div>
</div>

{/* <div style={{marginTop:'20px'}}></div>
<span style={{marginRight:'20%',marginTop:'20px'}}>הוסף תמונת פרופיל</span>
<div style={{marginTop:'20px'}}></div>
<input  ccept=".png , .jpg"style={{marginRight:'20%'}} onChange={(e)=>AddImg(e)}type="file" id="img" /> */}
             <div style={{marginTop:'20px'}}></div>
 
      <div style={{marginRight:'20%'}} ></div>


<form action="" onChange={(e)=>ChooseCity(e)} >
<label style={{marginRight:'20%'}}for="city-choice">בחר עיר</label>
  <div  style={{marginRight:'18%'}}class="form-field" id="city-selection">
   
    <input list="cities-data" id="city-choice" name="city-choice" />
    <datalist id="cities-data">
    
      <option value="" id="city">טוען רשימת ערים...</option>
    </datalist>
  </div><label style={{marginRight:'20%'}} for="street-choice">בחר רחוב</label>
  <div  style={{marginRight:'18%'}}class="form-field" id="street-selection">
    
    <input list="streets-data" id="street-choice" name="street-choice" />
    <datalist id="streets-data">
      <option id="street" value=""/>
    </datalist>
  </div>
  <div>
      <input  style={{marginTop:'20px',marginRight:"20%"}}type="file" id="mypic" onChange={(event)=>handleFileChange(event)} />
      {Myerror && <div style={{ color: "red" }}>{Myerror}</div>}
      <button  class="btn btn-outline-danger" onClick={(event)=>handleUpload(event)}> הוסף חבר</button>
    </div>
</form>

         
              {/* <input  style={{marginRight:'20%',marginTop:'20px' ,textSize:'15px'}}type="button" class="btn btn-outline-danger" value="הוספת עובד" onClick={()=>AddWorkerToserver()}/> */}
        
      
  
        </form>


     
  
    </>
  );
}, [])


    
    













