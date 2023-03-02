import React,{useState}from 'react'
// import {useNavigate} from "react-router-dom";



const Consultation = () => {

  const [respNormal,setRespNormal]= useState(true);
  const [values, setValues] = useState({
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
    // const history = useNavigate();
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        // props.authenticate();
         
        
    }

  const handleInputChange =(e)=>{
    e.persist();
    setValues(values => ({
    ...values,
    [e.target.name]: e.target.value
    }));

    
    
};
    
   
 
    return (
        <div class="jumbotron">
          <h1 class="text-center text-success display-4">Consultation Form </h1>
        <div class="container h-100">
          <div class="row h-100 justify-content-center align-items-center">
            
        <form class="form" onSubmit={handleSubmit}>
          
        <div class="form-group row">
                            <label for="fname" class="col-sm-2 col-form-label">Patient</label>
                            <div class="col-sm-10">
                            <input type="text" class="form-control username" id="fname" placeholder="Full Name..." onChange={handleInputChange} name="patientId" value={values.patientId} />
                            </div>
        </div>
      
        <div class="form-group row">
                            <label for="fname" class="col-sm-2 col-form-label">Complain</label>
                            <div class="col-sm-10">
                            {/* <input type="text" class="form-control username" id="fname" placeholder="Full Name..." name="nationalId" /> */}
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="complain" value={values.complain}></textarea>
                            </div>
        </div>
        <div class="form-group row">
                            <label for="fname" class="col-sm-2 col-form-label">HPI</label>
                            <div class="col-sm-10">
                            {/* <input type="text" class="form-control username" id="fname" placeholder="Full Name..." name="nationalId" /> */}
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={handleInputChange} name="hpi" value={values.hpi}></textarea>
                            </div>
        </div>
        <div class="row">
        <div class="form-group col-md-6">
        <p><b>Observation:</b></p>
          {/* <input type="text" class="form-control" id="inputCity" placeholder='Receiving Department' /> */}
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Observation' onChange={handleInputChange} name="observation" value={values.observation}></textarea>
        </div>
         <div class="form-group col-md-6">
            <p><b>Vital Signs:</b></p>
            {/* <div class="row">
                
            </div> */}
         <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="pulseOx" onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">Pulse Ox</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="rr" onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">RR</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="bp" onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">BP</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="pulse" onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">Pulse</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="true" name="temperature" onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">Temperature</label>
        </div>
        </div>
        </div>
        <div>
        <p><b>Patient's  Physical Exams:</b></p>
        </div>
        
        <div class="row">
            
        
        <div class="form-group col-md-6" >
        <p>Respiratory System:</p>
        <div class="form-check form-check-inline">
        <input type="radio" name="radio" value="NO"/>
            <label class="form-check-label" for="flexRadioDefault1">
            Normal
            </label>
        </div>
        <div class="form-check form-check-inline">
        <input type="radio" name="radio" value="YES" onChange={(e)=>{
            e.preventDefault();
            setRespNormal(true);
        }}/>
            <label class="form-check-label" for="flexRadioDefault1">
            Abnormal
            </label>
        </div>
      </div>
      {!respNormal &&
      (<div id='errorexpand' class="form-group col-md-6">
      <label for="exampleFormControlTextarea1">Comments:</label>
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>)
      }
        
        </div>
        <div class="row">
            
        
        <div class="form-group col-md-6" >
        <p>Blood Circulation:</p>
        <div class="form-check form-check-inline">
        <input type="radio" name="radio" value="NO" />
            <label class="form-check-label" for="flexRadioDefault1">
            Normal
            </label>
        </div>
        <div class="form-check form-check-inline">
        <input type="radio" name="radio" value="YES"/>
            <label class="form-check-label" for="flexRadioDefault1">
            Abnormal
            </label>
        </div>
        
      </div>
        <div id='errorexpand2' class="form-group col-md-6">
        <label for="exampleFormControlTextarea1">Comments:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
        </div>
        
      
      <button type="submit" class="btn btn-primary mb-4">Confirm
      
      </button>
    </form>
    
    </div>
    </div>
    </div>
      
      )
}

export default Consultation;