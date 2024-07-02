

import { useState } from "react";
import { Sections, Main, LiItem, ProductDiv, ProductsInfos, SectionProducts } from "./styles/notebooks.styled";
import MyHeader from "../components/header/header";
import MyProducts from "@/components/product/product";
import "../global.modules.css";
import Estrela from "../assets/images/estrela.png";
import EstrelaContorno from "../assets/images/estrelapreta.png";
import Smartphone1 from "../assets/images/products/smartphones/1.png";
import Smartphone2 from "../assets/images/products/smartphones/2.png";
import Smartphone3 from "../assets/images/products/smartphones/3.png";
import Smartphone4 from "../assets/images/products/smartphones/4.png";
import Smartphone5 from "../assets/images/products/smartphones/5.png";
import Smartphone6 from "../assets/images/products/smartphones/6.png";
import Smartphone7 from "../assets/images/products/smartphones/7.png";
import Smartphone8 from "../assets/images/products/smartphones/8.png";
import Smartphone9 from "../assets/images/products/smartphones/9.png";

export default function Smartphones(){

    const [activeLi, setActiveLi] = useState<number | null>(null);

  const handleClick = (index: number) =>{
    setActiveLi(index === activeLi ? null : index);
  }

    return(
        <Main>
      <MyHeader/>
      <Sections>
        <aside>
          <ul>
            <li><h1>Categoria</h1></li>
            <LiItem active={activeLi === 1} onClick={() => handleClick(1)}><span>2GB RAM</span></LiItem>
            <LiItem active={activeLi === 2} onClick={() => handleClick(2)}><span>4GB RAM</span></LiItem>
            <LiItem active={activeLi === 3} onClick={() => handleClick(3)}><span>8GB RAM</span></LiItem>
            <LiItem active={activeLi === 4} onClick={() => handleClick(4)}><span>16GB RAM</span></LiItem>
          </ul>
          <ul>
            <li><h1>Marca</h1></li>
            <LiItem active={activeLi === 5} onClick={() => handleClick(5)}><span>Apple</span></LiItem>
            <LiItem active={activeLi === 6} onClick={() => handleClick(6)}><span>Samsung</span></LiItem>
            <LiItem active={activeLi === 7} onClick={() => handleClick(7)}><span>Motorola</span></LiItem>
            <LiItem active={activeLi === 8} onClick={() => handleClick(8)}><span>Asus</span></LiItem>
          </ul>
          
          <ul>
            <li><h1>Avaliação</h1></li>
            <li><input type="radio" name="stars"/><img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> 5</li>
            <li><input type="radio" name="stars"/><img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={EstrelaContorno.src}></img> 4 e acima</li>
            <li><input type="radio" name="stars"/><img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> 3 e acima</li>
            <li><input type="radio" name="stars"/><img src={Estrela.src}></img> <img src={Estrela.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> 2 e acima</li>
            <li><input type="radio" name="stars"/><img src={Estrela.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> <img src={EstrelaContorno.src}></img> 1 e acima</li>
          </ul>
        </aside>
        <ProductsInfos>
          <p>2.103 Produtos encontrados</p>
          <ProductDiv>
            <p>ordernar: </p>
          <select>
            <option>Revelância</option>
            <option>Mais bem avaliados</option>
            <option>Mais vendidos</option>
            <option>Lançamentos</option>
          </select>
          </ProductDiv>
          <SectionProducts>
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone1} 
            productInfo="Smartphone" 
            productName="Smartphone Samsung Galaxy S23 256GB Preto 5G 8GB RAM 6,1” Câm Tripla + Selfie 12MP" 
            productPrice={849}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone2} 
            productInfo="Smartphone" 
            productName="Smartphone Samsung Galaxy A05 128GB Preto 4G Octa-Core 4GB RAM 6,7” Câm. Dupla + Selfie 8MP" 
            productPrice={1619}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone3} 
            productInfo="Smartphone" 
            productName="Smartphone Samsung Galaxy A05 128GB Prata 4G Octa-Core 4GB RAM 6,7” Câm. Dupla + Selfie 8MP" 
            productPrice={1280}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone4} 
            productInfo="Smartphone" 
            productName="Smartphone Motorola Moto G24 128GB Grafite 4GB + 4GB RAM Boost 6,6 Câm. Dupla"
            productPrice={599}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone5} 
            productInfo="Smartphone" 
            productName="Smartphone Motorola Moto G24 128GB Rosa 4GB + 4GB RAM Boost 6,6 Câm. Dupla + Selfie 8MP Dual Chip" 
            productPrice={899}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone6} 
            productInfo="Smartphone" 
            productName="Smartphone Motorola Moto G54 256GB Azul 5G 8GB RAM 6,5 Câm. Dupla + Selfie 16MP Dual Chip" 
            productPrice={950}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone7} 
            productInfo="Smartphone" 
            productName="Smartphone Samsung Galaxy A15 6,5 128GB Azul Claro 5G 4GB RAM Câm. Tripla 50MP" 
            productPrice={1500}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone8} 
            productInfo="Smartphone" 
            productName="Smartphone Samsung Galaxy A15 6,5 128GB Azul Escuro 4G 4GB RAM Câm. Tripla 50MP" 
            productPrice={799}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Smartphone9} 
            productInfo="Smartphone" 
            productName="Smartphone Motorola Moto G84 256GB Grafite 5G Snapdragon 695 8GB" 
            productPrice={1400}
            />
          </SectionProducts>
        </ProductsInfos>
      </Sections>
    </Main>
    )
}