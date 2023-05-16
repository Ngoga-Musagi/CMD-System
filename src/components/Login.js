import {React , useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const navigate = useNavigate();
 // Function to handle login form submission
 const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch('http://localhost:8080/users/authenticate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (response.ok) {
    const { token } = await response.json();
    setToken(token);
    localStorage.setItem('token', token);
    alert("OK")
    console.log(token);
    navigate("/patient")
  } else {
    alert('Login failed.');
  }
};
  return (
    <div>
        <section className="vh-100" style={{backgroundColor: '9A616D'}}>
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-xl-10">
        <div className="card" style={{borderRadius: '1rem'}}>
          <div className="row g-0">
            <div className="col-md-6 col-lg-5 d-none d-md-block">
              <img src="https://rbc.gov.rw/fileadmin/templates/web/images/welcomerbc.jpg"
                alt="login form" className="img-fluid" style={{borderRadius: '1rem 0 0 1rem'}} />
            </div>
            <div className="col-md-6 col-lg-7 d-flex align-items-center">
              <div className="card-body p-4 p-lg-5 text-black">

                <form onSubmit={handleLogin}>

                  <div className="d-flex align-items-center mb-3 pb-1">
                    <i className="fas fa-cubes fa-2x me-3" style={{color: '#ff6219'}}></i>
                    <span className="h1 fw-bold mb-0">CMDS</span>
                  </div>

                  <h5 className="fw-normal mb-3 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>

                  <div className="form-outline mb-4">
                    <input type="email" id="username" className="form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <label className="form-label" htmlFor="username">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="password" className="form-control form-control-lg" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label className="form-label" htmlFor="password">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-dark btn-lg btn-block" type="submit">Login</button>
                  </div>

                  <a className="small text-muted" href="#!">Forgot password?</a>
                  <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <a href="#!"
                      style={{color: '#393f81'}}>Register here</a></p>
                  <a href="#!" className="small text-muted">Terms of use.</a>
                  <a href="#!" className="small text-muted">Privacy policy</a>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
    
  )
}

export default Login
