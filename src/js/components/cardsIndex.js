import asesoria from '../../public/images/petition.svg';
import calidadNegro from '../../public/images/calidadnegro.svg';

const renderCardsIndex = () => {
    const contentCardsIndex = document.getElementById('cards-index');
    contentCardsIndex.innerHTML = `
    <div class="container-fluid  p-3 p-md-5">
    <div class="row mt-5">
      <div class="col-12">
        <div>
          <p class="m-0 parrafo-primario-services" style="color: #9b9b9b">AREAS OF PRACTICES</p>
          <h1 class="mb-5">Services</h1>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-3 animadoproposal mb-3 mb-md-3">
        <div class="bg-white p-5">
          <img src=${asesoria} alt="" width="50px" class="mb-3">
          <h2>Hello world</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit harum assumenda incidunt excepturi eligendi quasi labore repudiandae. Voluptatem, labore.</p>
          <a href="" class="border-bottom border-primary pb-2 text-decoration-none ">LEARN MORE</a>
        </div>
      </div>
      <div class="col-12 col-md-3 animadoproposal mb-3 mb-md-3">
        <div class="bg-white p-5">
          <img src=${asesoria} alt="" width="50px" class="mb-3">
          <h2>Hello world</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit harum assumenda incidunt excepturi eligendi quasi labore repudiandae. Voluptatem, labore.</p>
          <a href="" class="border-bottom border-primary pb-2 text-decoration-none">LEARN MORE</a>
        </div>
      </div>
      <div class="col-12 col-md-3 animadoproposal mb-3 mb-md-3">
        <div class="bg-white p-5">
          <img src=${asesoria} alt="" width="50px" class="mb-3">
          <h2>Hello world</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit harum assumenda incidunt excepturi eligendi quasi labore repudiandae. Voluptatem, labore.</p>
          <a href="" class="border-bottom border-primary pb-2 text-decoration-none">LEARN MORE</a>
        </div>
      </div>
      <div class="col-12 col-md-3 animadoproposal mb-3 mb-md-3">
        <div class="bg-white p-5">
          <img src=${asesoria} alt="" width="50px" class="mb-3">
          <h2>Hello world</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem suscipit harum assumenda incidunt excepturi eligendi quasi labore repudiandae. Voluptatem, labore.</p>
          <a href="" class="border-bottom border-primary pb-2 text-decoration-none ">LEARN MORE</a>
        </div>
      </div>
      <div class="col-3"></div>
      <div class="col-3"></div>
    </div>
  </div>
    
    `
    let animado = document.querySelectorAll(".animadoproposal");
    let imagenCard = document.getElementById('contenedor-cards');

    function mostrarScroll () {
        let scrollTop = document.documentElement.scrollTop;
        for ( var i = 0; i < animado.length; i++){
        let alturaAnimado = animado [i].offsetTop;
        if(alturaAnimado - 500 < scrollTop){
            animado[i].style.opacity = 1;
            animado[0].classList.add("mostrarIzquierdaProposal");
            animado[1].classList.add("mostrarArribaProposal");
            animado[2].classList.add("mostrarArribaProposal");
            animado[3].classList.add("mostrarDerechaProposal");

        }
        }
    }

    window.addEventListener("scroll", mostrarScroll);
    
    
    // funciones que remplazan imagenes blancas a negras

    // document.getElementById('contenedor-card-1').addEventListener('mouseover', () =>{
    //     let newImage = document.images[4];

    //     newImage.src = calidadNegro;
    // });

    // document.getElementById('contenedor-card-2').addEventListener('mouseover', () =>{
    //     let newImage = document.images[5];

    //     newImage.src = calidadNegro;
    // });

    // document.getElementById('contenedor-card-3').addEventListener('mouseover', () =>{
    //     let newImage = document.images[6];

    //     newImage.src = calidadNegro;
    // });


    // // funciones que remplazan imagenes negras a blancas

    // document.getElementById('contenedor-card-1').addEventListener('mouseout', () =>{
    //     let newImage = document.images[4];
        
    //     newImage.src = calidad;
    // });

    // document.getElementById('contenedor-card-2').addEventListener('mouseout', () =>{
    //     let newImage = document.images[5];
        
    //     newImage.src = calidad;
    // });

    // document.getElementById('contenedor-card-3').addEventListener('mouseout', () =>{
    //     let newImage = document.images[6];
        
    //     newImage.src = calidad;
    // })
    
}

export default renderCardsIndex;