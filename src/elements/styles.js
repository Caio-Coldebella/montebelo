import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    /*background-image: url(});*/
    background-color: #e4e5e7;
    & p {
        font-size: 20px;
        word-break: break-word;
    }
    & h1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
        word-break: break-word;
    }
    & h2 {
        font-size: 30px;
        font-weight: bold;
        text-decoration: underline gray;
        word-break: break-word;
        margin: 30px 5px 20px 8%;
        align-self: flex-start;
    }
`;

const TEXTDIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    height: fit-content;
`;

const LOGOSDIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    height: fit-content;
`;

const ICON = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    & p {
        font-size: 14px;
        word-break: break-word;
        margin-top: 5px;
    }
`;

const GALLERY = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding: 0 20px 0 20px;
`;

const GALERIEPHOTOS = styled.img`
    min-width: 250px;
    width: 30%;
    height: auto;
    margin: 10px 10px 10px 10px;
    border-radius: 5px;
`;

const PRODUCT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 350px;
    height: 350px;
    margin: 10px 10px 10px 10px;
    padding: 5px 5px 5px 5px;
    border: 2px solid gray;
    border-radius: 15px;
    background-color: #F5F5F5;
    & h1 {
        font-size: 22px;
        font-weight: bold;
        margin: 10px 0 10px 0;
    } & img {
        max-height: 80%;
        width: auto;
        max-width: 95%;
        border-radius: 15px;
    }
    @media (max-width: 1050px) {
        width: 250px;
        height: 250px;
        & h1 {
            font-size: 16px;
        }
        & p {
            font-size: 16px;
        }
        & img {
            max-height: 70%;
            width: auto;
            max-width: 95%;
        }
    }
`;

const WRAPDIV = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: fit-content;
    padding: 20px 20px 20px 20px;
    @media (max-width: 1050px) {
        flex-direction: column;
        justify-content: center;
    }
`;

const TOPDIVBOX = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    width: 230px;
    height: 180px;
    margin: 10px 10px 10px 10px;
    background-color: #F5F5F5;
    border-radius: 15px;
    & p{
        word-break: break-word;
        align-self: flex-start;
        margin-left: 5px;
    }
    @media (max-width: 1050px) {
        display: none;
    }
`;

const LOGO = styled.img`
    width: 25%;
    height: auto;
    margin: 50px 0 50px 0;
    @media (max-width: 1050px) {
        min-width: 250px;
        width: 70%;
    }
`;

const PRESENTDIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    width: 100%;
    padding: 20px 20px 20px 20px;
`;

const MOBILETOP = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: fit-content;
    padding: 0 10px 20px 10px;
    row-gap: 5px;
    & span{
        display: flex;
        align-items: center;
        column-gap: 10px;
    }
    @media (min-width: 1051px) {
        display: none;
    }
`;

const styles = {
    CONTENT,
    WRAPDIV,
    TOPDIVBOX,
    LOGO,
    TEXTDIV,
    LOGOSDIV,
    ICON,
    PRODUCT,
    PRESENTDIV,
    MOBILETOP,
    GALLERY,
    GALERIEPHOTOS
}

export default styles;