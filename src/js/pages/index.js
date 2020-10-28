import Navigation from '../components/navigation';
import Header from '../components/headerIndex';
import Services from '../components/servicesIndex';
import Cards from '../components/cardsIndex';
import CallMe from '../components/callMe';
import CasesOfSuccess from '../components/casesOfSuccessIndex';
import Prices from '../components/pricingIndex';
import Footer from '../components/footer';

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/index.css";

const renderIndex = () =>{
    Navigation();
    Header();
    Services();
    Cards();
    CallMe();
    CasesOfSuccess();
    Prices();
    Footer();
}

renderIndex();