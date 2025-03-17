import './NavBar.css'
const NavLinks = (props) => {
    return (     
        <ul>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/mainsite">Home</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/mainsite/#/training">Training</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/mainsite/#/about">About</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/mainsite/#/blog">Blog</a>
            </li>
            <li onClick = {() =>props.isMobile && props.closeMobileMenu()}>
                <a href="/mainsite/#/contact">Contact</a>
            </li>
        </ul>
        
      );    
}
export default NavLinks;
/*
            <li>
                <a href="/#/npm start">Home</a>
            </li>
            <li>
                <a href="/#/portfolio/about">About</a>
            </li>
            <li>
                <a href="/#/portfolio/contact">Contact</a>
            </li>
*/