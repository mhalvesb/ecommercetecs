import styled from "styled-components";

export const Main = styled.main`
width: 100%;
`;


export const Sections = styled.section`
    display: flex;

    aside{
        background-color: #999;
        width: 30%;
    }

    

    ul{
        list-style-type: none;
        padding: 0;
        margin: 35px 0px;
        color: #000;
    }

    li{
        cursor: pointer;
        margin: 10px 0px;
    }
`;


export const ProductsInfos = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #111;
    width: 100%;
    p{
        margin: 0;
        padding: 0;
        color: #999;
    }

    
`;

export const ProductDiv = styled.div`
        display: flex;
        align-self: flex-end;
        p{
            color: #000;
            margin-right: 5px;
        }
    
`;