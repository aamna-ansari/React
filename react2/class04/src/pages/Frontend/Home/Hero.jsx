import React from 'react'
import {Typography }from 'antd'

const {Title} = Typography

const Hero = () => {
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Hero</h1>
                    <Title level={1}>Hero</Title>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero