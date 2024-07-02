import styled from "styled-components";





export const Products = styled.div`
display: flex;
padding: 0px 20px;
align-items: center;
justify-content: space-between;
text-align: center;
text-transform: uppercase;
position: relative;
padding: 0 10vw;
    img{
        height: 150px;
    }

    p{
        color: #999999;
        font-size: 12px;
        font-weight: 400;
        margin: 10px 0px;
    }
    h2{
        font-size: 18px;
        font-weight: 900;
        margin: 10px 0px;
    }
    span{
        display: block;
        color: #FF0000;
        font-weight: 700;
        font-size: 14px;
        margin: 10px 0px;
    }
    button{
        width: 70px;
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
        width: 300px;
        height: 400px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 20px 0px;
`;
export const Stars = styled.div`
margin-top: auto;
    img{
        height: 16px;
    }
`;
