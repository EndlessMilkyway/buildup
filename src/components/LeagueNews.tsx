import styled from "styled-components";

const NewsWrapper = styled.div`
    grid-row: 2 / 3;
    grid-column: 2 / 4;
    border: 2px solid;
    border-radius: 15px;
    border-color: rgba(0, 0, 0, 0.5);
    width: 1fr;
    max-height: 400px;
`;

const NewsHeader = styled.div`
    padding: 15px 0 15px 0;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);

    .NewsTitle {
        font-family: "HannaPro";
        font-size: 18px;
        padding-left: 15px;
    }
`;

const NewsItem = styled.div`
    font-family: "NanumBarunGothic";
    padding: 10px 9px 10px 9px;
    border-top: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);
`;

function LeagueNews() {
    return (
        <NewsWrapper>
            <NewsHeader>
                <div className="NewsTitle">LEAGUE NEWS</div>
            </NewsHeader>
            <NewsItem>리그 관련 뉴스1</NewsItem>
            <NewsItem>리그 관련 뉴스2</NewsItem>
            <NewsItem>리그 관련 뉴스3</NewsItem>
            <NewsItem>리그 관련 뉴스4</NewsItem>
            <NewsItem>리그 관련 뉴스5</NewsItem>
            <NewsItem>리그 관련 뉴스1</NewsItem>
            <NewsItem>리그 관련 뉴스1</NewsItem>
            <NewsItem>리그 관련 뉴스1</NewsItem>
            <NewsItem>리그 관련 뉴스1</NewsItem>
        </NewsWrapper>
    );
}

export default LeagueNews;
