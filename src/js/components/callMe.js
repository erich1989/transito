const renderCallMe = () => {
    const contentCallMe = document.getElementById("call-me");
    contentCallMe.innerHTML =`
        <div class="container-fluid p-5 contenedor-call-me" style="height: 300px; ">
            <div class="row h-100">
                <div class="col-12 col-md-8 d-flex align-items-center ">
                    <div class="ml-5">
                    <p class="m-0 text-1-call-me">24/7 ATTORNEY LINE IN NYC</p>
                    <h1 class="">Do you have doubts?</h1>
                    </div>
                </div>
                <div class="col-12 col-md-4 d-flex align-items-center">
                    <a href="" class="btn btn-primary btn-lg px-5 py-3  rounded-0 button-services"><i
                    class="fas fa-phone-alt mr-1"></i>LLAMANOS: <span
                        class="text-white-70 text-uppercase mr-1" style="color: rgba(255,255,255,.5)!important"> 301-210-04-88 </span></a>
                </div>
            </div>
        </div>
    
    `
    if(window.innerWidth < 575.98){
        const heightCallMe = document.querySelector(".contenedor-call-me");
        heightCallMe.style.height = "350px"
        
    }


} 

export default renderCallMe;