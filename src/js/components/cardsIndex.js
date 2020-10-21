import calidad from '../../public/images/calidad.svg';
import calidadNegro from '../../public/images/calidadnegro.svg';

const renderCardsIndex = () => {
    const contentCardsIndex = document.getElementById('cards-index');
    contentCardsIndex.innerHTML = `
        <div class="container mt-5 pt-5 mb-5 pb-5">
            <div class="row mb-4">
                <h1 class="mx-auto font-weight-normal">Title</h1>
            </div>
            <div class="row">
                <div class="col-4 animadoproposal">
                    <div class="card card-index p-4" id="contenedor-card-1">
                        <img src=${calidad} alt="" width="50px" class="mb-3">
                        <div class="card-body p-0">
                            <h5 class="card-title">title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 animadoproposal">
                    <div class="card card-index p-4" id="contenedor-card-2" style="background: #21325b;">
                        <img src=${calidad} alt="" width="50px" class="mb-3">
                        <div class="card-body p-0">
                            <h5 class="card-title">title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
                        </div>
                    </div>
                </div>
                <div class="col-4 animadoproposal">
                    <div class="card card-index p-4" id="contenedor-card-3" style="background: #f5ca99;">
                        <img src=${calidad} alt="" width="50px" class="mb-3">
                        <div class="card-body p-0">
                            <h5 class="card-title">title</h5>
                            <p class="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui dicta, exercitationem sint voluptates consequuntur ad.</p>
                        </div>
                    </div>
                </div>
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
            animado[2].classList.add("mostrarDerechaProposal");

        }
        }
    }

    window.addEventListener("scroll", mostrarScroll);
    
    
    // funciones que remplazan imagenes blancas a negras

    document.getElementById('contenedor-card-1').addEventListener('mouseover', () =>{
        let newImage = document.images[0];

        newImage.src = calidadNegro;
    });

    document.getElementById('contenedor-card-2').addEventListener('mouseover', () =>{
        let newImage = document.images[1];

        newImage.src = calidadNegro;
    });

    document.getElementById('contenedor-card-3').addEventListener('mouseover', () =>{
        let newImage = document.images[2];

        newImage.src = calidadNegro;
    });


    // funciones que remplazan imagenes negras a blancas

    document.getElementById('contenedor-card-1').addEventListener('mouseout', () =>{
        let newImage = document.images[0];
        
        newImage.src = calidad;
    });

    document.getElementById('contenedor-card-2').addEventListener('mouseout', () =>{
        let newImage = document.images[1];
        
        newImage.src = calidad;
    });

    document.getElementById('contenedor-card-3').addEventListener('mouseout', () =>{
        let newImage = document.images[2];
        
        newImage.src = calidad;
    })
    
}

export default renderCardsIndex;