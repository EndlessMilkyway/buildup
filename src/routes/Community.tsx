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
    //display: grid;
    //gap: 15px 15px;
    //grid-template-rows: 30% 70%;
    width: 1200px;
    height: 820px;
    margin: 5px 0 0 0;
    border: 2px solid rgba(0, 0, 0, 0.5);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`;

const CommunityMenu = styled.div`
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    text-align: center;
    margin-top: 8px;
    border-bottom: 2px solid rgba(0, 0, 0, 0.5);
    font-family: "NanumBarunGothic";
    div {
        border-left: 1px solid rgba(0, 0, 0, 0.5);
        border-right: 1px solid rgba(0, 0, 0, 0.5);
        border-top: 1px solid rgba(0, 0, 0, 0.5);
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        margin: 0 10px 0 10px;
        padding: 10px 0 10px 0;
    }
    .wholething {
        margin-left: 20px;
    }
    .etc {
        margin-right: 20px;
    }
`;

const CommunityItems = styled.div`
    padding: 10px 0 5px 0;
`;

const BoardHeader = styled.div`
    display: grid;
    grid-template-columns: 12% 12% 40% 12% 12% 6% 6%;
    text-align: center;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-family: "HannaAir";
    font-size: 17px;
`;

const CommunityItem = styled.div`
    display: grid;
    grid-template-columns: 12% 12% 40% 12% 12% 6% 6%;
    text-align: center;
    padding: 10px 0 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    font-family: "Source Sans Pro", sans-serif;
`;

const BoardNavigator = styled.div`
    padding-top: 8px;
    //font-size: 18px;
    text-align: center;
    span {
        margin-right: 5px;
    }
    .firstelem {
        color: #0000ff;
        font-weight: bold;
    }
`;

function Commnunity() {
    return (
        <Container>
            <Header>
                <Menu />
            </Header>
            <Contents>
                <CommunityMenu>
                    <div className="wholething">전체</div>
                    <div className="domestic">국내 경기</div>
                    <div className="overseas">해외 경기</div>
                    <div className="trading">이적 시장</div>
                    <div className="etc">기타</div>
                </CommunityMenu>
                <CommunityItems>
                    <BoardHeader>
                        <div>게시물 번호</div>
                        <div>분류</div>
                        <div>제목</div>
                        <div>작성자</div>
                        <div>작성일</div>
                        <div>조회수</div>
                        <div>추천수</div>
                    </BoardHeader>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <CommunityItem>
                        <div>1195</div>
                        <div>국내 경기</div>
                        <div>Lorem ipsum dolor sit amet, consectetur</div>
                        <div>account01</div>
                        <div>22.04.15</div>
                        <div>10</div>
                        <div>5</div>
                    </CommunityItem>
                    <BoardNavigator>
                        <span className="firstelem">1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                        <span>6</span>
                    </BoardNavigator>
                </CommunityItems>
            </Contents>
        </Container>
    );
}

export default Commnunity;
