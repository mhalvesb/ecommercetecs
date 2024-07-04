import styled from "styled-components";

export const AllForms = styled.div`
    display: flex;
    width: 1000px;
    height: 750px;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
`;


export const MyForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    position: absolute;
    right: 0;
    width: 500px;
    height: 750px;
    padding: 20px;
    border-radius: 0px 20px 20px 0px;
    h1{
        margin: 0;
        padding:0;
    }
    h5{
        margin: 0;
        padding: 0;
        margin-bottom: 25px;
    }
    h6{
        display: inline;
    }
    p{
        display: inline;
        color: #960018;
        cursor: pointer;
    }

    button{
        width: 50%;
        align-self: center;
        height: 60px;
        border: none;
        background-color: #960018;
        color: #fff;
        font-weight: 900;
        cursor: pointer;

        &:hover{
            background-color: #690010;
        }
    }

        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;

    @keyframes formtransitionSingup{
        0%{
            right: 0;
            border-radius: 0px 20px 20px 0px;
            pointer-events: none;
        }
        50%{
            opacity: 1;
        }
        55%{
            opacity: 0;
        }
        100%{
            pointer-events: none;
            opacity: 0;
            right: 500px;
            border-radius: 20px 0px 0px 20px;
        }
    }
    
    @keyframes formtransitionLogin{
        0%{
            right: 500px;
            border-radius: 20px 0px 0px 20px;
            opacity: 0;
            pointer-events: none;
        }
        50%{
            opacity: 0;
        }
        55%{
            opacity: 1;
            
            
        }
        100%{
            pointer-events: auto;
            z-index: 1;
            opacity: 1;
            right: 0;
            border-radius: 0px 20px 20px 0px;
        }
    }
`;

export const SingupForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    position: absolute;
    width: 500px;
    height: 750px;
    padding: 20px;
    border-radius: 0px 20px 20px 0px;
    h1{
        margin: 0;
        padding:0;
    }
    h5{
        margin: 0;
        padding: 0;
        margin-bottom: 25px;
    }
    h6{
        display: inline;
    }
    p{
        display: inline;
        color: #960018;
        cursor: pointer;
    }

    button{
        width: 50%;
        align-self: center;
        height: 60px;
        border: none;
        background-color: #960018;
        color: #fff;
        font-weight: 900;
        cursor: pointer;

        &:hover{
            background-color: #690010;
        }
    }
    @keyframes singupFormTransitionInvisible{
        0%{
            right: 500px;
            border-radius: 0px 20px 20px 0px;
            opacity: 1;
            pointer-events: none;
        }
        50%{
            opacity: 1;
        }
        55%{
            opacity: 0;
        }
        100%{
            opacity: 0;
            right: 0;
            border-radius: 20px 0px 0px 20px;
        }
    }
    
    @keyframes singupFormTransitionVisible{
        0%{
            opacity: 0;
            right: 0px;
            border-radius: 20px 0px 0px 20px;
            pointer-events: none;
        }
        50%{
            opacity: 0;
        }
        55%{
            
            opacity: 1;
        }
        100%{
            pointer-events: auto;
            z-index: 1;
            opacity: 1;
            right: 500px;
            border-radius: 0px 20px 20px 0px;
        }
    }
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
`;


export const Main = styled.main`
    width: 100vw;
    height: 100vh;
    background-color: #D9D9D9;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        width: 500px;
        height: auto;
        border-radius: 20px 0px 0px 20px;
        position: absolute;
        
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-timing-function: ease-in-out;
        z-index: 2;

        @keyframes imgtransitionSingup{
            0%{
                left:0;
                border-radius: 20px 0px 0px 20px;
            }
            100%{
                left: 500px;
                border-radius: 0px 20px 20px 0px;
            }
        }
        @keyframes imgtransitionLogin{
            0%{
                left: 500px;
                border-radius: 0px 20px 20px 0px;
            }
            100%{
                left: 0;
                border-radius: 20px 0px 0px 20px;
            }
        }
    }
`;

export const InputText = styled.div`
position: relative;
display: flex;
align-items: center;
    span{
        display: block;
        position: absolute;
        
        
        width: auto;
        background-color: #fff;
        padding: 1px;
        margin-left: 10px;
        pointer-events: none;
        transition: 0.3s;
        user-select: none;
    }

    input{
        margin: 15px 0px;
        padding: 10px;
        outline: none;
        width: 100%;
        &:active ~ span{
        transform: translate(0%, -85%);
        }
        &:focus ~ span{
            transform: translate(0%, -85%);
        }
        &:valid ~ span{
            transform: translate(0%, -85%);
        }
        
    }


   
`;