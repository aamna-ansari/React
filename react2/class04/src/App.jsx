import { ConfigProvider } from 'antd'
import './App.scss'
import Routes from './pages/Routes'



function App() {
  return (
    <>
    

    <ConfigProvider theme= {{token:{colorPrimary: '#1d3557'}}}> 
      <Routes/>
    </ConfigProvider>
    </>
  )
}

export default App
