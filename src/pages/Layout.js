import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div className="dev">
            <nav className="navbar">
                <div className="homeButton">
                    <Link to="/">Shreya</Link>
                </div>
                <div className="menubar">
                    <div className="menu-item">
                        <Link to="/gallery">Gallery</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/projects">Projects</Link>
                    </div>
                    <div className="menu-item">
                        <Link to="/resume">Resume</Link>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    )
}

export default Layout;