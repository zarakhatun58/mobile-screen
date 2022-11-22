import './App.css';
import Login from './Components/Login';
import Home from './Components/Home/index';
import { Tabs, Tab, Panel } from '@bumaga/tabs' 
import 'font-awesome/css/font-awesome.min.css';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import NewCom from './Components/NewCom';


function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <Home/>
      
      
    </div>
  );
}

export default App;
