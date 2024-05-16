import { faLandmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from "react-router-dom"
export const Header = () => {
    return <div className="container-fluid ">
        <div className="row  sticky-top bg-white">
            <div className="col-md-5">
                <div className="home">

                    <div className="text-primary">
                        <h2> <FontAwesomeIcon icon={faLandmark} /> Digital Banking</h2>

                    </div>
                </div>
            </div>

            <div className="col-md-5">
                <ul className="nav justify-content-end">
                    <li className="nav-iteam">
                        <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                    </li>

                    <li className="nav-iteam">
                        <NavLink className="nav-link " to="/about">About</NavLink>
                    </li>
                    <li className="nav-iteam">
                        <NavLink className="nav-link " to="/contact">Contact</NavLink>
                    </li>
                </ul>

            </div>
            <div className="col-md-2">
                <div className="btn btn-primary btn-lg float-end center">Get started</div>
            </div>

        </div>
    </div>
}