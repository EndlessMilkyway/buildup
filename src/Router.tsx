import { BrowserRouter, Switch, Route } from "react-router-dom";
import Analystic from "./routes/Analystic";
import Commnunity from "./routes/Community";
import Home from "./routes/Home";
import Login from "./routes/Login";
import News from "./routes/News";
import Recovery from "./routes/Recovery";
import Register from "./routes/Register";
import Article from "./routes/Article";

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/article">
                    <Article />
                </Route>
                <Route path="/recovery">
                    <Recovery />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/news">
                    <News />
                </Route>
                <Route path="/community">
                    <Commnunity />
                </Route>
                <Route path="/analystic">
                    <Analystic />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
