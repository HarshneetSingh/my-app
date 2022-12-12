
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { Products, ParamHook } from './components/Products';
import Latest from './components/Latest';
import { Alert } from './components/Alert';
import {
  Route,
  Routes

} from "react-router-dom";
import Top from './components/Top';
import Featured from './components/Featured';
import Users from './components/Users';
const LazyTextForm = React.lazy(() => import('./components/TextForm'))
const LazyTextForm2 = React.lazy(() => import('./components/TextForm2'))
function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null)

  const tglMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#45456f";
      showAlert("Dark Mode Enabled", "success")
    } else {
      setMode("light");

      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success")

    }
  }

  // for alert
  const toCapitalize = (word) => {
    const lowercase = word.toLowerCase();
    return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);

  }
  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: toCapitalize(type)
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }

  return (

    <>



      <Navbar title="Project 1" about="byClass" mode={mode} toggleMode={tglMode} />

      <Alert alert={alert} />

      <Routes>
        <Route path='/' element={
          <>
            <div className='container' style={{ color: mode === "light" ? "black" : "white" }}>
              <h1 className='my-5'>by  function</h1>
              <React.Suspense fallback="LOADING...">
                <LazyTextForm mode={mode} alert={showAlert}/>
              </React.Suspense>
            </div>
          </>
        }>
 
        </Route>
        <Route path='/byClass' element={
          <>
            <div className='container' style={{ color: mode === "light" ? "black" : "white" }}>
              <h1 className='my-5'>by  Class</h1>
              <React.Suspense fallback="LOADING..." >
                <LazyTextForm2  mode={mode} alert={showAlert}/>
              </React.Suspense>
            </div>
          </>
        }>
        </Route >
        <Route path="Products" element={<Products />}>
          <Route path='featured' element={<Featured />} />
          <Route index element={<Featured />} />         {/* index routing above , it means when you need some pre loaded page */}
          <Route path='top' element={<Top />} />
          <Route path="latest" element={<Latest />} />
        </Route>

        <Route path='top' element={<Top />} />
        <Route path='featured' element={<Featured />} />
        <Route path="latest" element={<Latest />} />
        <Route path="Products/:rndm" element={<ParamHook />} />     dynamically routing


        {/* here * means if someone pass wrong url then it will direct to new error page */}

        <Route path='/Users' element={<Users alert={showAlert} />} />
        <Route path="*" element={
          <>
            <div className='container' >
              <h1>You've Entered Wrong Link</h1>
            </div>
          </>
        }>

        </Route>
      </Routes>


    </>
  );
}
export default App;
