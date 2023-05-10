import {NavLink,Link} from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';

import { useEffect } from 'react';
import NavCss from '..'
import ShowWorkers from './ShowWorkers';
import AddNewWorker from './AddNewWorker';
import ShowWorkerById from './ShowWorkerById';
import AddCovidDetails from './AddCovidDetails';
import ShowCovidDetails from './ShowCovidDetails';
import Home1 from './Home1';
import myco from './myco';
const Nav = () => {
    return <>
            <BrowserRouter>
     <div class="navbar navbar-expand-lg navbar-light bg-light">
  
        <nav  style={{width:'40%'}}class="navbar navbar-expand-lg navbar-light bg-light"  >
        <div  class="container-fluid">
            <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item" style={{marginLeft:'20px'}}><i class="nav-link"></i> <NavLink  style={{color:'black'}}to="/ShowWorkers" >רשימת חברים</NavLink> </li>
                
                <li  class="nav-item" style={{marginLeft:'20px'}}><i class="nav-link"></i> <NavLink style={{color:'black'}} to="/GetWorker" > נתוני חבר</NavLink> </li>
                <li  class="nav-item" style={{marginLeft:'20px'}}><i class="nav-link"></i> <NavLink style={{color:'black'}}to="/GetAllCovidDetails" >רשימת פרטי קורונה</NavLink> </li>

               
                </ul></div>
        </nav>
    </div>

<div style={{height:'60px'}}></div>
 
  <Switch>
  <Route path='/' exact component={Home1}></Route>
  <Route path='/myco' exact component={myco}></Route>
  <Route path='/ShowWorkers' exact component={ShowWorkers}></Route>
  <Route path='/AddNewWorker' exact component={AddNewWorker}></Route>
  <Route path='/GetWorker' exact component={ShowWorkerById}></Route>
  <Route path='/AddCovidDetails' exact component={AddCovidDetails}></Route>
  <Route path='/GetAllCovidDetails' exact component={ShowCovidDetails}></Route>
      </Switch>
    </BrowserRouter>

    </>
}

export default Nav;
