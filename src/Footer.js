import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About us</a>
                        <p className="about">This company provides excllent feature of online payment for different sectors.
                        It also have access to the online banking system. It is an free platform where you can easily send and receive money for various purposes.
                        </p>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Read</a>
                        <p className="about">Keep on supporting the company for knowing about new technology in the field of online payment system.
                        </p>
                    </li>
            
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Contact Us</h2>
                  <ul>
                    <li>
                        <a href="#">Contact Details</a>
                            <p className="about">Phone: +977-9864588276 <br/>E-mail: ranjitadki98@gmail.com <br/> Telephone: 01-5624233
                            </p>
                    </li>
                  
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                  <div className="row">
                    <div className="col-3 mx-auto">
                        <a 
                            href="https://www.facebook.com/ranjit.xettri.54"
                            target="_ranjit">
                        <i class="fab fa-facebook-f fontawesome-style"></i>
                        </a>
                    </div>
                    <div className="col-3 mx-auto">
                      <a
                        href="https://www.instagram.com/ranjit_jung_chettri/"
                        target="_ranjit">
                        <i class="fab fa-instagram fontawesome-style"></i>
                      </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a
                            href="https://www.youtube.com/"
                            target="_ranjit">
                        <i class="fab fa-youtube fontawesome-style"></i>
                        </a>
                    </div>
                    <div className="col-3 mx-auto">
                        <a
                            href="https://twitter.com/RanjitA39315702"
                            target="_ranjit">
                        <i class="fab fa-twitter fontawesome-style"></i>
                        </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div className="mt-5">
                <p className="main-para text-center w-100">
                  Copyright @ 2021 RanjitPay. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
