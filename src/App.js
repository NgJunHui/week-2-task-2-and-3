
import "./App.css"
import React, { Component } from 'react'
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
class App extends Component {
    groceryList = [{
        id:1,
        name: "Tomato",
        price: 1.20,
    },{
        id:2,
        name: "Ice-cream",
        price: 6.80,
    },{
        id:3,
        name: "Bread",
        price: 2.40,
    },{
        id:4,
        name:"Strawberries",
        price:4.80,
    },{
        id:5,
        name:"Honey",
        price:3.70
    }]

    state = {
        firstName: "Jun Hui",
        age: 26,
        email: "junhui.ng@geco.asia",
        designation: "ReactJS Developer",
        userName: "ng_jun_hui",
        password: "Abcd123!"
    }

    render() {
        return (
            <div>
                <Question1/>

                <Question2
                data={this.groceryList}
                />

                <Question3
                    firstName={this.state.firstName}
                    age={this.state.age}
                    email={this.state.email}
                    designation={this.state.designation}
                    userName={this.state.userName}
                    password={this.state.password}
                />
            </div>
        )
    }
}

export default App;