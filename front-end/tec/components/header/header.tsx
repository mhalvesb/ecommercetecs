import { FirstHeader, FirstUl, SecondUl } from "./style/header.style"
import Link from "next/link";

export default function MyHeader(){
    return(
        <FirstHeader>
            
            <FirstUl>
                <li><Link href="/"><h1>Logotipo</h1></Link></li>
                <li><Link href="/acessories"><p>Acessories</p></Link></li>
                <li><Link href="/notebooks"><p>Notebook</p></Link></li>
                <li><Link href="/smartphones"><p>Smartphones</p></Link></li>
                <li><Link href="/camera"><p>Cameras</p></Link></li>
            </FirstUl>

            <SecondUl>
                <li>Login</li>
                <li>CART</li>
            </SecondUl>
        </FirstHeader>
    )
}