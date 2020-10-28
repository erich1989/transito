const Prices = () => {
    const textPrices = document.getElementById("prices");
    let precioBasic = 35000;
    let precioPro = 45000;

    textPrices.innerHTML += `
    <h1 class="text-center  mt-5 mb-5 font-weight-normal">Pricing</h1>
    <div class="container mt-5">
    <div class="card-deck mb-3 text-center">
  
      <div class="card mb-4 shadow-sm complete-card animadoprecios rounded-0" id="">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Básico</h4>
        </div>
        <div class="card-body ">
          <h1 class="card-title pricing-card-title" id="precioBasico">$${precioBasic}</h1>
          <ul class="list-unstyled mt-3 mb-4 ">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li style="visibility:hidden">Instalación de programas</li>
            <li style="visibility:hidden">Instalación de programas</li>
            <li style="visibility:hidden">Instalación de programas</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary rounded-0">Sign up for free</button>
        </div>
      </div>
  
      <div class="card mb-4 shadow-sm complete-card animadoprecios rounded-0" id="">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Pro</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title" id="precioPro">$${precioPro}</h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li style="visibility:hidden">Instalación de programas</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary rounded-0">Get started</button>
        </div>
      </div>
  
      <div class="card mb-4 shadow-sm complete-card animadoprecios rounded-0" id="">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">Personalizado</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">$55000 </h1>
          <ul class="list-unstyled mt-3 mb-4">
            <li>Formateo completo</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
            <li>Lorem, ipsum dolor.</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary rounded-0">Cotización</button>
        </div>
      </div>
    </div>
    
    `;
  
  
    let animado = document.querySelectorAll(".animadoprecios");
    function mostrarScroll() {
      let scrollTop = document.documentElement.scrollTop;
      for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 500 < scrollTop) {
          animado[i].style.opacity = 1;
          animado[0].classList.add("mostrarIzquierda");
          animado[1].classList.add("mostrarArriba");
          animado[2].classList.add("mostrarDerecha");
        }
      }
    }
    window.addEventListener("scroll", mostrarScroll);
  };
  
  export default Prices;