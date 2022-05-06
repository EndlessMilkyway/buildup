import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    .Logo {
        margin-bottom: 20px;
    }
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
    width: 400px;
    //height: 150px;
`;

const Form = styled.form`
    margin-top: 20px;
    //border: 1px solid rgba(0, 0, 0, 0.5);
    //width: 800px;
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

const BtnWrapper = styled.div`
    margin-bottom: 30px;
`;

const Btn = styled.button<{ marginLeft: string; marginRight: string }>`
    font-family: "NanumBarunGothic";
    font-size: 14px;
    margin-top: 15px;
    margin: 15px ${(props) => props.marginRight} 0
        ${(props) => props.marginLeft};
    padding: 8px 20px 8px 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
`;

function Login() {
    return (
        <Container>
            <Logo width={150} height={150} className="Logo" />
            <Title>Build Up</Title>
            <Wrapper>
                <Form>
                    <InputWrapper>
                        <Desc>ID</Desc>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>PW</Desc>
                        <Input></Input>
                    </InputWrapper>
                </Form>
                <BtnWrapper>
                    <Btn marginLeft="0px" marginRight="5px">
                        로그인
                    </Btn>
                    <Btn marginLeft="10px" marginRight="0px">
                        ID/PW 찾기
                    </Btn>
                </BtnWrapper>
            </Wrapper>
        </Container>
    );
}

export default Login;
