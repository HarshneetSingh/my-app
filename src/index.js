import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);


reportWebVitals();



// {React Router }


// <Routes>
// every rooute should  to be in the routes container only 

// <Route>
// have two parameters 
// 1 =   path 
// 2nd = element which to be rendered 


// <Link> 
// it is just like <a>tag , (in html it is rendered as <a> only) 
// like in <a> tag href is there we use [to] here 

// <NavLink>
// it is Link but it provides property like isActive , clicked element will get the active in its class  
// we should use NavLink for navigation in navbar instead of Link 


// {Navigating proogrammitacly}

// *you can route via on clicking on button which are on the page ..

// *you can do this via using useNavigate Hook ===    import { useNavigate} from react-router

// basically it is an function which takes two param 

// 1) the link where to proceed
// 2) option like replace , replace: true will send to home of the browser page on only clicking back button like in CEAC






