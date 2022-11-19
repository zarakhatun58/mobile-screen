import './App.css';
import Login from './Components/Login';
import Home from './Components/Home/index';
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Home/>
      
    </div>
  );
}

export default App;
