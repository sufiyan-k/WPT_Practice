import { useState } from "react";
import {useHistory} from 'react-router-dom';
import EmployeeService from "./EmployeeService";

const EmployeeAdd=()=>{
    let history=useHistory();
    let [empob,setempob]=useState({empid:"", ename:"", sal:""});
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setempob({...empob,[name]:value});
    }
    const adddata=()=>{
        EmployeeService.addEmployee(empob)
        .then((response)=>{
            console.log(response.data);
            history.push("/list");
        })
        .catch(()=>{})
    }
    return(
    <div>
        <h1>In add emp component</h1>
    <form>
  <div className="form-group">
    <label htmlFor="empid">Employee id</label>
    <input type="text" className="form-control" name="empid" id="empid" placeholder="Enter id"
    onChange={handleChange}
    value={empob.empid}
    />
   
  </div>
  
  <div className="form-group">
    <label htmlFor="ename">Employee Name</label>
    <input type="text" className="form-control" name="ename" id="ename" placeholder="Enter name"
    onChange={handleChange}
    value={empob.ename}/>
  </div>

  <div className="form-group">
    <label htmlFor="sal">Employee salary</label>
    <input type="text" className="form-control" name="sal" id="sal" placeholder="Enter sal"
    onChange={handleChange}
    value={empob.sal}/>
  </div>

  <button type="button" className="btn btn-primary" onClick={adddata}>Add Emp</button>
</form>
    </div>
    );

}
export default EmployeeAdd;