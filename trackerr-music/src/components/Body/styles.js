import styled from "styled-components";

const BodyContainer = styled.div`
    flex: 0.8;
`;
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;
`;

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    background-color: #fff;
    color: gray;
    border-radius: 20px;
    padding: 7px;

    & input {
        border: none;
        width: 100%;
        outline-width: 0;
        background-color: transparent;
        margin-left: 10px;
    }
`;

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    & h4 {
        margin-left: 10px;
    }
`;

export { BodyContainer, HeaderContainer, HeaderLeft, HeaderRight };
