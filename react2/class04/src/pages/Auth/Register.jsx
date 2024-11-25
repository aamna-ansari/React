import React , {useState}from 'react'
import { Col, Row, Button, Input, Form } from 'antd'

const Register = () => {
  const [state, setState] = useState({fullName: '', email:'', password: '', confirmPassword: ''}); //Object as a parameter


  const handleChange = e => {
    console.log(e.target.value);
    setState({...state, fullName: e.target.value})

    // use spread operator for shallow copy 
}
 
const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    
}

  return (
    <main className="auth p-3 p-md-4 p-lg-5">
        <div className="container">
            <div className="card p-3 p-md-4">
                <Form layout='vertical'  >
                <Row>
                    <Col span={24}>
                    <Form.Item label = 'Full Name' required>
                    <Input type='text' placeholder='Enter Your First Name' name='fullName' onChange={ e => {handleChange}}>
                     </Input>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Email' required>
                    <Input type='email' placeholder='Enter Your Email' name='email'>
                     </Input>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Password' required>
                    <Input.Password  placeholder='Enter Your Password' name='password'>
                     </Input.Password>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Confirm Password' required>
                    <Input.Password  placeholder='Enter Your Password Again'  name='confirmPassword'>
                     </Input.Password>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Button type='primary' block htmlType='submit' onClick={handleSubmit} >Register</Button>
                    </Col>
                </Row>
                </Form>
            </div>
        </div>
    </main>
  )
}

export default Register