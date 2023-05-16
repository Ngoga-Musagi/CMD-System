import React, {useState } from "react";
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
        
        const handleSubmit= async(e)=>{
          const token = localStorage.getItem('token');
            e.preventDefault();
            
            const response = await fetch('http://localhost:8080/cmds/patients/add', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(values)
              });
          
              if (response.ok) {
                alert('Form submitted successfully!');
                setValues({
                    nationalId:"",
                    firstName:"",
                    lastName:"",
                    dob:"",
                    location:"",
                    phone:"",
                    religion:"",
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
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a className="navbar-brand" href="!#">Register New Patient:</a>
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      
      
    </ul>
    
  </div>
</nav>
        </div>
         <h1 className="text-center text-success display-4">Register Patient</h1>
    <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
          <div className="col-10 col-md-8 col-lg-6">
             
              <form className="form-example" onSubmit={handleSubmit}>
                   
                
        
                    
                    
                    <div className="form-group row" >
                                    <label htmlFor="fname" className="col-sm-2 col-form-label">nationalId:</label>
                                    <div className="col-sm-10">
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.nationalId} onChange={handleInputChange} name="nationalId" required />
                                    </div>
                                    
                    </div>
                    <div className="form-group row">
                        <label htmlFor="firstname" className="col-sm-2 col-form-label">FirstName:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control username" id="fname" placeholder="FirstName..." name="firstName" onChange={handleInputChange} value={values.firstName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="lname" className="col-sm-2 col-form-label">LastName:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control lastname" id="lastname" placeholder="Lastname..." name="lastName" onChange={handleInputChange} value={values.lastName}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="fname" className="col-sm-2 col-form-label">DateOfBirth:</label>
                        <div className="col-sm-10">
                        <input type="date" className="form-control username" id="dob" placeholder="Date of Birth..." name="dob"  onChange={handleInputChange} value={values.dob}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label">Location:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control username" id="location" placeholder="Location..." name="location" onChange={handleInputChange} value={values.location} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label">Religion:</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control username" id="location" placeholder="Religion..." name="religion" onChange={handleInputChange} value={values.religion} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="location" className="col-sm-2 col-form-label">Phone:</label>
                        <div className="col-sm-10">
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
