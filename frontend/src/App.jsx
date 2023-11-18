import './App.css'
import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from "react-router-dom";


function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </>
  )
}

export default App
