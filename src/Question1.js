import React from 'react'
import data from "./Data";


const handleHover = (data) => {
    alert(`
    Name: ${data.name}
    Age:${data.age}
    DOB: ${data.dob}
    Salary:${data.salary}
    Designation:${data.designation}
    Department:${data.department}
    `)
}

const displayData = data.employeeData.map(info => {
    return (
            <div key={info.id} className='employee-card'>
                <img src={info.image} className='employee-image' />
                <h4 onMouseOver={() => handleHover(info)}>{info.name}</h4>
                <p>{info.designation}</p>
            </div>
    )
});


const Question1 = () => {
    return (
        <div>
            <h2>Question 1: Employees Data</h2>
            <div className="flex-div">
                {displayData}
            </div>
        </div>
    )
}

export default Question1;