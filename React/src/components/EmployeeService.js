import axios from "axios";
class EmployeeService{
    constructor(){
        this.url="http://localhost:4000/";
    }
    getEmployee(){
        return axios.get(this.url+"employee");
    }
    addEmployee(empob){
        return axios.post(this.url+"employee",empob);

    }
    updateEmployee(emp){
        alert("in update data 2")
        return axios.put(this.url+"employee/"+emp.empid,emp);
    }
}
export default new EmployeeService();
