import './Header.css'

function Header() {
    return (
        <div className="hootsuite-header">
            <div className="navigation">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Hootsuite_logo.png"></img>
                <ul>
                    <li>
                        <a href="#">Platform</a>
                    </li>
                    <li>
                        <a href="#">Plans</a>
                    </li>
                    <li>
                        <a href="#">Enterprise</a>
                    </li>
                    <li>
                        <a href="#">Resources</a>
                    </li>
                    <li>
                        <a href="#">Education</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="user-actions">
                <a href="#">Log In</a>
                <a href="#">Sign Up</a>
            </div>
        </div>
    );
}

export default Header;
