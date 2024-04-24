import { NavLink } from "react-router-dom"
export const Footer =() =>{
    return  <div className="container-fluid bg-dark">
    <div className="container">

    <footer className="py-5 bg-dark">
        <div className="row footer-29 py-5 ">
            <div className="col-md-3 ">

                <div className="p">
                    <h4> <i className="fa-solid fa-landmark text-body-secondary"></i> Easy Cash</h4>
                </div>
                <p className="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe qui repellat nam
                    vero
                    consectetur dicta eos suscipit. Numquam at minus architecto asperiores cupiditate. At
                    molestias laborum voluptatibus numquam aperiam in.</p>



            </div>
            <div className="col-md-3">
                <h5 className="p"><b>About</b></h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">How it
                            Works</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">
                            Guarantee</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Security</NavLink>
                    </li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Our story</NavLink>
                    </li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Contact
                            Us</NavLink></li>
                </ul>
            </div>

            <div className="col-md-3">
                <h5 className="p"><b>Solution</b></h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Car Loan</NavLink>
                    </li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Personal
                            Loan</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Education
                            Loan</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Business
                            Loan</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Home Loan</NavLink>
                    </li>
                </ul>
            </div>


            <div className="col-md-3">
                <h5 className="p"><b>Need Help?</b></h5>
                <ul className="nav flex-column">
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Find a
                            Branch</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">FAQs</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">APR</NavLink></li>
                    <li className="nav-item mb-2"><NavLink to="#" className="nav-link p-0 text-body-secondary">Contact us
                        </NavLink></li>

                </ul>
            </div>


            <div className="bottom-copies text-center">
                <div className="p">
                    <p className="copy-footer-29">© 2020 Easy cash. All rights reserved | Designed by <NavLink
                            to="https://w3layouts.com">W3layouts</NavLink></p>
                </div>
            </div>
            <ul className="list-unstyled d-flex">
                <li className="ms-3"><NavLink className="link-body-emphasis" to="#"><svg className="bi" width="24" height="24">
                            <use xlink:to="#twitter"></use>
                        </svg></NavLink></li>
                <li className="ms-3"><NavLink className="link-body-emphasis" to="#"><svg className="bi" width="24" height="24">
                            <use xlink:to="#instagram"></use>
                        </svg></NavLink></li>
                <li className="ms-3"><NavLink className="link-body-emphasis" to="#"><svg className="bi" width="24" height="24">
                            <use xlink:to="#facebook"></use>
                        </svg></NavLink></li>
            </ul>
</div>

    </footer>
</div>
</div>
}