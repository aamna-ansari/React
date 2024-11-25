import React , {useState}from 'react'
import { Col, Row, Button, Input, Form } from 'antd'

const Register = () => {
  const[fullName, setFullName] = useState('')
  
const handleSubmit = e => {
    e.preventDefault();
    console.log("fullName",fullName);
    
}

  return (
    <main className="auth p-3 p-md-4 p-lg-5">
        <div className="container">
            <div className="card p-3 p-md-4">
                <Form layout='vertical'  >
                <Row>
                    <Col span={24}>
                    <Form.Item label = 'Full Name' required>
                    <Input type='text' placeholder='Enter Your First Name' name='fullName' onChange={(e)=>{setFullName("e.target.value:" , e.target.value);
                    }}>
                     </Input>
                    </Form.Item>
                    </Col>
                </Row>
                </Form>
            </div>
        </div>
    </main>
  )
}

export default Register