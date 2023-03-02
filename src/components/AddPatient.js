import React, {useState } from "react";
import axios from "axios";
const AddPatient = () => {

    const [values, setValues] = useState({
        nationalId:"",
        firstName:"",
        lastName:"",
        dob:"",
        location:"",
        phone:"",
        religion:"",
        });
        // const history = useHistory();
        const add = async(data)=>{
            const response= await axios.post("http://localhost:8080/patient",data);
            if(response.status === 200){
    
            }
         };
        const handleSubmit=(evt)=>{
            evt.preventDefault();
            // props.authenticate();
            add(values);       
            
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
        <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand" href="!#">Register New Patient:</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
      
    </ul>
    
  </div>
</nav>
        </div>
         <h1 class="text-center text-success display-4">Register Patient</h1>
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
             
              <form className="form-example" onSubmit={handleSubmit}>
                   
                
        
                    
                    
                    <div className="form-group row" >
                                    <label for="fname" className="col-sm-2 col-form-label">nationalId:</label>
                                    <div class="col-sm-10">
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.nationalId} onChange={handleInputChange} name="nationalId" required />
                                    </div>
                                    
                    </div>
                    <div class="form-group row">
                        <label for="firstname" className="col-sm-2 col-form-label">FirstName:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control username" id="fname" placeholder="FirstName..." name="firstName" onChange={handleInputChange} value={values.firstName}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="lname" className="col-sm-2 col-form-label">LastName:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control lastname" id="lastname" placeholder="Lastname..." name="lastName" onChange={handleInputChange} value={values.lastName}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="fname" className="col-sm-2 col-form-label">DateOfBirth:</label>
                        <div class="col-sm-10">
                        <input type="date" className="form-control username" id="dob" placeholder="Date of Birth..." name="dob"  onChange={handleInputChange} value={values.dob}/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="location" className="col-sm-2 col-form-label">Location:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control username" id="location" placeholder="Location..." name="location" onChange={handleInputChange} value={values.location} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="location" className="col-sm-2 col-form-label">Religion:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control username" id="location" placeholder="Religion..." name="religion" onChange={handleInputChange} value={values.religion} />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="location" className="col-sm-2 col-form-label">Phone:</label>
                        <div class="col-sm-10">
                        <input type="text" className="form-control username" id="phone" placeholder="Phone Number..." name="phone" onChange={handleInputChange} value={values.phone} />
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-customized mt-4" >
                        Register
                    
                    </button>
                </form>
                
          </div>
      </div>
  </div>
  </div>
  )
}

export default AddPatient;
