import imageHappyPerson from '../../public/images/happyperson.jpg';

const renderCasesOfSuccess = () =>{
    const contentCasesOfSuccess = document.getElementById('cases-of-success');
    contentCasesOfSuccess.innerHTML = `
        <div class="container-fluid p-5">
            <div class="col-12 text-center mb-5">
                <h1 class="font-weight-normal">Cases of success</h1>
            </div>
            <div class="row mx-5">
                <div class="col-6 pr-5">
                    <div>
                        <h2 class="font-weight-normal mb-3">The powerful and flexible theme for all kinds of businesses</h2>
                        <p class="mb-4" style=" color: #677788; font-size: 1rem; font-weight: 400;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia eligendi earum a iusto ullam eum deleniti placeat dolor nulla sed! Perferendis ipsa quae debitis, eligendi quidem vero in natus. Saepe earum recusandae ab autem distinctio reprehenderit inventore nostrum quis? Labore?</p>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <h3 style="color:#007bff;">300 +</h3>
                                <p style=" color: #677788; font-size: 1rem; font-weight: 400;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, doloribus.</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <h3 style="color:#007bff;">300 +</h3>
                                <p style=" color: #677788; font-size: 1rem; font-weight: 400;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, doloribus.</p>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div>
                                <h3 style="color:#007bff;">300 +</h3>
                                <p style=" color: #677788; font-size: 1rem; font-weight: 400;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, doloribus.</p>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <h3 style="color:#007bff;">300 +</h3>
                                <p style=" color: #677788; font-size: 1rem; font-weight: 400;">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo, doloribus.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-6 pl-5 rounded">
                    <div class="w-100 h-100 rounded">
                        <img src=${imageHappyPerson} class="rounded" alt="image of happy person" width="100%" height="100%" style="object-fit: cover;">
                    </div>
                </div>
            </div>
        </div>
    `

};

export default renderCasesOfSuccess;