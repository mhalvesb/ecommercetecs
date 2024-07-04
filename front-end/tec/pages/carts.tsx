import { CartHeader, CartItems, Container, FreteDiv, Item, ItemImgAndName, Steps, StepsImage, TotalDiv, TotalItems, ProductDiv, Frete, FreteInput } from "./styles/cart.styled";
import "../global.modules.css";

import Sacola from "../assets/images/icons/sacola-de-comprasazul.png";
import User from "../assets/images/icons/perfil-de-usuario.png";
import Notebook from "../assets/images/Samsung-lança-notebook-Galaxy-Book-Go-no-Brasil-845x563.png";
export default function Cart(){
    return(
        <Container>
            <CartHeader>
                <h1>Logotipo</h1>
            </CartHeader>
            <Steps>
                <ul>
                    <hr></hr>
                    <li><StepsImage style={{borderColor: "#0047AB"}}><img src={Sacola.src}></img></StepsImage>Sacola</li>
                    <li><StepsImage><img src={User.src}></img></StepsImage>Identificação</li>
                    <li><StepsImage><img src={User.src}></img></StepsImage>Pagamento</li>
                </ul>
            </Steps>
            <CartItems>
                <h6>Sacola</h6>
                <Item>
                    <ItemImgAndName>
                        <img src={Notebook.src}></img>
                        <h4>Notebook Samsung I5-4370 4GB RAM SSD 128GB + HDD 500GB WINDOWS 11</h4>
                    </ItemImgAndName>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>Excluir</p>
                    </div>
                    <div>
                        <h4>R$ 72,99 no Pix</h4>
                        <h5>R$ 75,99 no Cartão</h5>
                    </div>
                </Item>
                <Item>
                    <ItemImgAndName>
                        <img src={Notebook.src}></img>
                        <h4>Cartucho HP 664 colorido</h4>
                    </ItemImgAndName>
                    <div>
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        <p>Excluir</p>
                    </div>
                    <div>
                        <h4>R$ 72,99 no Pix</h4>
                        <h5>R$ 75,99 no Cartão</h5>
                    </div>
                </Item>
            </CartItems>
            <TotalItems>
                <Frete>
                    <h3>Frete para o CEP</h3>
                    <FreteInput><input type="text" placeholder="00000-000"/> <button>OK</button></FreteInput>
                </Frete>
                <div>
                    <FreteDiv>
                        <h3>Frete Total: </h3> <span> R$ 21,99</span>
                    </FreteDiv>
                    <ProductDiv>
                        <h3>Produtos: </h3> <span> R$ 528,99</span>
                    </ProductDiv>
                    <TotalDiv>
                        <h2>Total: </h2> <span> R$ 600,00</span>
                    </TotalDiv>
                    <button>Comprar</button>
                </div>
            </TotalItems>
        </Container>
    )
}