import './App.css';
import Navbar from './Navbar';
import Textform  from './Textform';
import Abort from './About';
import { useState } from 'react';
import Alert from './Alert';

function App() {

  const [mode,setmode] = useState('light');
  const [darkmodetext, setdarkmodeText] = useState('Switch to dark mode');
  const [modereverse,setmodeReverse] = useState('dark');
  const [alerting, setAlert] = useState(null);


  const showAlert = (message,type) =>{
    setAlert({message,type});
  }
  const  toggleMode = () =>{
      if (mode === 'light'){
        setmode('dark');
        setdarkmodeText('Switch to light mode');
        setmodeReverse('light');
        document.body.style.backgroundColor = '#222222';
        // showAlert('Mode has been enabled','success');
        
      }
      else{
        setmode('light');
        setdarkmodeText('Switch to dark mode');
        setmodeReverse('dark');
        document.body.style.backgroundColor = 'white';
        // showAlert('Mode has been enabled','success');
      }
    }
  return (
  <>
    <Navbar title = {"Navbar"} mode={mode} toggleMode={toggleMode} darkmodetext={darkmodetext} modereverse={modereverse}/>
    <div className='container'>
    {/* <Alert alerting={alerting} /> */}
    <Textform  modereverse={modereverse} mode={mode}/>
    {/* <Abort /> */}
    </div>
    
  </>
  );
}

export default App;
