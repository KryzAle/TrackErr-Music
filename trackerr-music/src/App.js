import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Login from "./components/Login/Login";
import Player from "./components/Player/Player";
import { SET_USER, selectUser } from "./features/UserSlice";
import { getTokenFromUrl } from "./services";
import SpotifyWebApi from "spotify-web-api-js";
import { SET_TOKEN } from "./features/TokenSlice";

const spotify = new SpotifyWebApi();

function App() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    useEffect(() => {
        const hash = getTokenFromUrl();
        const _token = hash.access_token;
        if (_token) {
            dispatch(SET_TOKEN(_token));
            spotify.setAccessToken(_token);
            spotify.getMe().then((user) => {
                dispatch(SET_USER(user));
            });
            console.log("user", user);
        }
    }, [dispatch]);
    return <div className="app">{user ? <Player /> : <Login />}</div>;
}

export default App;
