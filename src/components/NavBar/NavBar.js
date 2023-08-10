import "./NavbarStyles.css";
import {Component} from "react";
import {Items} from "./Items";
import { Link} from "react-scroll";

class NavBar extends Component {
    state = {clicked: false}
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() {
        return (
            <nav className={"NavbarItems"}>
                <h1 className={"navbar-logo"}>MSJ Datathon</h1>

                <div className={"menu-icons"} onClick={this.handleClick}>

                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {Items.map((item, index) => {
                        return (
                            <Link
                                activeClass="active"
                                to={item.url}
                                spy={true}
                                smooth={true}
                                duration={500}
                            >
                                <li key={index}>
                                    <a className={item.cName}>
                                        <i className={item.icon}></i>
                                        {item.title}
                                    </a>
                                </li>
                            </Link>
                        )
                    }, this)}

                </ul>
            </nav>
        );
    }

}

export default NavBar;