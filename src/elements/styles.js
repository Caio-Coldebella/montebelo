import styled from "styled-components";

const CONTENT = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    /*background-image: url(});*/
    background-color: lightcyan;
    & p {
        font-size: 20px;
    }
    & h1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 50px;
    }
`;

const LOGO = styled.img`
    width: 500px;
    height: 200px;
    margin: 50px 0 50px 0;
`;

const TEXTDIV = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 70px 0;
    width: 70%;
    height: fit-content;
`;

const LOGOSDIV = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 70px;
    width: 40%;
    height: fit-content;
`;

const ICON = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & p {
        font-size: 14px;
    }
`;

const PRODUCT = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    height: fit-content;
    margin: 0 0 50px 0;
    & h1 {
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 30px;
    } & img {
        height: 200px;
        width: 400px;
    }
`;

const styles = {
    CONTENT,
    LOGO,
    TEXTDIV,
    LOGOSDIV,
    ICON,
    PRODUCT
}

export default styles;