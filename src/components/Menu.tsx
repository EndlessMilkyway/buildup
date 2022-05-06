import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { Link } from "react-router-dom";
import UserDropDown from "./UserDropDown";
import NoticeDropDown from "./NoticeDropDown";
import SearchDropDown from "./SearchDropDown";

const MenuBar = styled.div`
    background-color: #74b9ff;
    border-radius: 15px;
    width: 1200px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2vh 0 2vh 0;
    .logo {
        margin: 0 50px 0 50px;
    }
`;

const Title = styled.span`
    font-family: "HannaPro";
    font-size: 2rem;
    margin: 0 0 0 20px;
`;

const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 30fr);
    padding: 0 80px 0 80px;
`;

const Item = styled.span<{ margin: string }>`
    font-family: "HannaAir";
    font-size: 20px;
    text-align: center;
    margin-right: ${(props) => props.margin};
`;

const Icons = styled.div`
    display: flex;
`;

function Menu() {
    return (
        <MenuBar>
            <Logo width={70} height={70} className="logo" />
            <Title>Build Up</Title>
            <Items>
                <Item margin={"3vh"}>
                    <Link to="/">홈</Link>
                </Item>
                <Item margin={"3vh"}>
                    <Link to="/analystic">스탯 비교</Link>
                </Item>
                <Item margin={"3vh"}>
                    <Link to="/community">커뮤니티</Link>
                </Item>
                <Item margin={"0"}>
                    <Link to="/news">리그 뉴스</Link>
                </Item>
            </Items>
            <Icons>
                {/*<SearchIco width={20} height={20} className="Ico" />*/}
                <SearchDropDown />
                {/*<NoticeIco width={20} height={20} className="Ico" />*/}
                <NoticeDropDown />
                {/*<UserIco width={20} height={20} className="Ico" />*/}
                <UserDropDown />
            </Icons>
        </MenuBar>
    );
}

export default Menu;
