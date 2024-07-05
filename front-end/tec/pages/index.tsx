'use client'

import "../global.modules.css";
import { Content,LastSection, LineInfos, MainContent, NewProductsContent, SecondContent, SupportSec } from "./styles/index.styled";


import Fb from "../assets/images/facebook.png";
import Insta from "../assets/images/instagram.png";
import Twitter from "../assets/images/twitter.png";

import MyHeader from "../components/header/header";
import MyNavSec from "../components/NavSec/navsec";
import MyProducts from "@/components/product/product";
import Notebook from "../assets/images/products/02d79574d176c9774e77b7749bd1945b.png";
export default function Home(){
    return(
        <div>
            <Content>
            <MyHeader/>
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
               <MyNavSec/>
                <h1>New Products</h1>
                <NewProductsContent>
                <MyProducts initialPage={true} productImage={Notebook} productInfo="Notebook" productName="Notebook ASUS ROG Strix 8GB RAM 512GB SSD + 512GB HDD" productPrice={999}/>
                <MyProducts initialPage={true} productImage={Notebook} productInfo="Notebook" productName="Notebook ASUS ROG Strix 8GB RAM 512GB SSD + 512GB HDD" productPrice={999}/>
                <MyProducts initialPage={true} productImage={Notebook} productInfo="Notebook" productName="Notebook ASUS ROG Strix 8GB RAM 512GB SSD + 512GB HDD" productPrice={999}/>
                <MyProducts initialPage={true} productImage={Notebook} productInfo="Notebook" productName="Notebook ASUS ROG Strix 8GB RAM 512GB SSD + 512GB HDD" productPrice={999}/>
                </NewProductsContent>
            </SecondContent>

            <SupportSec>
               <div>
               <h1>SUPORTE TÉCNICO <br></br>24HORAS</h1>
               <button>Entrar em contato</button>                      
               </div>
            </SupportSec>
            <LastSection>
                <ul>
                    <li><h1>Logotipo</h1></li>
                    <li>Alguma coisa falando sobre a empresa</li>
                </ul>
                <ul>
                    <li><h1>ACCESS</h1></li>
                    <li>Acessories</li>
                    <li>Notebooks</li>
                    <li>Smartphone</li>
                    <li>Camera</li>
                </ul>
                <ul>
                    <li><h1>Social Media</h1></li>
                    <li><img src={Fb.src}></img>Facebook</li>
                    <li><img src={Insta.src}></img>Instagram</li>
                    <li><img src={Twitter.src}></img>Twitter</li>
                </ul>
                <ul>
                   <li><h1>Contact</h1></li> 
                   <li>(21) 99999-9999</li>
                   <li>tecnologyecommerce@gmail.com</li>
                </ul>
                <ul>
                   <li><h1>Location</h1></li> 
                   <li>Rua barão das flores, 2000, Centro, Rio de Janeiro - RJ</li>
                </ul>
            </LastSection>
        </div>
        
        

    )
}