import { useEffect, useState } from "react"
import EmployeeService from "./EmployeeService";
import { Link } from "react-router-dom";

const Employeelist=()=>{
    let [emparr,setemparr]=useState([]);
    //initializing data
   useEffect(()=>{
    EmployeeService.getEmployee()
    .then((respone)=>{
        setemparr(respone.data);
    })
    .catch((err)=>{
        console.log("error occuered");
    })

   },[]);
    
    const renderlist=()=>{
        return emparr.map((emp)=>{
         return <tr key={emp.empid}><td>{emp.empid}</td><td>{emp.ename}</td><td>{emp.sal}</td>
         <td>
            <Link to={{pathname:`/edit/${emp.empid}`, state:{employee:emp}}}>
         <button type="button" className="btn btn-primary" id="edit" >edit</button>
         </Link>
         </td>
         </tr>
        }
        )
    }

    return(
        <div>
            <Link to="/addemp">
            <button type="button" id="btn" className="btn btn-primary" >Add Employee</button>
            </Link>
            <table border="2">
                <th>Empid</th><th>Name</th><th>sal</th>
                <tbody>
                    {renderlist()}
                </tbody>
            </table>

        </div>

    )
}
export default Employeelist;