import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import AllRecords from './components/AllRecords';
import AddRecord from './components/AddRecord';

import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar/>
     <Routes>
      
     <Route path='/addrecord' element={<AddRecord/>}/>
    <Route path="/all" element={ <AllRecords/>}/>

     
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
