import styled from "styled-components";
import HotPost from "../components/HotPost";
import Menu from "../components/Menu";
import NewPost from "../components/NewPost";
import Schedule from "../components/Schedule";
import LeagueNews from "../components/LeagueNews";
import { useSetRecoilState } from "recoil";
import { loginState } from "../atoms";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Contents = styled.div`
    display: grid;
    gap: 15px 15px;
    grid-template-rows: 50% 48%;
    grid-template-columns: 55% 21.2% 21.2%;
    width: 1200px;
    margin: 2vh 0 0 0;
`;

function Home() {
    const setLogIn = useSetRecoilState(loginState);
    setLogIn(true);
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Contents>
                <Schedule />
                <NewPost />
                <HotPost />
                <LeagueNews />
            </Contents>
        </Container>
    );
}

export default Home;
