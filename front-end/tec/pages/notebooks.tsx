import Image from "next/image";
import "../global.modules.css";
import styles from "./page.module.css";
import MyHeader from "../components/header/header";
import { Main, ProductDiv, ProductsInfos, SectionProducts, Sections } from "./styles/notebooks.styled";
import MyNavSec from "@/components/NavSec/navsec";
import MyProducts from "@/components/product/product";
import Estrela from "../assets/images/estrela.png";
import EstrelaContorno from "../assets/images/estrelapreta.png";
import Notebook from "../assets/images/samsungnotebook.png";
import Notebook1 from "../assets/images/products/02d79574d176c9774e77b7749bd1945b.png";
import Notebook2 from "../assets/images/products/185662ec00d8f36cf7303708ff649cd4.png";
import Notebook3 from "../assets/images/products/a68c168c0330d56da8fb4c7e1bd72dd4.png";
import Notebook4 from "../assets/images/products/1.png";
import Notebook5 from "../assets/images/products/3.png";

export default function App() {
  return (
    <Main>
      <MyHeader/>
      <Sections>
        <aside>
          <ul>
            <li><h1>Categoria</h1></li>
            <li><span>2GB RAM</span></li>
            <li><span>4GB RAM</span></li>
            <li><span>8GB RAM</span></li>
            <li><span>16GB RAM</span></li>
          </ul>
          <ul>
            <li><h1>Marca</h1></li>
            <li><span>Apple</span></li>
            <li><span>Samsung</span></li>
            <li><span>Acer</span></li>
            <li><span>Asus</span></li>
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
  );
}
