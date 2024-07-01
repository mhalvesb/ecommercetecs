import { ProductBox, Products, Stars } from "./styled/product.styled";

import Estrelas from "../../assets/images/ESTRELAS.png";
import Samsung from "../../assets/images/samsungnotebook.png";
import Headset from "../../assets/images/headsetpng.png";
import Intelbras from "../../assets/images/camerapng.png";
import Tablet from "../../assets/images/36-tablet-png-image.png";

export default function MyProducts(){
    return(
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
    )
}