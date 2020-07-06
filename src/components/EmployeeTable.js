import React from "react";

function EmployeeTable(props) {
    return(
        <table className="table table-dark">
            <thead>
            <tr>
                <th scope="col">Thumbnail</th>
                <th scope="col">Name</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">City</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
            </tr>
            </thead>
            {props.children}
        </table>
    )
}

export default EmployeeTable