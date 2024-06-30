'use client'

import "../global.modules.css";
import { Content, FirstHeader, FirstUl, LineInfos, MainContent, NavSec, ProductBox, Products, SecondContent, SecondUl, Stars, SupportSec } from "./styles/index.styled";
import NotebookImg from "../assets/images/Notebook_PNG_Clip_Art-3074.png";
import Acessories from "../assets/images/Gaming-Headset-PNG-HD-Image-1.png"
import Cameras from "../assets/images/photo_camera_PNG101601.png"
import Estrelas from "../assets/images/ESTRELAS.png";
import Samsung from "../assets/images/samsungnotebook.png";
import Headset from "../assets/images/headsetpng.png";
import Intelbras from "../assets/images/camerapng.png";
import Tablet from "../assets/images/36-tablet-png-image.png";

export default function Home(){
    return(
        <div>
            <Content>
            <FirstHeader>
            
            <FirstUl>
                <li><h1>Logotipo</h1></li>
                <li>Acessories</li>
                <li>Laptop</li>
                <li>Smartphones</li>
                <li>Cameras</li>
            </FirstUl>

            <SecondUl>
                <li>Login</li>
                <li>CART</li>
            </SecondUl>
            </FirstHeader>
            <LineInfos>
                <ul>
                    <li>Fast Delivery</li>
                    <li>Free Shipping for products above 99$</li>
                    <li>New products added every day</li>
                </ul>
            </LineInfos>
            <MainContent>

            </MainContent>
            </Content>

            <SecondContent>
                <NavSec>
                    <div>
                        <img src={NotebookImg.src}></img>
                        <span>
                            <h2>Notebooks</h2>
                            <p>SHOP NOW ➔</p>
                        </span>
                    </div>
                    <div>
                    <img src={Acessories.src}></img>
                        <span>
                            <h2>Acessories</h2>
                            <p>SHOP NOW ➔</p>
                        </span>
                    </div>
                    <div>
                    <img src={Cameras.src}></img>
                        <span>
                            <h2>Cameras</h2>
                            <p>SHOP NOW ➔</p>
                        </span>
                    </div>
                </NavSec>
                <h1>New Products</h1>
                <Products>
                    <ProductBox>
                        <img src={Samsung.src}></img>
                        <p>Notebook</p>
                        <h2>Notebook Samsung I7-4730 4GB RAM SSD 128GB + HDD 500GB</h2>
                        <span>R$ 999,98</span>
                        <button>BUY</button>
                        <Stars>
                            <img src={Estrelas.src}></img>
                        </Stars>
                    </ProductBox>

                    <ProductBox>
                        <img src={Headset.src}></img>
                        <p>Acessories</p>
                        <h2>HeadSet gamer stereo</h2>
                        <span>R$ 51,99</span>
                        <button>BUY</button>
                        <Stars>
                            <img src={Estrelas.src}></img>
                        </Stars>
                    </ProductBox>
                    <ProductBox>
                        <img src={Intelbras.src}></img>
                        <p>Camera</p>
                        <h2>Camera intelbras full hd 60fps</h2>
                        <span>R$ 135,00</span>
                        <button>BUY</button>
                        <Stars>
                            <img src={Estrelas.src}></img>
                        </Stars>
                    </ProductBox>
                    <ProductBox>
                        <img src={Tablet.src}></img>
                        <p>Tablet</p>
                        <h2>TABLET 4GB RAM TELA 12" ARMAZENAMENTO 256GB</h2>
                        <span>R$ 344,99</span>
                        <button>BUY</button>
                        <Stars>
                            <img src={Estrelas.src}></img>
                        </Stars>
                    </ProductBox>
                </Products>
            </SecondContent>

            <SupportSec>
               <div>
               <h1>SUPORTE TÉCNICO <br></br>24HORAS</h1>
               <button>Entrar em contato</button>                      
               </div>
            </SupportSec>

        </div>
        
        

    )
}