import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
`;

const Title = styled.h2`
    font-family: "HannaPro";
    font-size: 50px;
    margin-bottom: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 15px;
    width: 450px;
    //height: 150px;
    padding-bottom: 20px;
`;

const Form = styled.form`
    //margin-top: 20px;
    //border: 1px solid rgba(0, 0, 0, 0.5);
    //width: 800px;
    h2 {
        margin-top: 20px;
    }
    h3 {
        margin-top: 10px;
    }
`;

const InputWrapper = styled.div`
    padding: 15px 0 0 0;
    span {
        margin-left: 30px;
        font-size: 12px;
    }
`;

const Desc = styled.label`
    display: inline-block;
    font-family: "HannaAir";
    font-size: 18px;
    width: 80px;
`;

const Input = styled.input`
    display: inline-block;
    height: 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 5px;
`;

const Btn = styled.button`
    font-family: "NanumBarunGothic";
    font-size: 15px;
    padding: 8px 30px 8px 30px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    margin-top: 20px;
`;

function Recovery() {
    return (
        <Container>
            <Title>ID/PW 찾기</Title>
            <Wrapper>
                <Form>
                    <h2>ID 찾기</h2>
                    <hr />
                    <h3>회원가입 시 등록한 이메일을 아래의 칸에 작성하세요.</h3>
                    <InputWrapper>
                        <Desc>이메일</Desc>
                        <Input></Input>
                    </InputWrapper>
                    <h2>PW 찾기</h2>
                    <hr />
                    <h3>
                        회원가입 시 등록한 아이디와 이메일을 아래의 칸에
                        작성하세요.
                    </h3>
                    <InputWrapper>
                        <Desc>아이디</Desc>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>이메일</Desc>
                        <Input></Input>
                    </InputWrapper>
                </Form>
                <Btn>제출</Btn>
            </Wrapper>
        </Container>
    );
}

export default Recovery;
