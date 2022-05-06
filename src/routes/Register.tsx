import styled from "styled-components";
import ReCAPTCHA from "react-google-recaptcha";

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
    width: 700px;
    .Captcha {
        margin: 20px 0 20px 0;
    }
`;

const Form = styled.form`
    margin-top: 5px;
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

const Btn = styled.button`
    font-family: "NanumBarunGothic";
    font-size: 16px;
    margin-bottom: 30px;
    padding: 8px 20px 8px 20px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-radius: 8px;
`;

function onChange(value: any) {
    console.log("Captcha value:", value);
}

function Register() {
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>;
    return (
        <Container>
            <Title>회원가입</Title>
            <Wrapper>
                <Form>
                    <InputWrapper>
                        <Desc>ID</Desc>
                        <Input></Input>
                        <span>
                            아이디는 8 ~ 15자리 (영문, 숫자, 언더바( _ ), 뺄셈
                            문자(-)만 사용가능)
                        </span>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>PW</Desc>
                        <Input></Input>
                        <span>
                            비밀번호는 영문, 숫자, 특수문자를 혼용하여 8 ~
                            13자리로 작성
                        </span>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>PW 확인</Desc>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>닉네임</Desc>
                        <Input></Input>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>이메일</Desc>
                        <Input></Input>
                        <span>
                            비밀번호 재발급을 위해 반드시 유효한 이메일을
                            입력해주세요.
                        </span>
                    </InputWrapper>
                    <InputWrapper>
                        <Desc>휴대전화</Desc>
                        <Input></Input>
                    </InputWrapper>
                </Form>
                <ReCAPTCHA
                    className="Captcha"
                    sitekey="6LfIqqAfAAAAAG9QnUrjxicnn85A26njgX8T6mJW"
                    onChange={onChange}
                />
                <Btn>회원가입</Btn>
            </Wrapper>
        </Container>
    );
}

export default Register;
