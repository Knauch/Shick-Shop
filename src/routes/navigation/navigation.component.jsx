import { Link, Outlet } from "react-router-dom"
import './navigation.styles.scss'
import { Fragment } from "react"
import { ReactComponent as Logo } from '../../assets/LOGO.svg'

const Navigation = () => {

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to='/'>
          <Logo className='logo' />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to='/shop'>
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation