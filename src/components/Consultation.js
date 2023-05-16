import React,{useState}from 'react'
// import {useNavigate} from "react-router-dom";



const Consultation = () => {


  const [values, setValues] = useState({
    
    temperature:"",
    complain:"",
    hpi:"",
    observation:"",
    rr:"",
    bp:"",
    pulse:"",
    pulseOx:"",
    respiratory:"",
    respiratoryComment:"",
    bloodCirculationComment:"",
    });
  
    // const history = useNavigate();
    const handleSubmit= async(e)=>{
      
      const token = localStorage.getItem('token');
            e.preventDefault();
            
            const response = await fetch('http://localhost:8080/cmds/consultation/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(values)
              });
              console.log(token)
              if (response.ok) {
                alert('Form submitted successfully!');
                setValues({
            patientId:"",
            temperature:"",
            complain:"",
            hpi:"",
            observation:"",
            rr:"",
            bp:"",
            pulse:"",
            pulseOx:"",
            respiratory:"",
            respiratoryComment:"",
            bloodCirculationComment:"",
          });
        } else {
          alert('Form submission failed. Please try again.');
        } 
  }

  const handleInputChange =(e)=>{
    e.persist();
    setValues(values => ({
    ...values,
    [e.target.name]: e.target.value
    }));

    
    
};
    
   
 
    return (
        <div className="jumbotron">
          <h1 className="text-center text-success display-4">Consultation Form </h1>
        <div className="container h-90">
          <div className="row h-100 justify-content-center align-items-center">
            
        <form className="form" onSubmit={handleSubmit}>
          
        {/* <div class="form-group row">
                            <label for="fname" class="col-sm-2 col-form-label">Patient</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control username" id="fname" placeholder="Full Name..." onChange={handleInputChange} name="patientId" value={values.patientId} />
                            </div>
        </div> */}
      
        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-2 col-form-label">Complain</label>
                            <div className="col-sm-10">
                            {/* <input type="text" class="form-control username" id="fname" placeholder="Full Name..." name="nationalId" /> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="complain" value={values.complain}></textarea>
                            </div>
        </div>
        <div className="form-group row">
                            <label htmlFor="fname" className="col-sm-2 col-form-label">HPI</label>
                            <div className="col-sm-10">
                            {/* <input type="text" class="form-control username" id="fname" placeholder="Full Name..." name="nationalId" /> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="hpi" value={values.hpi}></textarea>
                            </div>
        </div>
        <div className="row">
        <div className="form-group col-md-6">
        <p><b>Observation:</b></p>
          {/* <input type="text" class="form-control" id="inputCity" placeholder='Receiving Department' /> */}
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Observation' onChange={handleInputChange} name="observation" value={values.observation}></textarea>
        </div>
         <div className="form-group col-md-6">
            <p><b>Vital Signs:</b></p>
            {/* <div class="row">
                
            </div> */}
         <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="pulseOx" onChange={handleInputChange} />
        <label className="form-check-label" htmlFor="inlineCheckbox1">Pulse Ox</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="rr" onChange={handleInputChange} />
        <label className="form-check-label" htmlFor="inlineCheckbox1">RR</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="bp" onChange={handleInputChange} />
        <label className="form-check-label" htmlFor="inlineCheckbox1">BP</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="pulse" onChange={handleInputChange} />
        <label className="form-check-label" htmlFor="inlineCheckbox1">Pulse</label>
        </div>
        <div className="form-check ">
        <label className="form-check-label" htmlFor="inlineCheckbox1">Temperature</label>
        <input id="temperature" type="text" className="form-control" minLength={3} maxLength={3} value={values.temperature} name="temperature" onChange={handleInputChange} />
        
        </div>
        </div>
        </div>
        <div>
        <p><b>Patient's  Physical Exams:</b></p>
        </div>
        
        <div className="row">
            
        
        <div className="form-group col-md-6" >
        <p>Respiratory System:</p>
                
      </div>
     
      <div  className="form-group col-md-6">
      <label htmlFor="exampleFormControlTextarea1">Comments:</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="respiratoryComment" value={values.respiratoryComment}></textarea>
    </div>
      
        
        </div>
        <div className="row">
            
        
        <div className="form-group col-md-6" >
        <p>Blood Circulation:</p>       
        
      </div>
        <div id='errorexpand2' className="form-group col-md-6">
        <label htmlFor="exampleFormControlTextarea1">Comments:</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="bloodCirculationComment" value={values.bloodCirculationComment}></textarea>
      </div>
        </div>
        
      
      <button type="submit" className="btn btn-primary mb-4">Confirm
      
      </button>
    </form>
    
    </div>
    </div>
    </div>
      
      )
}

export default Consultation;