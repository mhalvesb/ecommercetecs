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


export const LineInfos = styled.div`
    height: 60px;
    width: 100%;
    padding: 0 10vw;
    background-color: #111;
    position: absolute;
    bottom: 0;

    ul{
        display: flex;
        list-style-type: none;
        justify-content: space-between;
        padding: 0;
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
        padding-left: 10vw;
        margin: 40px 0px;
        text-transform: uppercase;
        font-weight: 900;
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

export const NewProductsContent = styled.div`
    display: flex;
    padding: 0 10vw;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`;
