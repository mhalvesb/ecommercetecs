import styled from "styled-components";
import Banner from "../../assets/images/pixelcut-export.jpeg";
import Support from "../../assets/images/360_F_330901393_aOO2hcxJLCsahxjLcenapfQFqbsZT5Uu.jpg";



export const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Banner.src});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
`;

export const FirstHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: auto;
    img{
        width: auto;
        height: 125px;
    }
`;

export const FirstUl = styled.ul`
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;

        h1{
            margin: 0;
            padding: 0;
        }
    li{
        color: #fff;
        cursor: pointer;
        padding: 20px;
        text-transform: uppercase;
        display: flex;
        align-items: center;
    }

    p{
        margin: 0;
        padding: 10px;
        border-bottom: 1px solid transparent;
        transition: 0.5s;
        &:hover{
            border-bottom: 1px solid #fff;
        }
    }
    
`;

export const SecondUl = styled.ul`
    
        margin: 0;
        padding: 0;
        list-style-type: none;
        color: #fff;
        display: flex;
        li{
            cursor: pointer;
            text-transform: uppercase;
            display: flex;
            align-items: center;
            padding: 20px;
        }

`;

export const LineInfos = styled.div`
    width: 100%;
    height: 60px;
    background-color: #111;
    position: absolute;
    bottom: 0;

    ul{
        display: flex;
        list-style-type: none;
        justify-content: space-around;
    }

    li{
        color: #fff;
        font-size: 25px;
        text-transform: uppercase;
    }
`;

export const MainContent = styled.main`

`;


export const SecondContent = styled.section`
    width: 100%;
    height: auto;
    padding-bottom: 200px;
    background-color: #D9D9D9;

    h1{
        font-size: 32px;
        padding-left: 20px;
        margin: 40px 0px;
        text-transform: uppercase;
        font-weight: 900;
    }
`;

export const NavSec = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 0px 20px;
    div{
        margin-top: 60px;
        background-color: #999;
        width: 500px;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        img{
            height: 275px;
        }

        span{
            position: absolute;
            height: 100%;
            width: 50%;
            background-color: #960018;
            left: 0;
            opacity: 75%;
            border-radius: 0px 100px 0px 0px;
            color: #fff;
            display: flex;
            padding-top: 50px;
            padding-left: 20px;
            flex-direction: column;
            cursor: pointer;    
            transition: all 0.5s ease-out;
            &:hover{
                width: 90%;
            }
        }

        
        h2{
            font-size: 40px;
            margin: 0;
            padding: 0;
        }
        p{
            font-size: 20px;
        }
    }
`;

export const Products = styled.div`
display: flex;
padding: 0px 20px;
align-items: center;
justify-content: space-between;
text-align: center;
text-transform: uppercase;
position: relative;
    img{
        height: 250px;
    }

    p{
        color: #999999;
        font-size: 16px;
        font-weight: 400;
        margin: 10px 0px;
    }
    h2{
        font-weight: 900;
        margin: 10px 0px;
    }
    span{
        display: block;
        color: #FF0000;
        font-weight: 700;
        margin: 10px 0px;
    }
    button{
        width: 90px;
        height: 30px;
        background-color: #000;
        border: none;
        cursor: pointer;
        font-weight: 700;
        border-radius: 5px;
        color: #fff;
        margin: 10px 0px;
    }
`;

export const ProductBox = styled.div`
        width: 400px;
        height: 500px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
`;

export const Stars = styled.div`
margin-top: auto;
    img{
        
        height: 16px;
    }
`;

export const SupportSec = styled.section`
    background-image: url(${Support.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 728px;
    position: relative;
    text-align: center;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: auto;
    }
    h1{
        margin: 0px;
        padding: 0px;
        font-weight: 900;
        font-size: 100px;
    }
    button{
        width: 250px;
        height: 60px;
        border: none;
        background-color: #000;
        color: #fff;
        font-weight: 900;
        text-transform: uppercase;
        font-size: 20px;
        margin-top: 30px;
        cursor: pointer;
    }
`;

export const LastSection = styled.footer`
    width: 100%;
    height: auto;
    background-color: #111;
    display: flex;
    justify-content: space-between;
    padding: 40px 20px;
    ul{
        list-style-type: none;
        color: #fff;
        padding: 0;
        margin: 0;
        flex: 1;
    }
    li{
        cursor: pointer;
        padding: 5px 0px;
        display: flex;
        align-items: center;
    }
    h1{
        margin: 0;
        padding: 0;
    }

    img{
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }

`;
