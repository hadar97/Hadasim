import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import { BrowserRouter } from 'react-router-dom';
import Myco from './Components/myco';
function App() {
  return (
    <div>
    <BrowserRouter>
    <switch>
    <Nav></Nav>

    </switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
