    import styled from "styled-components";

    export const Container = styled.main`
        display: flex;
        flex-direction: column;
        width: 100vw;
        height: 100vh;
        
    `;

    export const Step = styled.div<{updateImg: number}>`
        margin: 10px auto;
        width: 100%;
        padding: 0 25vw;
        ul{
            display: flex;
            align-items: center;
            justify-content: space-between;
            list-style-type: none;
            padding: 0;
            margin: 0;
            position: relative;
            width: 100%;
        }
        hr{
            position: absolute;
            width: 95%;
            margin-left: 2px;
            height: 3px;
            top: 16px;
            z-index: 0;
            background-color: #111;
            border: none;
            &::before{
        content: "";
        width: ${props => props.updateImg <= 1 ? "20%" : "50%"};
        position: absolute;
        background-color: #0047AB;
        z-index: 99;
        height: 3px;
        }
        
        }
        li{
            margin: 0;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 2;
        }
        
    `;
    export const StepsImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    border: 1px solid #111;
    width: 50px;
    height: 50px;
    background-color: #D9D9D9;
    z-index: 2;
        img{
            width: 32px;
            z-index: 2;
        }
    `;