import './App.css';
import Navbar from './Navbar';
import Textform  from './Textform';
import Abort from './About';

function App() {
  return (
  <>
    <Navbar title = {"Navbar"} />
    <div className='container'>
    <Textform />
    {/* <Abort /> */}
    </div>
    
  </>
  );
}

export default App;
