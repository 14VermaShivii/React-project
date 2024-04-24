import { NavLink } from "react-router-dom"
export const Header =() =>{
    return   <div className="container-fluid ">
    <div className="row  sticky-top bg-white">
        <div className="col-md-4">
            <div className="home">

                <div className="text-primary">
                    <h2> <i className="fa-solid fa-landmark text-primary"></i> Easy Cash</h2>

                </div>
            </div>
        </div>
        <div className="col-md-8">
            <NavLink className="Navbar Navbar-expand-lg Navbar-light bg-white  justify-content-end d-flex ">
                <div className="container-fluid">
                    <button className="Navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#NavbarSupportedContent" aria-controls="NavbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle Navigation">
                        <span className="Navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse Navbar-collapse" id="NavbarSupportedContent">
                        <ul className="Navbar-Nav ms-auto mb-2 mb-lg-0">
                            <li className="Nav-item">
                                <NavLink className="Nav-link active" aria-current="page" to="index.html"><b>Home</b></NavLink>
                            </li>
                            <li className="Nav-item">
                                <NavLink className="Nav-link" to="Aboutus.html"><b>About us</b></NavLink>
                            </li>
                            <li className="Nav-item">
                                <NavLink className="Nav-link" to="contactus.html"><b>Contact us</b></NavLink>
                            </li>
                            <li className="Nav-item">
                                <NavLink className="btn btn-primary" to="contactus.html"><b>Get started</b></NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </NavLink>
        </div>
    </div>
</div>
}