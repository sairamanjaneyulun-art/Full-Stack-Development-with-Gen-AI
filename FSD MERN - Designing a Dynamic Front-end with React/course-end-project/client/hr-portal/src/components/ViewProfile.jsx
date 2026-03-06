import { useEffect, useState, useCallback } from "react";
import { viewEmployees } from "../service/employeeService";

function ViewProfile() {
let [employee,setEmployee] = useState({});
let employeeEmail = localStorage.getItem("employeeEmail");

let viewProfileDetails = useCallback(async () => {
    try {
        const result = await viewEmployees();       // load all employee details. 
        const searchEmployee = result.find((emp) => emp.email === employeeEmail);   // search the employee details based on email id.
        setEmployee(searchEmployee);

    } catch (error) {
        console.log(error.message);
    }
}, [employeeEmail]);

useEffect(()=> {
    viewProfileDetails(); // eslint-disable-line react-hooks/set-state-in-effect
}, [viewProfileDetails])
    return(
        <div>
            <h1>View Profile</h1>
            {employee ? (
                <>
                    <p>First Name: {employee.fname}</p>
                    <p>Last Name: {employee.lname}</p>
                    <p>Age: {employee.age}</p>
                    <p>Email: {employee.email}</p>
                </>
            ) : (
                <p>Loading profile...</p>
            )}
        </div>
    )
}

export default ViewProfile;    