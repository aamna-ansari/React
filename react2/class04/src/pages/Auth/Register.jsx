import React , {useState}from 'react'
import { Col, Row, Button, Input, Form, message } from 'antd'

const Register = () => {
  const [state, setState] = useState({fullName: '', email:'', password: '', confirmPassword: ''}); //Object as a parameter


  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})

    // use spread operator for shallow copy 
}
 
const handleSubmit = e => {
    e.preventDefault();
    console.log(state);

    let {fullName, email, password, confirmPassword} = state

    fullName = fullName.trim()
    if (fullName.length<3) {return message.error('Please Enter Your Full name')}
    if (password.length < 6){return message.error("Password must be at least 6 chars.")}

    const user = {fullName, email, password, confirmPassword}
    console.log('user', user);
    
    
}

  return (
    <main className="auth p-3 p-md-4 p-lg-5">
        <div className="container">
            <div className="card p-3 p-md-4">
                <Form layout='vertical'  >
                <Row>
                    <Col span={24}>
                    <Form.Item label = 'Full Name' required>
                    <Input type='text' placeholder='Enter Your First Name' name='fullName' onChange= {handleChange}>
                     </Input>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Email' required>
                    <Input type='email' placeholder='Enter Your Email' name='email' onChange= {handleChange}>
                     </Input>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Password' required>
                    <Input.Password  placeholder='Enter Your Password' name='password' onChange= {handleChange}>
                     </Input.Password>
                    </Form.Item>
                    </Col>

                    <Col span={24}>
                    <Form.Item label = 'Confirm Password' required>
                    <Input.Password  placeholder='Enter Your Password Again'  name='confirmPassword' onChange= {handleChange}>
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