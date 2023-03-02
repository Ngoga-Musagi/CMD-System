import React ,{useState} from 'react'
// import {useNavigate} from "react-router-dom";

const Referal = () => {

  const [values, setValues] = useState({
    nationalId:"",
    transferingHospital:"",
    transferingDepartment:"",
    transferingFacility:"",
    receivingFacility:"",
    receivingDepartment:"",
    diagnosis:"",
    reason:"",
    procedures:"",
    laboratory:"",
    clinicalPresentation:"",
    others:"",

    });

    // const history= useNavigate()
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
      <h1 class="text-center text-success display-4">Referal Form </h1>
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        
    <form class="form-example" onSubmit={handleSubmit}>
      
    <div className="form-group row" >
                                    <label for="fname" className="col-sm-2 col-form-label">nationalId:</label>
                                    <div class="col-sm-10">
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.nationalId} onChange={handleInputChange}  name="nationalId" required />
                                    </div>
                                    
                    </div>
  
    
    <div class="row">
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Transferring Hospital' name='transferingHospital' onChange={handleInputChange} value={values.transferingHospital} />
    </div>
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Transferring Facility' name='transferingFacility' onChange={handleInputChange} value={values.transferingFacility}/>
    </div>
    
    </div>
    <div class="row">
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Transferring Department' name='transferingDepartment' onChange={handleInputChange} value={values.transferingDepartment} />
    </div>
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Receiving Facility' name='receivingFacility' onChange={handleInputChange} value={values.receivingFacility}/>
    </div>
    </div>
    <div class="row">
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Reason For Transfer' name='reason' onChange={handleInputChange} value={values.reason}/>
    </div>
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Diagnosis' name='diagnosis' onChange={handleInputChange} value={values.diagnosis}/>
    </div>
    </div>
    <div class="row">
    <div class="form-group col-md-6">
      
      <input type="text" class="form-control" id="inputCity" placeholder='Receiving Department' name='receivingDepartment' onChange={handleInputChange} value={values.receivingDepartment} />
    </div>
     <div class="form-group col-md-6">
        <p><b>Vital Signs:</b></p>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" name='pulseOx' onChange={handleInputChange} />
        <label class="form-check-label" for="inlineCheckbox1">Pulse Ox</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="RR" />
        <label class="form-check-label" for="inlineCheckbox1">RR</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="BP" />
        <label class="form-check-label" for="inlineCheckbox1">BP</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Pulse" />
        <label class="form-check-label" for="inlineCheckbox1">Pulse</label>
        </div>
        <div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="Temperature" />
        <label class="form-check-label" for="inlineCheckbox1">Temperature</label>
        </div>
    </div>
    </div>
    <div>
    <p><b>Current Patient Conditions:</b></p>
    </div>
    
    <div class="row">
    <div class="form-group col-md-6" >
    <label for="exampleFormControlTextarea1">Procedures and Treatments:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='procedures' onChange={handleInputChange} value={values.procedures}></textarea>
  </div>
    <div class="form-group col-md-6">
    <label for="exampleFormControlTextarea1">Laboratory:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='laboratory' onChange={handleInputChange} value={values.laboratory}></textarea>
  </div>
    </div>
    <div class="row">
    <div class="form-group col-md-6" >
    <label for="exampleFormControlTextarea1">Clinical Presentation:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='clinicalPresentation' onChange={handleInputChange} value={values.clinicalPresentation}></textarea>
  </div>
    <div class="form-group col-md-6">
    <label for="exampleFormControlTextarea1">Others:</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='others' onChange={handleInputChange} value={values.others}></textarea>
  </div>
    </div>
  
  
  
  <button type="submit" class="btn btn-primary mb-4">Make Transfer</button>
</form>
</div>
</div>
</div>
  
  )
}

export default Referal
