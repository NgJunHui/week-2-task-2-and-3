import React, { Component } from 'react'
import PropTypes from 'prop-types'


const Question2 = (props) => {
    const { data } = props
    const dataDisplay = data.map(info => {
        return (
            <div key={info.id} className='flex-div'>
                <p>{info.id}.</p>
                <p>{info.name}</p>
                <p>${info.price}</p>
            </div>
        )
    })

    return (
        <div>
            <h2>Question 2: Grocery List</h2>
            {dataDisplay}
        </div>
    )
}

Question2.propTypes = {
    groceryList: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
    }))
}

export default Question2;
