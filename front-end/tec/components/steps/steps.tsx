import {StepsImage, Step} from "./styled/steps.styled";
import Sacola from "../../assets/images/icons/sacola-de-comprasazul.png";
import User from "../../assets/images/icons/perfil-de-usuario.png";
import UserAzul from "../../assets/images/icons/perfil-de-usuarioazul.png";
import { useState } from "react";

interface GetProps{
    userImage: number,
}
export default function Steps({userImage}: GetProps){
    const [updateImg, setUpdateImg] = useState<number | null>(userImage);



    return(
        <Step updateImg={updateImg !== null ? updateImg : 0}>
                <ul>
                    <hr></hr>
                    {updateImg !== null && updateImg >= 1 ? 
                    <li><StepsImage style={{borderColor: "#0047AB"}}><img src={Sacola.src}></img></StepsImage>Sacola</li>
                     : 
                     <li><StepsImage><img src={Sacola.src}></img></StepsImage>Sacola</li>
                     }
                    {updateImg !== null && updateImg >= 2 ? 
                    <li><StepsImage style={{borderColor: "#0047AB"}}><img src={UserAzul.src}></img></StepsImage>Identificação</li>
                    :
                    <li><StepsImage><img src={User.src}></img></StepsImage>Identificação</li>
                }
                    <li><StepsImage><img src={User.src}></img></StepsImage>Pagamento</li>
                </ul>
        </Step>
    )
}