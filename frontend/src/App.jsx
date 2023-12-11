import Header from './pages/Header'
import Footer from './pages/Footer'
import { Outlet } from 'react-router-dom'
import ShareModal from './components/modal/Share'

function App() {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      <ShareModal></ShareModal>
    </>
  )
}

export default App
