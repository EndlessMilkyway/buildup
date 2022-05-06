import styled from "styled-components";

const HotPostWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 3;
    border: 2px solid;
    border-radius: 15px;
    border-color: rgba(0, 0, 0, 0.5);
    //width: 287px;
    max-height: 400px;
`;

const HotPostHeader = styled.div`
    padding: 15px 0 15px 0;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);

    .HPTitle {
        font-family: "HannaPro";
        font-size: 18px;
        padding-left: 15px;
    }
`;

const HotPostItem = styled.div`
    font-family: "NanumBarunGothic";
    padding: 9px 9px 9px 9px;
    border-top: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);
`;

function HotPost() {
    return (
        <HotPostWrapper>
            <HotPostHeader>
                <div className="HPTitle">HOT POST</div>
            </HotPostHeader>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
            <HotPostItem>테스트 게시물 입니다.</HotPostItem>
        </HotPostWrapper>
    );
}

export default HotPost;
