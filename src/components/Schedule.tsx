import styled from "styled-components";
import { ReactComponent as DetailArrow } from "../assets/detailarrow.svg";
import ManU from "../assets/dummydata/ManchesterUnited.png";
import ManCity from "../assets/dummydata/ManchesterCity.png";
import LiverPool from "../assets/dummydata/Liverpool.png";
import Chelsea from "../assets/dummydata/Chelsea.png";
import AstonVilla from "../assets/dummydata/Astonvilla.png";
import Norwich from "../assets/dummydata/Norwich.png";
import Burnley from "../assets/dummydata/Burnley.png";
import Brighton from "../assets/dummydata/brightonhove.png";
import Arsenal from "../assets/dummydata/Arsenal.png";
import NewCastle from "../assets/dummydata/Newcastle.png";

const ScheduleWrapper = styled.div`
    grid-row: 1 / 3;
    grid-column: 1;
    border: 2px solid;
    border-radius: 15px;
    border-color: rgba(0, 0, 0, 0.5);
    //width: 626px;
    max-height: 800px;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
        //width: 10px;
    }
    /*&::-webkit-scrollbar-track {
        background-color: #e4e4e4;
        border-radius: 100px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 100px;
        border: 6px solid rgba(0, 0, 0, 0.18);
        border-left: 0;
        border-right: 0;
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: grey;
    }*/
`;

const ScheduleHeader = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    padding: 30px 8px 30px 8px;
    border-bottom: 2px solid;
    border-color: rgba(0, 0, 0, 0.5);

    .STitle {
        font-family: "HannaPro";
        font-size: 20px;
        flex-basis: auto;
        margin-right: 360px;
    }
`;

const MoreItem = styled.div`
    flex-basis: auto;
    margin: 3px 0 0 0;
    span {
        font-family: "NanumSquareRound";
        font-size: 15px;
    }
`;

const ScheduleItem = styled.div`
    img {
        width: 100px;
        height: 100px;
        margin-bottom: 10px;
    }
    display: flex;
    padding: 20px 0 20px 0;
    border-bottom: 2px solid;
    border-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    justify-content: center;
    h1 {
        font-family: "Source Sans Pro", sans-serif;
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }
    h2 {
        font-family: "NanumSquareRound";
    }
    .MatchState {
        font-size: 20px;
        margin-bottom: 10px;
    }
`;

const HomeTeam = styled.div`
    width: 150px;
`;

const CenterInfo = styled.div`
    display: flex;
    align-items: center;
    margin: 0 20px 0 20px;
    h2 {
        font-size: 25px;
    }
`;

const AwayTeam = styled.div`
    width: 150px;
`;

function Schedule() {
    return (
        <ScheduleWrapper>
            <ScheduleHeader>
                <div className="STitle">경기 일정 및 결과</div>
                <MoreItem>
                    <DetailArrow width={10} height={10} />
                    <span>더보기</span>
                </MoreItem>
            </ScheduleHeader>
            <ScheduleItem>
                <HomeTeam>
                    <img src={ManU} alt="Home" />
                    <h2>맨체스터 유나이티드</h2>
                </HomeTeam>
                <CenterInfo>
                    <div>
                        <h1>VS</h1>
                        <h2 className="MatchState">전반전</h2>
                        <h2>3 : 2</h2>
                    </div>
                </CenterInfo>
                <AwayTeam>
                    <img src={ManCity} alt="Away" />
                    <h2>맨체스터 시티</h2>
                </AwayTeam>
            </ScheduleItem>
            <ScheduleItem>
                <HomeTeam>
                    <img src={LiverPool} alt="Home" />
                    <h2>리버풀</h2>
                </HomeTeam>
                <CenterInfo>
                    <div>
                        <h1>VS</h1>
                        <h2 className="MatchState">전반전</h2>
                        <h2>1 : 7</h2>
                    </div>
                </CenterInfo>
                <AwayTeam>
                    <img src={Chelsea} alt="Away" />
                    <h2>첼시</h2>
                </AwayTeam>
            </ScheduleItem>
            <ScheduleItem>
                <HomeTeam>
                    <img src={AstonVilla} alt="Home" />
                    <h2>아스톤 빌라</h2>
                </HomeTeam>
                <CenterInfo>
                    <div>
                        <h1>VS</h1>
                        <h2 className="MatchState">후반전</h2>
                        <h2>5 : 3</h2>
                    </div>
                </CenterInfo>
                <AwayTeam>
                    <img src={Norwich} alt="Away" />
                    <h2>노리치</h2>
                </AwayTeam>
            </ScheduleItem>
            <ScheduleItem>
                <HomeTeam>
                    <img src={Burnley} alt="Home" />
                    <h2>번리</h2>
                </HomeTeam>
                <CenterInfo>
                    <div>
                        <h1>VS</h1>
                        <h2 className="MatchState">경기 종료</h2>
                        <h2>2 : 0</h2>
                    </div>
                </CenterInfo>
                <AwayTeam>
                    <img src={Brighton} alt="Away" />
                    <h2>브라이튼 & 호브</h2>
                </AwayTeam>
            </ScheduleItem>
            <ScheduleItem>
                <HomeTeam>
                    <img src={Arsenal} alt="Home" />
                    <h2>아스날</h2>
                </HomeTeam>
                <CenterInfo>
                    <div>
                        <h1>VS</h1>
                        <h2 className="MatchState">경기 종료</h2>
                        <h2>2 : 0</h2>
                    </div>
                </CenterInfo>
                <AwayTeam>
                    <img src={NewCastle} alt="Away" />
                    <h2>뉴캐슬</h2>
                </AwayTeam>
            </ScheduleItem>
        </ScheduleWrapper>
    );
}

export default Schedule;
