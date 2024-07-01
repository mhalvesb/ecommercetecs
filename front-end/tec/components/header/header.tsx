import { FirstHeader, FirstUl, SecondUl } from "./style/header.style"


export default function MyHeader(){
    return(
        <FirstHeader>
            
            <FirstUl>
                <li><h1>Logotipo</h1></li>
                <li><p>Acessories</p></li>
                <li><p>Notebook</p></li>
                <li><p>Smartphones</p></li>
                <li><p>Cameras</p></li>
            </FirstUl>

            <SecondUl>
                <li>Login</li>
                <li>CART</li>
            </SecondUl>
        </FirstHeader>
    )
}