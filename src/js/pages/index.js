import Navigation from '../components/navigation';
import Header from '../components/headerIndex';
import Cards from '../components/cardsIndex';
import Services from '../components/servicesIndex';
import CasesOfSuccess from '../components/casesOfSuccessIndex';
import Prices from '../components/pricingIndex';
import Footer from '../components/footer';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/index.css";

const renderIndex = () =>{
    Navigation();
    Header();
    Cards();
    Services();
    CasesOfSuccess();
    Prices();
    Footer();
}

renderIndex();