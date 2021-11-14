import React from "react";

const Header = () => {

  return (
    <>
        <header>
            <section className="container main-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side 
                    d-flex flex-column align-items-start 
                    order-lg-first order-last main-container1">
                        <h1 className="display-2"> 
                            Online Payment Made <br/> Easy For You Guys.
                        </h1>
                        <p className="main-para">
                            This is an online payment system named as Ranjit payment for making 
                            easy for the cutomers buying the necessary products from whereever. 
                            This app is basically developed by an individual. You can use the 
                            different features of it to know about the further details.
                        </p>  
                        <h3> Get an early access for you</h3> 
                        <div className="input-group mt-3">
                            <input type="text" className="ronded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                            placeholder="Enter Your Email"/>
                            <div className="input-group-button">
                                Get it Now
                            </div>
                        </div>
                    </div>

                   {/*-------------------  main header--------------- */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center
                    align-items-center main-image oredr-md-first order-sm-first">
                        <img src="./images/pic1.jpg" 
                        alt="firstpic" 
                        className="img-fluid"/>
                        <img src="./images/pic2.jpg" 
                        alt="firstpic" 
                        className="img-fluid main-image2"/>
                    </div>    
                
                </div>
            </section>
        </header>
    </>
  );
};

export default Header;