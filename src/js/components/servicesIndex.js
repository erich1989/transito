import image1 from '../../public/images/negociacion.jpg'

const renderServicesIndex = () => {
    const textServices = document.getElementById("services-index");
    textServices.innerHTML += `
    <div class="container container-services my-5 py-5">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <div class="pr-0 pr-md-4">
            <h1 class="mb-4">Welcome</h1>
            <h5 class="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quisquam sequi rem nam illo voluptates!</h5>
            <p class="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quo culpa, voluptates repellendus magni autem facere, vitae enim magnam a iure, deleniti veritatis? Eveniet nesciunt repudiandae ut beatae labore ipsa dicta recusandae quidem voluptate eum expedita, incidunt asperiores doloremque nemo corrupti ducimus dolorum voluptates repellat odio vitae aut. Dolore, sequi.</p>
            <a href="" class="btn btn-primary btn-lg px-5 py-3  rounded-0 button-services">GET A FREE CONSULTATION</a>
          </div>
        </div>
        <div class="col-12 col-md-6 ">
          <div class="p-0" style="width:100%; height:100%;">
            <img src=${image1} alt="" width="100%"  height="100%" class="image-services pl-0 pl-md-4" ">
          </div>
        </div>
      </div>
    </div>
  
    `
   
  
  }
  
  export default renderServicesIndex;