import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Setting from './Pages/Setting'
import ProtectedRoute from './ProtectedRoute'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
     
      <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      <Route path='/login' element={<Login/>}/>
       <Route element={<ProtectedRoute/>}>
        <Route path='/setting' element={<Setting/>}/>
      </Route>
    
    </Routes>
    </BrowserRouter>
  )
}

export default App
