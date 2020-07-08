import React, {Component} from "react";
import API from "../utils/API";
import EmployeeField from "./EmployeeField"



class EmployeeTable extends Component {
    state = {
        results:[]
    }

    componentDidMount() {
        this.getEmployees()
        console.log(this.state.results)
    }

    getEmployees = () => {
        API.search()
        .then(res => {
            this.setState({ results: res.results })
            console.log(res)
        })
        .catch(err => console.log(err))
    }


    render() {

        return(
            <table className="table">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">Thumbnail</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">City</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                </tr>
                </thead>
                <tbody>
                {this.state.results.map(result => (
                    <EmployeeField 
                    thumbnail={result.picture.thumbnail}
                    firstName={result.name.first}
                    lastName={result.name.last}
                    dateOfBirth={result.dob.age}
                    city={result.location.city}
                    email={result.email}
                    phoneNumber={result.phone}
                    />
                ))}
                </tbody>
            </table>
        )
    }
}

export default EmployeeTable