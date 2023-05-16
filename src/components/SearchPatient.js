import {React, useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const SearchPatient = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data,setData]= useState([]);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async () => {

        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/cmds/patients/all', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
    
        if (response.ok) {
          const data = await response.json();
          setData(data);
        } else {
          alert('Failed to fetch data.');
        }
      };
      const handleSearch = (event) => {
      setSearchQuery(event.target.value);
      };
      const filteredData = data.filter((item) => {
        return item.nationalId.toLowerCase().includes(searchQuery.toLowerCase());
      });

    return (
        <div>
          <div className="card">
      <h5 className="card-header">Search Patient</h5>
      <div className="input-group">
  <input type="search" className="form-control rounded" placeholder="Search" value={searchQuery} onChange={handleSearch} aria-label="Search" aria-describedby="search-addon" />
  <button type="button" className="btn btn-outline-primary">search</button>
</div>
    </div>
    <h4 className="text-secondary">Find Patient</h4>
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">N Identification</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Age</th>
          <th scope="col">Details</th>
        </tr>
      </thead>
      <tbody>
       {filteredData && filteredData.map((item)=>{
        return(
            <tr key={item.nationalId}>
            <th scope="row">{item.nationalId}</th>
              <td>{item.nationalId}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.dob}</td>
            
              <td>
              <Link to={`/patient/${item.nationalId}`}>
                <button type="button" class="btn btn-success">More</button>
             </Link>
                </td>
           </tr>
        )
    })}
                
        
      </tbody>
    </table>
        </div>
      )
    }

export default SearchPatient
