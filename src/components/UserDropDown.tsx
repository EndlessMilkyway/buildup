import { useRef } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";
import useDetectClose from "../hooks/useDetectClose";
import { ReactComponent as UserIco } from "../assets/user.svg";
import { useRecoilState } from "recoil";
import { loginState } from "../atoms";

const DropDownWrapper = styled.div`
    .menu_nonLogIn {
        background: #fff;
        border-radius: 8px;
        position: absolute;
        top: 90px;
        right: inherit;
        width: 200px;
        text-align: center;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        padding: 10px;
    }

    .menu_LogIn {
        background: #fff;
        border-radius: 8px;
        position: absolute;
        top: 90px;
        right: inherit;
        width: 250px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        //padding: 10px;
    }

    .active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
`;

const ShowBtn = styled.button`
    border: 0;
    padding: 0;
    background-color: inherit;
    .Ico {
        margin: 0 15px 0 15px;
        align-items: center;
        align-content: center;
    }
`;

const MenuItem = styled.div<{ marginTop: string; marginBottom: string }>`
    width: 150px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    padding: 8px 0 8px 0;
    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    .link {
        font-family: "Nanum Gothic", sans-serif;
        font-size: 14px;
    }
`;

const LogOut = styled.div`
    width: 100px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
    h2 {
        font-family: "Nanum Gothic", sans-serif;
        font-size: 14px;
        text-align: center;
        margin: 10px 0 10px 0;
    }
`;

const ItemLogIn = styled.div`
    font-family: "NanumSquareRound";
    font-size: 15px;
    margin: 0 15px 0 15px;
    padding: 10px 0 10px 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const Title = styled.h2`
    font-family: "NanumSquareRound";
    font-size: 20px;
    //margin-bottom: 8px;
    padding: 10px 0 10px 20px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
`;

const UserDropDown = () => {
    const dropDownRef = useRef(null);
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    const [isLoggedIn] = useRecoilState(loginState);
    return (
        <DropDownWrapper>
            <ShowBtn onClick={() => setIsOpen(!isOpen)}>
                <UserIco width={20} height={20} className="Ico" />
            </ShowBtn>
            {isLoggedIn ? (
                <ul
                    ref={dropDownRef}
                    className={classNames("menu_LogIn", { active: isOpen })}
                >
                    <li>
                        <Title>????????? ?????????</Title>
                    </li>
                    <li>
                        <ItemLogIn>??? ??????</ItemLogIn>
                    </li>
                    <li>
                        <ItemLogIn>????????? ?????????</ItemLogIn>
                    </li>
                    <li>
                        <ItemLogIn>????????? ??????</ItemLogIn>
                    </li>
                    <LogOut>
                        <h2>????????????</h2>
                    </LogOut>
                </ul>
            ) : (
                <ul
                    ref={dropDownRef}
                    className={classNames("menu_nonLogIn", { active: isOpen })}
                >
                    <li>
                        <MenuItem marginTop="0px" marginBottom="10px">
                            <Link to="/login" className="link">
                                ?????????
                            </Link>
                        </MenuItem>
                    </li>
                    <li>
                        <MenuItem marginTop="0px" marginBottom="0px">
                            <Link to="/register" className="link">
                                ????????????
                            </Link>
                        </MenuItem>
                    </li>
                </ul>
            )}
        </DropDownWrapper>
    );
};

export default UserDropDown;
