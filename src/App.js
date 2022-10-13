import './App.css';
import Navbar from './Navbar';
import Textform  from './Textform';
import Abort from './About';
import { useState } from 'react';

function App() {

  const [mode,setmode] = useState('light');
  const [darkmodetext, setdarkmodeText] = useState('Switch to dark mode');
  const [modereverse,setmodeReverse] = useState('dark');

  const  toggleMode = () =>{
      if (mode === 'light'){
        setmode('dark');
        setdarkmodeText('Switch to light mode');
        setmodeReverse('light');
      }
      else{
        setmode('light');
        setdarkmodeText('Switch to dark mode');
        setmodeReverse('dark');
      }
    }
  return (
  <>
    <Navbar title = {"Navbar"} mode={mode} toggleMode={toggleMode} darkmodetext={darkmodetext} modereverse={modereverse}/>
    <div className='container'>
    <Textform />
    {/* <Abort /> */}
    </div>
    
  </>
  );
}

export default App;
