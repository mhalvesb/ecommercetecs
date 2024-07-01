import styled from "styled-components";




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