import Steps from "../components/steps/steps";
import { Container, CartHeader } from "./styles/cart.styled";
import "../global.modules.css";
import { NotAut } from "./styles/payment.styled";
import Triangulo from "../assets/images/icons/triangulo.png";
export default function Payment(){
    return(
        <Container>
            <CartHeader><h1>Logotipo</h1></CartHeader>
            <Steps userImage={3}/>

            <NotAut>
                <img src={Triangulo.src}></img>
                <h1>Você não está autorizado a continuar !</h1>
                </NotAut>
        </Container>
    )
}