import React, { FormEventHandler, useEffect, useState } from "react";
import { MyForm, Main, InputText, AllForms, SingupForm } from "./styles/login.styled";
import "../global.modules.css";
import Banner from "../assets/images/nature-8036126_1280.png";
export default function Login(){
    const [activeForm, setActiveForm] = useState<number | null>(1);
    const [firstAnimation, setFirstAnimation] = useState(true);
    const [animationFormSingup, setAnimationFormSingup] = useState(false);
    const [animationFormLogin, setAnimationFormLogin] = useState(true);

    const handleClickFormVisible = (index: number) =>{
        
        setActiveForm(activeForm === index ? null : index);
        if(index === 1){
            setFirstAnimation(false);
            setAnimationFormSingup(false);
            
            
        } else if(index === 2){
            setFirstAnimation(false);
            setAnimationFormSingup(true);
            setAnimationFormLogin(false);
            
        }
    }

    const handleClickSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }

   

    return(
        <Main>
            <AllForms>
                <img src={Banner.src} style={{animationName: !firstAnimation && activeForm === 1 ? "imgtransitionLogin" : !firstAnimation && activeForm === 2 ? "imgtransitionSingup" : ""}} ></img>
                <MyForm style={{display: animationFormLogin ? "flex" : "flex", animationName: activeForm === 1 && !firstAnimation  ? "formtransitionLogin" : !firstAnimation && activeForm === 2 ? "formtransitionSingup" : ""}} onSubmit={(e) => handleClickSubmit(e)}>
                    <h1>Olá novamente!</h1>
                    <h5>Bem vindo de volta, sentimos sua falta</h5>
                    <InputText>
                        
                        <input type="text" required/>
                        <span>Email address</span>
                    </InputText>
                    
                    <InputText>
                        
                        <input type="password" required/>
                        <span>Password</span>
                    </InputText>
                        <button type="submit">LOGIN</button>
                        <h6>Não possui uma conta? <p onClick={() => handleClickFormVisible(2)}>SIGN UP</p></h6>
                    
                </MyForm>

                <SingupForm style={{display: animationFormSingup ? "flex": "flex", animationName: activeForm === 2 && !firstAnimation ? "singupFormTransitionVisible": !firstAnimation && activeForm === 1 ? "singupFormTransitionInvisible" : "" }} onSubmit={(e) => handleClickSubmit(e)}>
                    <h1>Bem vindo !</h1>
                    <h5>Cadastre-se agora e concorra a promoções</h5>
                    <InputText>

                    <input type="text" required/>
                    <span>Email address</span>

                    </InputText>
                    <InputText>

                    <input type="password" required/>
                    <span>Password</span>

                    </InputText>
                    <button type="submit">CADASTRAR</button>
                    <h6>Já possui uma conta? <p onClick={() => handleClickFormVisible(1)}>Entrar</p></h6>
                </SingupForm>
            </AllForms>
        </Main>
    )
}