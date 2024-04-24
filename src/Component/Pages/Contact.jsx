import { NavLink } from "react-router-dom"
export const Contact =() =>{
    return <>
    <div className="container-fluid p-0">
        <div className="row py-1">
            <div className="col-md-12">

                <section className="w3l-inner-banner-main">
                    <div className="about-inner about editContent">
                        <div className="container">
                            <div className="breadcrumbs-sub">
                                <ul className="breadcrumbs-custom-path">
                                    <li className="right-side propClone"><NavLink href="index.html" className="editContent">Home <span
                                                className="fa fa-angle-right" aria-hidden="true"></span></NavLink>
                                        <p></p>
                                    </li>
                                    <li className="active editContent">About</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>




            </div>


        </div>
    </div>

    <br />

    <div className="container">
        <div className="col-md-12">
            <div className="main-titles-head left-border">
                <div className="row px-4">
                    <h2>Get In Touch</h2>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic fuga sit illo <br />modi aut aspernatur
                    tempore laboriosam saepe dolores eveniet.
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row py-5">
            <div className="col-md-4 ">
                <label className="fa fa-phone text-primary "><span className="px-3 text-color">Call us</span></label>


    <div className="cont-right ">

                    <p className="para "><NavLink href="tel:+44 99 555 42">+123 45 67 89</NavLink></p>
                </div>
            </div>
            <div className="col-md-4">

                <label className="fa-regular fa-envelope text-primary"><span className="px-3 text-color">Email Us</span></label>
                <div className="cont-top margin-up">
                    <div className="cont-left text-center">

                    </div>
                    <div className="cont-right">

                        <p className="para text-dark"><NavLink href="mailto:example@mail.com" className="mail text-color">example@mail.com</NavLink>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <label className="fa fa-map-marker text-primary"><span className="px-3 text-color">Address</span></label>
                <div className="cont-top margin-up">
                    <div className="cont-left text-center">

                    </div>
                    <div className="cont-right ">

                        <p> California, #32841 block,
                            #221DRS 75 West Rock, Maple Building, UK.</p>

                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container">
        <div className="row py-5">
            <div className=" col-md-6">
                <form action="https://sendmail.w3layouts.com/submitForm" method="post">
                    <div className="twice-two py-1">

                       

                        <div className="col grd">
                            <input type="text" className="form-control" name="w3lName" id="w3lName" placeholder="Name"
                                required="" />


                            <input type="email" className="form-control" name="w3lSender" id="w3lSender" placeholder="Email"
                                required="" />
                        </div>
                    </div>
                    <div className="">
                        <input type="text" className="form-control grd" name="w3lSubject" id="w3lSubject"
                            placeholder="Subject" required=""/>
                    </div>
                    <textarea name="w3lMessage" className="form-control grd txtarea" id="w3lMessage" placeholder="Message"
                        required=""></textarea>
                    <button type="submit" className="btn btn-contact bg-primary  float-end grd">Send Message</button>
                </form>
            </div>

            <div className="map-iframe col-md-6">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                    width="100%" height="350" ></iframe>
            </div>
        </div>
    </div>

    

    </>
}