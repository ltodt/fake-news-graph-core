import React, {Component} from "react";
import {Link} from "react-router";


import styled from 'styled-components';


class Header extends Component {
    render() {
        return (
            <div id="header1">
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="side-pad" id="nav-logo-container">
                                <Link to="/" href="/"><img src="img/logo.png"/></Link>
                            </div>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                            <ul className="nav navbar-nav navbar-right side-pad-sides">
                                <li><Link to="/" className="header-link" href="/">home</Link></li>
                                <li><Link to="/">HELP</Link></li>
                                <li><Link to="/">ABOUT</Link></li>
                                <li><Link to="/">CONTACT</Link></li>
                                <li><Link className="header-link" to={"/impressum"}>Impressum</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );
    }
}

export default Header;