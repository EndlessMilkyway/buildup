import { useRef } from "react";
//import { Link } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";
import useDetectClose from "../hooks/useDetectClose";
import { ReactComponent as SearchIco } from "../assets/search.svg";

const DropDownWrapper = styled.div`
    .menu {
        background: #fff;
        border-radius: 8px;
        position: absolute;
        top: 90px;
        right: inherit;
        width: auto;
        text-align: left;
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

const SearchForm = styled.form`
    input {
        width: 250px;
        height: 20px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        margin-right: 5px;
    }
    button {
        font-size: 16px;
        background-color: whitesmoke;
        border: 1px solid rgba(0, 0, 0, 0.5);
        border-radius: 3px;
    }
`;

const SearchDropDown = () => {
    const dropDownRef = useRef(null);
    const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
    return (
        <DropDownWrapper>
            <ShowBtn onClick={() => setIsOpen(!isOpen)}>
                <SearchIco width={20} height={20} className="Ico" />
            </ShowBtn>
            <ul
                ref={dropDownRef}
                className={classNames("menu", { active: isOpen })}
            >
                <li>
                    <Title>Search</Title>
                </li>
                <li>
                    <SearchForm>
                        <input />
                        <button>검색</button>
                    </SearchForm>
                </li>
            </ul>
        </DropDownWrapper>
    );
};

export default SearchDropDown;
