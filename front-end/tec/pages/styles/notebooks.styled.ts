import styled from "styled-components";

export const Main = styled.main`
width: 100%;
background: #D9D9D9;

`;


export const Sections = styled.section`
    display: flex;
    padding-top: 50px;
    aside{
        width: 30%;
        margin-left: 5vw;
    }

    

    ul{
        list-style-type: none;
        padding: 0;
        margin: 0;
        margin-bottom: 35px;
        color: #000;
    }
    h1{
        margin:0;
        padding: 0;
    }
    li{
        cursor: pointer;
        margin: 15px 0px;

        
    }
`;

export const LiItem = styled.li<{active: boolean}>`
    
        cursor: pointer;
        margin: 15px 0px;

    

        
        span{
            color: ${props => props.active ? "#960018" : "#000"};
            &:hover{
                color: #960018;
            }
        }
        

`;


export const ProductsInfos = styled.div`
    display: flex;
    flex-direction: column;
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

        select{
            padding: 5px;
            font-weight: 100;
        }
    
`;

export const SectionProducts = styled.section`
display: grid;
grid-template-columns: auto auto auto auto;
flex-wrap: wrap;
`;