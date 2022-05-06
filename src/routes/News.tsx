import styled from "styled-components";
import Menu from "../components/Menu";

const Header = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Container = styled.div``;

const Contents = styled.div`
    margin: 0 20vh 0 20vh;
`;

function News() {
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Contents>
                <span>뉴스</span>
            </Contents>
        </Container>
    );
}

export default News;
