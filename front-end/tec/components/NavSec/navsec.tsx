import { NavSec } from "./style/navsec.styled";
import NotebookImg from "../../assets/images/Notebook_PNG_Clip_Art-3074.png";
import Acessories from "../../assets/images/Gaming-Headset-PNG-HD-Image-1.png"
import Cameras from "../../assets/images/photo_camera_PNG101601.png"
import Link from "next/link";

export default function MyNavSec(){
    return(
        <NavSec>
        <div>
            <img src={NotebookImg.src}></img>
            <Link href="/notebooks">
                <h2>Notebooks</h2>
                <p>SHOP NOW ➔</p>
            </Link>
        </div>
        <div>
        <img src={Acessories.src}></img>
            <Link href="/acessories">
                <h2>Acessories</h2>
                <p>SHOP NOW ➔</p>
            </Link>
        </div>
        <div>
        <img src={Cameras.src}></img>
            <Link href="/cameras">
                <h2>Cameras</h2>
                <p>SHOP NOW ➔</p>
            </Link>
        </div>
        </NavSec>
    )
}