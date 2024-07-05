import { ProductBox, Products, Stars } from "./styled/product.styled";

import Estrelas from "../../assets/images/ESTRELAS.png";
import Samsung from "../../assets/images/samsungnotebook.png";
import Headset from "../../assets/images/headsetpng.png";
import Intelbras from "../../assets/images/camerapng.png";
import Tablet from "../../assets/images/36-tablet-png-image.png";
import React from "react";
import { StaticImageData } from "next/image";

interface MyProductsProps{
    initialPage: boolean,
    productImage: StaticImageData,
    productInfo: string,
    productName: string,
    productPrice: number,
    productStars?: number
}

export default function MyProducts(props: MyProductsProps){
    return(
        <Products style={props.initialPage ? {padding: "0"} : {padding: 0}}>
                    <ProductBox>
                        <img src={props.productImage.src}></img>
                        <p>{props.productInfo}</p>
                        <h2>{props.productName}</h2>
                        <span>R$ {props.productPrice},99</span>
                        <button>BUY</button>
                        <Stars>
                            <img src={Estrelas.src}></img>
                        </Stars>
                    </ProductBox>
            </Products>
    )
}