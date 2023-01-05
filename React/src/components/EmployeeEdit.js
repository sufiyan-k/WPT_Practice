import { useEffect, useState } from "react";
import { useLocation,useHistory } from "react-router-dom";
import EmployeeService from "./EmployeeService";

const EmployeeEdit=()=>{
    let [empob,setempob]=useState({empid:"",ename:"",sal:""});
    let state=useLocation().state;
    let history=useHistory();

    useEffect(()=>{
        setempob({...state.employee})
        //alert(state.employee);
        
    },[])
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setempob({...empob,[name]:value});
    }

    const updatedata=()=>{
        EmployeeService.updateEmployee(empob)
        .then((result)=>{
          console.log(result.data);
          history.push("/list");
        })
        .catch((err)=>{
        })
    }
    return(
        <div>
<form>
  <div className="form-group">
    <label htmlFor="empid">Employee id</label>
    <input type="text" className="form-control" name="empid" id="empid" 
    value={empob.empid}
    onChange={handleChange}
    />
   
  </div>
  
  <div className="form-group">
    <label htmlFor="ename">Employee Name</label>
    <input type="text" className="form-control" name="ename" id="ename" 
    value={empob.ename}
    onChange={handleChange}/>
  </div>

  <div className="form-group">
    <label htmlFor="sal">Employee salary</label>
    <input type="text" className="form-control" name="sal" id="sal" 
    value={empob.sal}
    onChange={handleChange}/>
  </div>

  <button type="button" className="btn btn-primary" onClick={updatedata}>Submit data</button>
</form>
        </div>
    )
}
export default EmployeeEdit;