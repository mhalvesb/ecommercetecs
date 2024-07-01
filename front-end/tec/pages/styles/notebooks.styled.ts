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

    div{
        background-color: #555;
        width: 70%;
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