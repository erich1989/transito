import Image1 from '../../public/images/negocio.jpg'

const renderServicesIndex = () => {
    const textServices = document.getElementById("services-index");
    textServices.innerHTML += `
  
    <div class="container-fluid marketing px-3 px-md-5 mt-5 pt-5">
  
      <div class="text-center mb-5">
          <h1 class="font-weight-normal">Our services</h1>
      </div>
      
      <div class="row px-0 pr-md-4 py-0 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices Regular shadow">
          <div class="col-12 col-md-4 p-0">
            <div class="text-center mb-4 mb-md-0 columna-izquierda-servicios rounded">
              <img src=${Image1} alt="" class="image-services rounded" width="100%" height="100%">
              <div class="overlay rounded"></div>
            </div>  
          </div>
          <div class="col-12 col-md-5 my-5 p-4 d-flex align-items-center">
            <div class="columna-central-servicios ">
              <h3 class="mb-3 ">title1 <span class="text-muted">title2</span></h3>
                <p class=" lead mb-4 mb-md-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
            </div>  
          </div>
          <div class="col-12 col-md-3 d-flex align-items-center border-left my-5">
            <div class="d-inline-block h-auto w-auto pl-2 pl-md-3">
              <h1 class="number-service">1,500+</h1>
              <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
            </div>  
          </div>
      </div>
  
      <div class="row px-3 pr-md-0 py-0 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices Regular shadow">
          <div class=" col-12 col-md-3 d-flex align-items-center border-right  my-5">
            <div class=" d-inline-block h-auto w-auto pr-2 pr-md-3 text-right">
              <h1 class="number-service">1,500+</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
            </div>   
          </div>
          <div class=" col-12 col-md-5 d-flex justify-content-center align-items-center">
            <div class="columna-central-servicios text-right">
              <h3 class="mb-3 ">title1 <span class="text-muted">title</span></h3>
              <p class=" mb-4 mb-md-0 lead">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
            </div>
          </div>
          <div class="col-12 col-md-4 text-center p-0">
            <div class="text-center mb-4 mb-md-0 columna-izquierda-servicios-2 rounded">
              <img src=${Image1} alt="" class="image-services rounded" width="100%" height="100%">
              <div class="overlay rounded"></div>
            </div> 
          </div>
      </div>
  
      <div class="row px-0 pr-md-4 py-0 mb-5 mx-2 mx-md-5 rounded row-service featurette animadoservices Regular shadow">
          <div class="col-12 col-md-4 p-0">
            <div class="text-center mb-4 mb-md-0 columna-izquierda-servicios rounded">
              <img src=${Image1} alt="" class="image-services rounded" width="100%" height="100%">
              <div class="overlay rounded"></div>
            </div>  
          </div>
          <div class="col-12 col-md-5 my-5 d-flex align-items-center">
            <div class="columna-central-servicios ">
              <h3 class="mb-3 ">title1 <span class="text-muted">title2</span></h3>
                <p class=" lead mb-4 mb-md-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
            </div>  
          </div>
          <div class="col-12 col-md-3 d-flex align-items-center border-left my-5">
            <div class="d-inline-block h-auto w-auto pl-2 pl-md-3">
              <h1 class="number-service">1,500+</h1>
              <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur</p>
            </div>  
          </div>
      </div>
  
      <div class="row text-center">
        <div class="col-12 mb-5">
          <a href="/servicios" class="btn btn-1">View all services <i class="fas fa-arrow-circle-right ml-2"></i></a>
        </div>
      </div>
      <hr class="featurette-divider">
  
    </div>
  
    `
    let animado = document.querySelectorAll(".animadoservices");
  
    function mostrarScroll () {
      let scrollTop = document.documentElement.scrollTop;
      for ( var i = 0; i < animado.length; i++){
        let alturaAnimado = animado [i].offsetTop;
         if(alturaAnimado - 500 < scrollTop){
           animado[i].style.opacity = 1;
           animado[i].classList.add("mostrarArribaService");
         }
      }
    }
    
    window.addEventListener("scroll", mostrarScroll);
  
  }
  
  export default renderServicesIndex;