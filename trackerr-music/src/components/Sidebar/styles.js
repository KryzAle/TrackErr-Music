import styled from "styled-components";

const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: #040404;
    min-width: 200px;
    color: #fff;
    & img {
        height: 120px;
        padding: 10px;
        margin-right: auto;
    }
    & hr {
        border: 1px solid #282828;
        width: 90%;
        margin 10px auto;
    }
`;

const PlayListsOption = styled.div`
    margin: 10px 0;
`;

const Option = styled.div`
    display: flex;
    align-items: center;
    color:gray;
    height: 40px;
    cursor: pointer;
    transition: 300ms color ease-in;
    &:hover {
        color : #fff;
    }
    & h5 {
        margin 10px 0 0 20px;
    }
`;
export { SidebarContainer, PlayListsOption, Option };
