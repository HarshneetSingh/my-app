import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import TextForm2 from './components/TextForm2';

function App() {
  return (
    <>
      <Navbar title="Project 1" about="Btao Btao" />
      <div className='container'>
        <h1 className='my-5'>by  function</h1>

        <TextForm />
        <h1 className='my-5'>by  Class</h1>
        <TextForm2 />
      </div>
    </>
  );
}
export default App;
