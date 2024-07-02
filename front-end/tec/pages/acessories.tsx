

import { useState } from "react";
import { Sections, Main, LiItem, ProductDiv, ProductsInfos, SectionProducts } from "./styles/notebooks.styled";
import MyHeader from "../components/header/header";
import MyProducts from "@/components/product/product";
import Estrela from "../assets/images/estrela.png";
import EstrelaContorno from "../assets/images/estrelapreta.png";


export default function Acessories(){

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
            <LiItem active={activeLi === 7} onClick={() => handleClick(7)}><span>Acer</span></LiItem>
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
            productImage={Notebook} 
            productInfo="Notebook" 
            productName="Notebook Samsung I5-4730 4GB RAM SSD 128GB + HDD 500GB" 
            productPrice={2664}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Notebook1} 
            productInfo="Notebook" 
            productName="Notebook Gamer Lenovo LOQ Intel Core i5 8GB RAM - 512GB SSD 15,6” Full HD NVIDIA RTX 2050 Windows 11" 
            productPrice={2978}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Notebook2} 
            productInfo="Notebook" 
            productName="Notebook Samsung 14 Galaxy Book Go, Snapdragon 7C, 4GB, SSD 128GB, Windows 11 Home" 
            productPrice={1500}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Notebook3} 
            productInfo="Notebook" 
            productName="Notebook ASUS Vivobook 15 X1504ZA Intel Core i5 1235U 8GB Ram 512GB SSD Windows 11"
            productPrice={1599}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Notebook4} 
            productInfo="Notebook" 
            productName="Notebook Acer Aspire 3 Intel Core i3 8GB 256GB SSD - 15,6” Full HD Windows 11" 
            productPrice={2559}
            />
            <MyProducts 
            initialPage={false} 
            productImage={Notebook5} 
            productInfo="Notebook" 
            productName="Notebook Positivo Vision C14 Intel Celeron 4GB - 128GB eMMC 14” HD Windows 11" 
            productPrice={2999}
            />
          </SectionProducts>
        </ProductsInfos>
      </Sections>
    </Main>
    )
}