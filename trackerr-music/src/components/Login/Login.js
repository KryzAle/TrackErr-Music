import { LoginContainer, LoginButton } from "./styles";

import { loginUrl, getTokenFromUrl } from "../../services";

const Login = () => {
    return (
        <LoginContainer>
            <img
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt="spotify logo"
            />
            <h1>Login</h1>
            <LoginButton href={loginUrl}>Login with Spotify</LoginButton>
        </LoginContainer>
    );
};
export default Login;
