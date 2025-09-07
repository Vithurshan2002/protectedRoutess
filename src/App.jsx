import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Setting from './Pages/Setting'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/setting' element={<Setting/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
