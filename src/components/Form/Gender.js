import { useState } from 'react';
import './SameCSS/Container.css';
import './SameCSS/Btn2.css';

const Gender = (props) => {
    const [isMaleClicked, setIsMaleClicked] = useState(false);
    const [isFemaleClicked, setIsFemaleClicked] = useState(false);

    const clickMaleBtnHandler = () => {
        setIsMaleClicked(true);
        setIsFemaleClicked(false);
        const gender = "남자";
        props.sendGenderData(gender);
    };

    const clickFemaleBtnHandler = () => {
        setIsMaleClicked(false);
        setIsFemaleClicked(true);
        const gender = "여자";
        props.sendGenderData(gender);
    };

    const clickMaleBtnColor = {
        backgroundColor: isMaleClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isMaleClicked ? "white" : "black",
    };

    const clickFemaleBtnColor = {
        backgroundColor: isFemaleClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isFemaleClicked ? "white" : "black",
    };

    return <div className="container">
        <h2>자신의 성별을 선택해 주세요!</h2>
        <div>
            <button 
            className="selectBtn" 
            style={clickMaleBtnColor} 
            onClick={clickMaleBtnHandler}>남자</button>
            <button 
            className="selectBtn"  
            style={clickFemaleBtnColor} 
            onClick={clickFemaleBtnHandler}>여자</button>
        </div>
    </div>;
};

export default Gender;