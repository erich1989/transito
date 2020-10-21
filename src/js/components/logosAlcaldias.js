import logoMedellin from '../../public/images/alcaldiamedellin.png';
import logoBello from '../../public/images/alcaldiabello.png';
import logoItagui from '../../public/images/alcaldiaitagui.png';
import logoSabaneta from '../../public/images/alcaldiasabaneta.png';

const renderLogosAlcaldias = () =>{
    const contentAlcaldias = document.getElementById('alcaldias');
    contentAlcaldias.innerHTML = `

    <div class="container">
        <div class="row mb-4">
            <div class="text-center mx-auto">
                <h1 class="mx-auto font-weight-normal">Title</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptatum fugiat, facere praesentium consequatur dolor.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-3 text-center d-flex justify-content-center align-items-center">
                <div class="">
                    <img src=${logoMedellin} alt="logo alcaldia de medellin" width="105">
                </div>
            </div>
            <div class="col-3 text-center">
                <div>
                    <img src=${logoBello} alt="logo alcaldia de medellin" width="175">
                </div>
            </div>
            <div class="col-3 text-center">
                <div>
                    <img src=${logoItagui} alt="logo alcaldia de medellin" width="155">
                </div>
            </div>
            <div class="col-3 text-center">
                <div>
                    <img src=${logoSabaneta} alt="logo alcaldia de medellin" width="140">
                </div>
            </div>
        </div>
    </div>
    
    `
}

export default renderLogosAlcaldias;