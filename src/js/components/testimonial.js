import person1 from '../../public/images/person1.jpg'

const renderTestimonial = () => {

     const contentTestimonial = document.getElementById("testimonial");
     
     contentTestimonial.innerHTML = `
     
        <div class="container py-5 my-5">
            <p class="m-0 parrafo-testimonial"  style="color: #9b9b9b">SOME REVIEWS FROM OUR CLIENTS</p>
            <h1>Testimonials</h1>
            <div class="swiper-container mt-4">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper">
                    <!-- Slides -->
                    <div class="swiper-slide d-flex align-items-center justify-content-center">

                        <div class="card p-4 w-50 rounded-0 shadow card-testimonial">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img src=${person1} alt="" width="70px" height="70px" class="rounded-circle">
                                    </div>
                                    <div class="col-9">
                                        <h4 class="card-title mb-1">Person 1.</h4>
                                        <p style="color: #9b9b9b;">Servicio</p>
                                    </div>
                                </div>
                                <p class="card-text mt-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    cumque fuga maxime iure nobis. Eos fugiat explicabo voluptas? Molestiae, dicta illum!
                                    Libero, placeat nostrum! Expedita excepturi in explicabo ipsum nulla"</p>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-slide d-flex align-items-center justify-content-center">

                        <div class="card p-4 w-50 rounded-0 shadow card-testimonial">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img src=${person1} alt="" width="70px" height="70px" class="rounded-circle">
                                    </div>
                                    <div class="col-9">
                                        <h4 class="card-title mb-1">Person 2.</h4>
                                        <p style="color: #9b9b9b;">Servicio</p>
                                    </div>
                                </div>
                                <p class="card-text mt-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    cumque fuga maxime iure nobis. Eos fugiat explicabo voluptas? Molestiae, dicta illum!
                                    Libero, placeat nostrum! Expedita excepturi in explicabo ipsum nulla"</p>
                            </div>

                        </div>

                    </div>
                    <div class="swiper-slide d-flex align-items-center justify-content-center">

                        <div class="card p-4 w-50 rounded-0 shadow card-testimonial">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-3">
                                        <img src=${person1} alt="" width="70px" height="70px" class="rounded-circle">
                                    </div>
                                    <div class="col-9">
                                        <h4 class="card-title mb-1">Person 3.</h4>
                                        <p style="color: #9b9b9b;">Servicio</p>
                                    </div>
                                </div>
                                <p class="card-text mt-3">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
                                    cumque fuga maxime iure nobis. Eos fugiat explicabo voluptas? Molestiae, dicta illum!
                                    Libero, placeat nostrum! Expedita excepturi in explicabo ipsum nulla"</p>
                            </div>

                        </div>
                    </div>

                </div>
                <!-- If we need pagination -->
                <div class="swiper-pagination"></div>

                <!-- If we need navigation buttons -->
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
     
     `

     

}

export default renderTestimonial;