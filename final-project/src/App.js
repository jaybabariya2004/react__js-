import { Routes,Route } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Dashbord from './Component/Dashbord/Dashbord';
import Co_Faculty from './Component/Co_Faculty/Co_Faculty';
import Faculty from './Component/Faculty/Faculty';
import Student from './Component/Student/Student';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Dashbord />}/>
        <Route path='/Co_Faculty' exact element={<Co_Faculty />}/>
        <Route path='/Faculty' exact element={<Faculty />}/>
        <Route path='Student' exact element={<Student />}/>
      </Routes>
    </div>
  );
}

export default App;