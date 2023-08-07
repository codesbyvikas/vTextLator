import  React,{ useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
 // Link,
  Route

} from "react-router-dom";

function App() {
 const [mode1, setMode1]=useState('light');
 const [alert, setAlert]=useState(null);

 const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null) 
      }, 1500);
 }

  const togglemode1=()=>{
    if(mode1==='light'){
      setMode1('dark');
      document.body.style.backgroundColor='#3b3547';
      showAlert("Dark Mode has been enabled","success")
    }else{
      setMode1('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success")
    }
  }
  return (


<>      
<BrowserRouter>
<Navbar title="vTextLator" about="About Us" mode1={mode1} togglemode1={togglemode1}/>
<Alert alert={alert}></Alert>
<div className="container">
<div className="my-5"></div>

<Routes>
            <Route exact path="/about" element={<About mode1={mode1}  togglemode1={togglemode1} />} />
          </Routes>
          <Routes>
            <Route exact path="/"
              element={
                <TextForm showAlert={showAlert} heading = "Text Modifier" textarea="Enter your text" mode1={mode1}/>
              
              }
            />
          </Routes>
        </div>
      </BrowserRouter>



</>
  );
}

export default App;

