import React , {useState}from 'react'
import { Col, Row, Button, Input, Form, message } from 'antd'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [state, setState] = useState({email:'', password: ''}); //Object as a parameter

  const navigate = useNavigate();

  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})

    // use spread operator for shallow copy 
}
 
const handleSubmit = e => {
    e.preventDefault();
    console.log(state);

    let { email, password, } = state

  
    if (password.length < 6){return message.error("Password must be at least 6 chars.")}

    const formData = { email, password}
    console.log('formData', formData);
    
    navigate('/')
    
}

  return (
    <main className="auth p-3 p-md-4 p-lg-5">
        <div className="container">
            <div className="card p-3 p-md-4">
                <Form layout='vertical'  >
                <Row>

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
                    <Button type='primary' block htmlType='submit' onClick={handleSubmit} >Login</Button>
                    </Col>
                </Row>
                </Form>
            </div>
        </div>
    </main>
  )
}

export default Login