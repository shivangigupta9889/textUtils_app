import React,{ useState } from 'react';
import './App.css';
import Alert from './components/alert';
import AboutUs from './components/aboutUs';
import Navbar from './components/navbar';
import TextForm from './components/Texeform';
import {Routes,Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)
  const showAlert=(message,type)=>{
       setAlert({
        msg: message,
        type:type
       })
       setTimeout(() => {
        setAlert(null)
      }, 2000);
  }
  const toggleMode=()=>{
  if(mode ==="light"){
    setMode('dark')
    document.body.style.backgroundColor="grey";
    showAlert('Dark Mode is enable',"successfully")
   
    document.title="TextUtils- DarkMode";
  }
  else{
    setMode('light')
    document.body.style.backgroundColor="white";
    showAlert('light Mode is enable',"successfully")
    document.title="TextUtils-LightMode";

  }
}
return (
  <>  
<Navbar title="TestUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<Routes>
  <Route path='/about' element={<AboutUs />} />
  <Route path='/' element={<TextForm showAlert={showAlert} heading="Enter the text which you want to analyze" mode={mode}/>} />
</Routes>

<div className='container my-3'>

</div>

  </>
  );
}
export default App;
