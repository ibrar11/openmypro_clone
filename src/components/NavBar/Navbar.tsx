import Link from "next/link";
import DocFileIcon from "../icons/DocFileIcon";
import InfoCircleIcon from "../icons/InfoCircleIcon";
import MenuIcon from "../icons/MenuIcon";
import SearchIcon from "../icons/SearchIcon/SearchIcon";
import ShieldIcon from "../icons/ShieldIcon";
import "./NavBar.css"

type NavBarProps = {
  handleDrawer: (...args: void[]) => unknown
}

export default function Navbar({handleDrawer}: NavBarProps) {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo-container">
          <Link href="/">
            <img 
              src="https://www.openmypro.com/_next/image?url=%2Fassets%2Fimages%2FOMDLogo.png&w=96&q=100" 
              alt="logo" 
              width={45}
              height={40}
            />
          </Link>
        </div>
        <div className="navbar-searchBar-container">
          <div className="navbar-searchBar-subContainer">
            <div className="navbar-searchBar-menuIcon">
              <button className="navbar-searchBar-menuIcon-button">
                <MenuIcon
                  handleDrawer = {handleDrawer}
                />
              </button>
            </div>
            <div className="wireless-pro-container">
              <select className="wireless-pro-menu">
                <option value="doctor">Wellness Pro</option>
                <option value="symptom">Symptoms</option>
                <option value="speciality">Speciality</option>
                <option value="location">Location</option>
              </select>
            </div>
            <input 
              type="text"
              autoFocus
              autoComplete="off"
              className="searchBar"
              placeholder="Search Pro Name"
            />
            <button className="search-button">
              <SearchIcon/>
            </button>
          </div>
        </div>
        <div className="navbar-aboutCompany-container">
          <div className="aboutCompany-collapseMenu">
            <ul className="aboutCompany-collapseMenu-container">
              <li className="aboutCompany-collapseMenu-list-container">
                <span className="aboutCompany-collapseMenu-text">Company</span>
                <ul className="aboutCompany-collapseMenu-list">
                  <li className="aboutCompany-collapseMenu-list-item">
                    <Link 
                      className="aboutCompany-item-option" 
                      href="https://www.blossend.com/about"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <InfoCircleIcon/>
                      About
                    </Link>
                  </li>
                  <li className="aboutCompany-collapseMenu-list-item">
                    <Link 
                      className="aboutCompany-item-option" 
                      href="https://www.blossend.com/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ShieldIcon/>
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="aboutCompany-collapseMenu-list-item">
                    <Link 
                      className="aboutCompany-item-option" 
                      href="https://www.blossend.com/Terms&Conditions"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <DocFileIcon/>
                      Terms of Service
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="aboutCompany-border"></div>
          <button className="aboutCompany-signin-button">
            Sign in
          </button>
          <Link href="/signup">
            <button className="aboutCompany-signup-button">Sign up</button>
          </Link>
        </div>
      </div>
    </header>
  );
}
