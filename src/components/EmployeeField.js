import React from "react";


function EmployeeField(props) {
    return(<tr>
        <td>
            <image src={props.thumbnail} />
        </td>
        <td>
            {props.firstName} {props.lastName}
        </td>
        <td>
            {props.dateOfBirth}
        </td>
        <td>
            {props.city}
        </td>
        <td>
            {props.email}
        </td>
        <td>
            {props.phoneNumber}
        </td>
    </tr>
    )
}

export default EmployeeField