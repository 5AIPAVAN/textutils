// import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import About from './components/About';

// let name="5AIPAVAN";



function App() {           //FUNCTION BASED COMPONENT

  const [mode,setMode] = useState("light");

  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(()=>{setAlert(null)},2000);
  }

  const toggleModeFunction = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#051556";
      showAlert("Dark Mode Activated","success");
      document.title="TextUtils - Dark Mode"
      // setInterval(()=>{
      //   document.title="!!! Subscribe now !!!"
      // },2000)
      // setInterval(()=>{
      //   document.title="!! Grab or Gone !!"
      // },1300)
    }else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light Mode Activated","success");
      document.title="TextUtils - Light Mode"
      // setInterval(()=>{
      //   document.title="!!! Subscribe now !!!"
      // },2000)
      // setInterval(()=>{
      //   document.title="!! Grab or Gone !!"
      // },1300)
    }
  }
   


  return (
    //FUNCTION(toggleModeFunction which is present in App.js) IS PASSED AS prop(togglerr) IN TextForm HERE 
    <>
    <Router>

  <Navbar title="5AIPAVAN's" item1="About" item2="Home" mode={mode} togglerr ={toggleModeFunction}/>  
  <Alert alert={alert}/>


  <div className="container my-4">
  <Routes>
          <Route exact path="/about" element={<About mode={mode} />}/>
          <Route exact path="/" element={<TextForm mode={mode}  showAlertfunction={showAlert} heading="Enter Your Text Here To Analyze"/>}/>   
        
  </Routes>
  {/* <TextForm mode={mode} showAlertfunction={showAlert} heading="Enter Your Text Here To Analyze"/> */}
  {/* <About/> */}
  </div>
  
  </Router>
    </>
    
  );
}

export default App;
