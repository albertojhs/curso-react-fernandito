import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">

                <NavLink 
                    className={ (args) => {
                        return args.isActive ? 'nav-link active' : 'nav-link';
                    }}
                    to='/'>
                    Home
                </NavLink>

                <NavLink 
                    className={ (args) => {
                        return args.isActive ? 'nav-link active' : 'nav-link'
                    }}
                    to='about'>
                    About
                </NavLink>

                <NavLink 
                    className={ (args) => {
                        return args.isActive ? 'nav-link active' : 'nav-link'
                    }}
                    to='login'>
                    Login
                </NavLink>

                {/* <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li> */}

              </ul>
            </div>
          </div>
        </nav>
    </>
  )
}
