import React from 'react'
import {Button, Typography } from 'antd'

const {Title, Paragraph} = Typography

const Company = () => {
  return (
    <div className='py-5'>
        <div className="container">
            <div className="row">
                <div className="col">
                    <Title level={1}>About Company</Title>
                    <Paragraph>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sint reiciendis hic dicta cum quasi nulla non, explicabo dolorum. Harum possimus placeat amet laudantium facilis quae eveniet eum. Perferendis, tenetur!</Paragraph>
                    <div className="text-center"><Button color="danger" variant="solid">Click Me</Button></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company