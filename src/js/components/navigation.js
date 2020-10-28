import facebook from '../../public/images/facebookblanco.svg';
import whatsapp from '../../public/images/whatsappblanco.svg';
import instagram from '../../public/images/instagramblanco.svg';
import twitter from '../../public/images/gorjeoblanco.svg';

const renderNavigation = () =>{
    const contentNavigation = document.getElementById('navigation');
    contentNavigation.innerHTML = `
        <div class="header-top-line bg-primary">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-8">
                        <nav class="navbar navbar-expand navbar-dark navbar-short justify-content-center justify-content-md-between w-100">
                            <ul class="navbar-nav">
                                <li class="nav-item mr-3">
                                    <img src=${facebook} alt="" width="20px">
                                </li>
                                <li class="nav-item mr-3">
                                    <img src=${whatsapp} alt="" width="22px">
                                </li>
                                <li class="nav-item mr-3">
                                    <img src=${instagram} alt="" width="21px">
                                </li>
                                <li class="nav-item mr-3">
                                    <img src=${twitter} alt="" width="22px">
                                </li> 
                            </ul>
                        </nav>
                    </div>
                    <div class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                        <span class="navbar-text text-uppercase">
                            <span class=" mr-1" style="color: rgba(255,255,255,.7)" >Llamanos: </span> 
                            <span class="text-white mr-1"> 301-210-04-88 <i class="fas fa-phone-alt"></i></span>
                        </span>
                    </div> 
                </div>
            </div>
        </div>
  
  <div class="header-main bg-white">
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-expand-lg navbar-light w-100" id="header-navbar">
          <a class="navbar-brand font-weight-bold" href="index.html">PROFI</a> 
          <button class="navbar-toggler"
              type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse" id="navbarSupportedContent" style="">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#about">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#services">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#team">Team</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#cases">Case results</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#testimonials">Testimonials</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-uppercase px-4 py-4" data-toggle="smooth-scroll" href="#contacts">Contacts</a>
                </li>
              </ul>
              <div class="navbar-spacer"></div><a class="btn btn-outline-primary text-nowrap rounded-0" href="#contacts"
                data-toggle="smooth-scroll" target="_blank">BOOK NOW</a>
            </div>
          </nav>
        </div>
      </div>
    </div>
 
    `
}

export default renderNavigation;