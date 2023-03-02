
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Consultation from './components/Consultation';
import Header from './components/Header';
import AddPatient from './components/AddPatient';
import Referal from './components/Referal';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<AddPatient/>} />
        <Route exact path="/add" element={<AddPatient/>} />
        <Route exact path="/referal" element={<Referal/>} />
        <Route exact path="/consultation" element={<Consultation/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
