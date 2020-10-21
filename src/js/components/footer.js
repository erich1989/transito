import georjeo from "../../public/images/gorjeoblanco.svg";
import instagram from "../../public/images/instagramblanco.svg";
import whatsapp from "../../public/images/whatsappblanco.svg";
import facebook from "../../public/images/facebookblanco.svg";

function Footer () {
  const textFooter = document.getElementById("footer");
  textFooter.innerHTML += `
  <div class="container-fluid container-footer mt-5">
        <div class="row p-4 p-md-5 ">
          <div class="col-sm-12 col-md-4 mb-5 mb-md-0 d-flex justify-content-center align-items-center flex-column">
            <div class="d-flex justify-content-start align-items-start box-logofooter">
              <img src="" alt="" width="120" height="40" alt="logo transito" class="mb-3" />
            </div>
            <div class="text-left">
              <h5 class="mb-3">Contáctanos:</h5>
              <p>Cel:3012100844</p>
              <p>Correo:compudev@gmail.com</p>
              <div class="d-flex justify-content-start align-items-start box-redesfooter">
                <img src=${georjeo} style="width:25px;" class="mr-2"/>
                <img src=${instagram} alt="" style="width:25px;" class="mr-2"/>
                <img src=${whatsapp} alt="" style="width:25px;" class="mr-2"/>
                <img src=${facebook} alt="" style="width:25px;" class="mr-2"/>
            </div>
            </div>
            
          </div>
          <div class="col-sm-12 col-md-4 mb-5 mb-md-0 d-flex justify-content-center align-items-center flex-column text-left">
            <div>
                <h4>Tenemos para ti:</h4>
                <p>Servicio de domicilio</p>
                <p>Servicio de calidad</p>
                <p>Los mejores precios</p>
              </div>
          </div>
          <div class="col-sm-12 col-md-4 d-flex justify-content-center align-items-center flex-column text-left">
            <div>
              <h4>Nuestros servicio:</h4>
              <p>Formateo de S.O</p>
              <p>Instalación de programas</p>
              <p>Limpieza y mantenimiento</p>
            </div>
          </div>
        </div>
        <div class="row pl-3 pr-3 div-terminos d-flex justify-content-center align-items-center flex-row">
          <div class="col-12 col-md-6 text-center">
            <p>CompuDev© 2017- 2020 Todos los derechos reservados</p>
          </div>
          <div class="col-12 col-md-6 mb-3 text-center terminos">
            <a class="mr-3">Términos y condiciones</a>
            <a class="mr-3">Política de privacidad</a>
            <a class="mr-3">Políticas de Cookies</a>
          </div>
        </div>
      </div>
  
  `
}
export default Footer;