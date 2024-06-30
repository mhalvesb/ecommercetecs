'use client'

import "../global.modules.css";
import { Content, FirstHeader, FirstUl, LineInfos, MainContent, SecondUl } from "./styles/index.styled";
import Logo from "../assets/images/logotipo.png";
export default function Home(){
    return(
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
        
        

    )
}