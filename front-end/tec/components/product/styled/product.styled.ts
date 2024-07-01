import styled from "styled-components";





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
