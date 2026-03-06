import { Link, Outlet, useNavigate } from "react-router-dom";


function HrDashboard() {


let navigate = useNavigate();
    return(
        <>
        <div className="dashboard">
        <input type="button" value="logout"
        onClick={()=>navigate("/")}/>
        <h2>Welcome HR Dashboard</h2>

        <nav>
        <Link to="viewEmployee">View Employees</Link>|
        <Link to="viewLeave">View Leaves</Link>
        </nav>
        </div>
        <div>
            {/*      <!-- This is where the nested routes will be rendered --> */}
            <Outlet />
        </div>
        </>
    )
}

export default HrDashboard