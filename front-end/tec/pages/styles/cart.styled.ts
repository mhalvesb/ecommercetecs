import styled from "styled-components";





export const Container = styled.main`
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    
`;

export const CartHeader = styled.header`
    background-color: #111;
    width: 100vw;
    color: #fff;
    padding: 0 10vw;
`;




export const CartItems = styled.div`
    width: 100vw;
    margin: 10px 0px;
    padding: 0 25vw;

    h6{
        font-size: 25px;
        font-weight: 700;
        color: #0047AB;
        margin: 0;
        padding: 0;
        margin: 20px 0px;
    }
`;


export const Item = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #999;
    padding-bottom: 10px;
    margin: 50px 0px;
    p{
        font-size: 14px;
        margin: 0;
        padding: 0;
        text-align: center;
        cursor: pointer;
        margin: 5px 0px;
    }
    select{
        width: 51px;
        height: 30px;
        border: 1px solid #999;
        background: transparent;
        cursor: pointer;
        outline: none;
        margin: 0px 20px;
    }

    h4, h5{
        margin: 0;
        padding: 0;
        
    }
    h4{
        color: #000;
        font-size: 16px;
    }
    h5{
        color: #000;
        font-size: 18px;
    }
`;

export const ItemImgAndName = styled.div`
    display: flex;
    flex: 1;
    h4{
        margin: 0;
        padding: 0;
        color: #111;
        font-weight: 500;
        font-size: 16px;
        margin-left: 20px;
    }
    img{
        width: 100px;
        height: auto;
        background-color: #fff;
    }
`;


export const TotalItems = styled.div`
    display: flex;
    margin: 0 25vw;
    justify-content: space-between;
    button{
        width: 100%;
        height: 50px;
        background-color: #50C878;
        color: #fff;
        font-weight: 900;
        border: none;
        cursor: pointer;
    }
    span{
        margin: 0;
        padding: 0;
        margin: 15px 0px;
        font-size: 18px;
        font-weight: 900;
        color: #111;
    }
    h3, h4, h2{
        margin: 15px 0px;
        padding: 0;
    }
    padding-bottom: 20px;
    border-bottom: 1px solid #000;
`;

export const FreteDiv = styled.div`
    display: flex;
    h3{
        color: #555;
        margin-right: 10px;
        font-size: 16px;

    }
`;
export const ProductDiv = styled.div`
    display: flex;
    h3{
        color: #555;
        margin-right: 10px;
        font-size: 16px;
    }
`;
export const TotalDiv = styled.div`
    display: flex;
    h2{
        color: #111;
        padding: 0;
        margin-right: 10px;
        font-size: 18px;
        
    }
`;

export const Frete = styled.div`
    h3{
        margin: 5px 0px;
        color: #555;
    }
    input{
        width: 150px;
        height: 30px;
        border: 1px solid #999;
    }
`;

export const FreteInput = styled.div`
    display: flex;
    button{
        height: auto;
    }
`;