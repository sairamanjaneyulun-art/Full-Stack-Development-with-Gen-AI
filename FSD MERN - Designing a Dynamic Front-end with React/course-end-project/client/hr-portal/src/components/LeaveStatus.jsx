import { useEffect, useState, useCallback } from "react";
import { viewLeaveDetails } from "../service/leaveService";

function LeaveStatus() {
    let [leaves, setLeaves] = useState([]);
    let employeeEmail = localStorage.getItem("employeeEmail");

    let loadLeaves = useCallback(async () => {
        try {
            const result = await viewLeaveDetails();
            setLeaves(result.filter(leave => leave.employeeEmail === employeeEmail));
        } catch (error) {
            console.log(error.message);
        }
    }, [employeeEmail]);

    useEffect(() => {
        loadLeaves(); // eslint-disable-line react-hooks/set-state-in-effect
    }, [loadLeaves]);

    return (
        <div>
            <h1>My Leave Status</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Number of Leaves</th>
                        <th>Reason</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((leave) => (
                        <tr key={leave.id}>
                            <td>{leave.numberOfLeaves}</td>
                            <td>{leave.reasonForLeave}</td>
                            <td>{leave.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LeaveStatus;