import React from "react";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
const Common=(props)=>{
    return(<>
        <section id="header" className='d-flex align-items-centre'>
        <div className="container-fluid mb-100">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className='row'>
                    <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                        <h1>
                            <span className="text-light">{props.name}</span><br/> <strong className='brand-name ' style={{textAlign : "centre"}}>  CRYPTORADAR </strong>
                        </h1>
                        <h3 className='mv-3 text-light'>
                        "Cryptocurrency is the democratization of money." - Naval Ravikant
                        </h3> 
                        <div className='mt-3 '>
                            <NavLink to={props.visit} className='btn-get-started'>
                                {props.btname}
                            </NavLink>
                        </div>
                    </div>
                        <div className='col-lg-6 order-1 order-kg-2 header-img'>
                            <img src={props.imgsrc} className='img-fluid animated'  alt="Profile"/>
                        </div>
                        </div>

                        {/* <Footer/> */}
                </div>
                <br/>
                 <Footer/>
            </div>
        </div>
        </section>
    </>)
}

export default Common;