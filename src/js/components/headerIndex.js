const renderHeaderIndex = () => {
    const contentHeaderIndex = document.getElementById('header-index');
    contentHeaderIndex.innerHTML = `
        <div class="overlay"></div>
        <div class="container-fluid p-3 p-sm-5 pl-md-5 pt-md-0 pr-md-0 container-header-index">
            <div class="row ml-0 ml-md-5  mr-0">
                <div class="col-12 col-md-6 p-0 d-flex justify-content-center align-items-center columna-izquierda-header-index ">
                    <div class="pt-0 pt-md-5 pr-0 pr-md-5 "> 
                        <h1 class="display-4 pr-0 p-md-0 mb-2  title-header text-white">Espeialistas en </h1>
                        <h1 class="display-4 pr-0 p-md-0 mb-4  title-header"><span class="typed"></span></h1>
                        <h5 class="mb-4 font-weight-normal text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptate voluptatum illum provident</h5>
                        <a href="" class="btn btn-primary btn-lg mr-2 rounded-0"><i class="fa fa-whatsapp fa-lg mr-2"></i>WHATSAPP</a>
                        <a href="" class="btn btn-outline-primary btn-lg rounded-0 bg-white boton-facebook"><i class="fab fa-facebook-f mr-2"></i>FACEBOOK</a>
                    </div>
                </div>
                <div class="col-12 col-md-6 p-0  columna-derecha-header-index ">
                    <div class="caja-columna-derecha-header-index d-flex justify-content-center align-items-center">
                        <form class="bg-white p-3 p-md-5  mt-3 mt-md-5">
                            <h1 class="">Get a Free</h1>
                            <h1 class="mb-3">Consultation</h1>
                            <div class="form-group">
                                <input type="text" class="form-control rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Name">
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control rounded-0" id="exampleInputPassword1" placeholder="Phone">
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control rounded-0" id="exampleInputPassword1" placeholder="Email">
                            </div>
                            <div class="form-group form-check ">
                                <input type="checkbox" class="form-check-input mt-2" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1" style="font-size: .75rem;">I've read and agree with the Terms & Policy</label>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block rounded-0 ">ENVIAR</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default renderHeaderIndex;