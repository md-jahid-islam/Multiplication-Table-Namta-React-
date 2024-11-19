 import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
 import './App.css'
 import Layout from './Layouts/Layout'
 import Home from './Pages/Home'
 import Login from './Pages/Login'
 import SignUp from './Pages/SignUp'
 import ResetPss from './Pages/ResetPss'
 import About from './Pages/About'

 function App() {
 const mainroute = createBrowserRouter(
 createRoutesFromElements(
 <Route >
 <Route path='/' element = {<Layout/>}>
 <Route index element = {<Home/>}/>
 <Route path='/Login' element = {<Login/>} />
 <Route path='/About' element = {<About/>} />

 <Route path='/SignUp' element = {<SignUp/>} />
 <Route path='*' element = {<ResetPss/>} />

 </Route>
 </Route>

 )
 )

 return (
 <>
 <RouterProvider router={mainroute}/>

 </>
  )
 }
 export default App
