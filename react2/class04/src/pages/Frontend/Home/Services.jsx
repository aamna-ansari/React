import { Typography } from 'antd'
import React from 'react'
const {Title} = Typography

const Services = () => {
  return (
    <div className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Title level={1}>Services</Title>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services