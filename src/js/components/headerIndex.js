const renderHeaderIndex = () => {
    const contentHeaderIndex = document.getElementById('header-index');
    contentHeaderIndex.innerHTML = `
        <div class="container-fluid pl-5 pr-0">
            <div class="row ml-5  mr-0">
                <div class="col-12 col-md-6 p-0 d-flex justify-content-center align-items-center columna-izquierda-header-index ">
                    <div class="pt-5 pr-5"> 
                        <h1 class="display-4 mb-4">Espeialistas en asesorias de <span class="typed"></span></h1>
                        <h5 class="mb-4 font-weight-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate voluptatum illum provident</h5>
                        <a href="" class="btn btn-primary mr-2"><i class="fa fa-whatsapp fa-lg mr-2"></i>Contactanos</a>
                        <a href="" class="btn btn-outline-primary"><i class="fab fa-facebook-f mr-2"></i>Contactanos</a>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-0">
                    <div class="caja-columna-derecha-header-index">

                    </div>
                </div>
            </div>
        </div>
    `
}

export default renderHeaderIndex;