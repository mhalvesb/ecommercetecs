import styled from "styled-components";
import Banner from "../../assets/images/pixelcut-export.jpeg";

export const Content = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${Banner.src});
    background-repeat: no-repeat;
    background-size: cover;
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
    height: 80px;
    background-color: #111;
    position: absolute;
    bottom: 0;
`;

export const MainContent = styled.main`

`;
