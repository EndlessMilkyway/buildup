import { useRef } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";
import useDetectClose from "../hooks/useDetectClose";
import { ReactComponent as NoticeIco } from "../assets/notice.svg";

const DropDownWrapper = styled.div`
    .menu {
        background: #fff;
        border-radius: 8px;
        position: absolute;
        top: 90px;
        right: inherit;
        width: 300px;
        text-align: center;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
        opacity: 0;
        visibility: hidden;
        transform: translateY(-20px);
        transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
        padding: 15px;
    }

    .active {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    li {
        text-align: left;
    }
    h2 {
        font-family: "NanumSquareRound";
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

const Title = styled.h2`
    font-family: "NanumSquareRound";
    font-size: 20px;
    margin-bottom: 8px;
`;

const MenuItem = styled.div<{ marginTop: string; marginBottom: string }>`
    border: 1px solid rgba(0, 0, 0, 0.5);
    border-left: 0;
    border-right: 0;
    border-bottom: 0;
    padding: 8px 0 8px 0;
    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
    margin-bottom: ${(props) => props.marginBottom};
    .link {
        font-family: "Nanum Gothic", sans-serif;
        font-size: 14px;
    }
`;

const NoticeDropDown = () => {
    const dropDownRef = useRef(null);
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    return (
        <DropDownWrapper>
            <ShowBtn onClick={() => setIsOpen(!isOpen)}>
                <NoticeIco width={20} height={20} className="Ico" />
            </ShowBtn>
            <ul
                ref={dropDownRef}
                className={classNames("menu", { active: isOpen })}
            >
                <li>
                    <Title>Notice</Title>
                </li>
                <li>
                    <MenuItem marginTop="0px" marginBottom="0px">
                        <h3>~~~님이 ~~~~게시글에 댓글을 달았습니다.</h3>
                    </MenuItem>
                </li>
                <li>
                    <MenuItem marginTop="0px" marginBottom="0px">
                        <h3>~~~님이 댓글에 대댓글을 달았습니다.</h3>
                    </MenuItem>
                </li>
                <li>
                    <MenuItem marginTop="0px" marginBottom="0px">
                        <h3>~~~~ 게시글의 좋아요가 증가했습니다.</h3>
                    </MenuItem>
                </li>
                <li>
                    <MenuItem marginTop="0px" marginBottom="0px">
                        <h3>~~~님이 ~~~~게시글에 댓글을 달았습니다.</h3>
                    </MenuItem>
                </li>
            </ul>
        </DropDownWrapper>
    );
};

export default NoticeDropDown;
