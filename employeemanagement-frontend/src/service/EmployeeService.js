import axios from "axios";

//const BASE_URL = process.env.REACT_APP_BACKEND_URL
const BASE_URL = "http://a182bc1fb47db41b78ab2b0079735aee-1112603073.us-east-1.elb.amazonaws.com/employee";

// const BASE_URL = process.env.REACT_APP_BASE_URL ; // Fallback URL
class EmployeeService{

    //**Method to get all employee from our api or database */
    getAllEmployee(){
        return axios.get(BASE_URL);
    }
    /**MEthod to save employee */
    saveEmployee(employeeData){
        return axios.post(BASE_URL, employeeData);
    }
    updateEmployee(id, employeeData){
        return axios.put(`${BASE_URL}/${id}`, employeeData)
    }
    getEmployeeById(id){
        return axios.get(`${BASE_URL}/${id}`);
    }
    deleteEmployee(id){
        return axios.delete(BASE_URL +"/" +id);
    }

}
export default new EmployeeService();
