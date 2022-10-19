import React, { Component } from 'react'
import PropTypes from 'prop-types';


class Question3 extends Component {
    render() {
        const { firstName, age, email, designation, userName, password } = this.props
        return (
            <div>
                <h2>Question 3: Pass data from one class to another class</h2>
                <p>Name: {firstName}</p>
                <p>Age: {age}</p>
                <p>E-mail: {email}</p>
                <p>Designation: {designation}</p>
                <p>Username: {userName}</p>
                <p>Password: {password}</p>
            </div>

        )
    }
}

const isEmail = function (props, propName) {
    let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(props[propName])) {
        return Error('Invalid Email');
    }
}
const isUserName = function (props, propName) {
    let regex2 = /^[a-zA-Z0-9_.-]*$/;

    if (!regex2.test(props[propName])) {
        return Error('Username can only contain numbers, letters, _ , - and . ');
    }
}
const isPassword = function (props, propName) {
    let regex3 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (!regex3.test(props[propName])) {
        return Error('Invalid Password: Password require minimum 8 characters, at least one letter, one number and one special character');
    }
}

Component.propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    designation: PropTypes.string.isRequired,
    email: isEmail,
    password: isPassword,
    userName: isUserName,
}

Component.defaultProps = {
    firstName: "Jun Hui",
    age: 26,
    email: "junhui.ng@geco.asia",
    designation: "ReactJS Developer",
    userName: "ng_jun_hui",
    password: "Abcd123!"
}

export default Question3;