import styled from "styled-components";

const NewPostWrapper = styled.div`
    grid-row: 1 / 2;
    grid-column: 2;
    border: 2px solid;
    border-radius: 15px;
    border-color: rgba(0, 0, 0, 0.5);
    //width: 287px;
    max-height: 400px;
`;

const NewPostHeader = styled.div`
    padding: 15px 0 15px 0;
    border-bottom: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);

    .NPTitle {
        font-family: "HannaPro";
        font-size: 18px;
        padding-left: 15px;
    }
`;

const NewPostItem = styled.div`
    font-family: "NanumBarunGothic";
    padding: 9px 9px 9px 9px;
    border-top: 1px solid;
    border-color: rgba(0, 0, 0, 0.5);
`;

function NewPost() {
    return (
        <NewPostWrapper>
            <NewPostHeader>
                <div className="NPTitle">NEW POST</div>
            </NewPostHeader>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
            <NewPostItem>테스트 게시물 입니다.</NewPostItem>
        </NewPostWrapper>
    );
}

export default NewPost;
