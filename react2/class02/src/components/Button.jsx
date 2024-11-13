import React from 'react'

const Button = (props) => {

    // first method 
    // const type = props.type;
    // const text = props.text;

    // first method || Destructuring
    const {type = 'primary', text = 'Button'} = props
  return (
    <>
    <button className= {`btn btn-${type}`}>{text}</button>
    </>
  )
}

export default Button