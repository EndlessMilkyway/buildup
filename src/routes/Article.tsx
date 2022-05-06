import styled from "styled-components";
import Menu from "../components/Menu";

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
    grid-template-rows: 10% 60% 30%;
    width: 1200px;
    margin: 2vh 0 0 0;
`;

const Title = styled.div`
    font-family: "NanumSqaureRound";
    font-size: 20px;
    border-bottom: 1px solid;
`;

const Content = styled.div``;

const Comments = styled.div``;

function Article() {
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Contents>
                <Title>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Title>
                <Content>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio saepe, voluptatibus mollitia dolorem iure repudiandae
                    asperiores voluptates autem quisquam commodi accusantium
                    accusamus nisi non deserunt perferendis, rem nulla dicta
                    vitae?
                </Content>
                <Comments></Comments>
            </Contents>
        </Container>
    );
}

export default Article;
