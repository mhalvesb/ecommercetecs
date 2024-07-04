import styled from "styled-components";


export const FirstHeader = styled.header`
background-color: #000;
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
height: auto;
padding: 0 10vw;
img{
    width: auto;
    height: 125px;
}
a{
        text-decoration: none;
        color: #fff;
    }
`;

export const FirstUl = styled.ul`
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    color: #fff;
   
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
    
    color: #fff;
    &:hover{
        transition: 0.5s;
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