import { Link } from "react-router-dom"

function Layout(){
    return(
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home page</Link> 
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
        <outlet/>
        </>
    )
}
export default Layout