import React, {Component} from "react";



class EmployeeTable extends Component {
    
    render() {

        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Name</th>
                    <th scope="col">Date of Birth</th>
                    <th scope="col">City</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable