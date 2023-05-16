import {React, useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';

const PatientDetails = () => {
  const [patient, setPatient]= useState(null)
  const {id} = useParams();

    useEffect (()=>{
        if(id){
            getPatient(id);
        }
    },[id]);

    const getPatient = async (id) =>{
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/cmds/patients/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (response.ok) {
          const data =await response.json()
          setPatient(data);
          console.log(patient)
        } else {
          alert('Failed to fetch data.');
        }
  }
  console.log(patient)
  return (
    <div>
      <div className="card">
  <h5 className="card-header">Patient Details</h5>
  <div className="card-body">
    <h5 className="card-title">{patient && patient.firstName +" "+ patient.lastName}</h5>
    <p className="card-text">Diabetic,Blood pressure and alergic to Aspririn.</p>
    {/* <a href="consultation" class="btn btn-primary">Consultation</a> */}
  </div>
</div>
<h4 className="text-secondary">Previous Visits</h4>
<table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Date</th>
      <th scope="col">Disease</th>
      <th scope="col">Description</th>
      <th scope="col">Hospital</th>
      <th scope="col">Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>22-03-2023</td>
      <td>Headache</td>
      <td>fever and cough</td>
      <td>La Croix du Sud</td>
      <td><button type="button" className="btn btn-success">More</button></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>12-03-2023</td>
      <td>Stomachache</td>
      <td>stomach ulcer due to peptic acid</td>
      <td>CHUB</td>
      <td><button type="button" className="btn btn-success">More</button></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>12-03-2023</td>
      <td>Eyes</td>
      <td>microbes and catalact issue</td>
      <td>Kabgayi</td>
      <td><button type="button" className="btn btn-success">More</button></td>
      
    </tr>
  </tbody>
</table>
    </div>
  )
}

export default PatientDetails
