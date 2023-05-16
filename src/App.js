
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consultation from './components/Consultation';
import Header from './components/Header';
import AddPatient from './components/AddPatient';
import Referal from './components/Referal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import PatientDetails from './components/PatientDetails';
import SignUp from './components/SignUp';
import SearchPatient from './components/SearchPatient';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
      < Route exact path="/" element={<Login/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignUp/>} />
        <Route exact path="/add" element={<AddPatient/>} />
        <Route exact path="/referal" element={<Referal/>} />
        <Route exact path="/consultation" element={<Consultation/>} />
        <Route exact path="/patient/" element={<SearchPatient/>} />
        <Route exact path="/patient/:id" element={<PatientDetails/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
