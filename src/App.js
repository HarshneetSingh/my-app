import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TextForm2 from './components/TextForm2';
import { Alert } from './components/Alert';
import {
  Route,
  Routes

} from "react-router-dom";
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
    }, 1500)
  }

  return (

    <>



      <Navbar title="Project 1" about="byClass" mode={mode} toggleMode={tglMode} />

      <Alert alert={alert} />


      <Routes>
        <Route path='/' element={
          <TextForm mode={mode} alert={showAlert} />
        }>
          {/* <div className='container' style={{ color: mode === "light" ? "black" : "white" }}>

              <h1 className='my-5'>by  function</h1>

              

            </div> */}
        </Route>
         <Route  path='/byClass' element={<TextForm2 mode={mode} alert={showAlert} />}>

         {/*   <div className='container' style={{ color: mode === "light" ? "black" : "white" }}>

              <h1 className='my-5'>by  Class</h1>

              

            </div>*/}
          </Route > 
      </Routes>


    </>
  );
}
export default App;
