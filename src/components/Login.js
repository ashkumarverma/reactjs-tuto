import React from 'react';

const Login = () => (
    <ul className="nav navbar-nav navbar-right">
        <li>
            <a className="dropdown-toggle" data-toggle="dropdown" href="#" title="Manage">Hello Jebin !</a>
            <ul className="dropdown-menu cssmenu">
                <li><a href="javascript:document.getElementById('logoutForm').submit()">Log Out</a></li>
            </ul>
        </li>
        <li></li>
    </ul>
)

export default Login;