import {Outlet} from 'react-router-dom'
import Navigation from '../COMPONENTS/Navigation'
import Footer from '../COMPONENTS/Footer'

const MainLayOut = () => {
  return (
    <>
    <Navigation/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayOut