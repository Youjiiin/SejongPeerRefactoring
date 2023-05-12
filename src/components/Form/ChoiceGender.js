import { useState } from 'react';
import './SameCSS/Container.css';
import './SameCSS/Btn2.css';

const ChoiceGender = (props) => {
    const [isSameClicked, setIsSameClicked] = useState(false);
    const [isDiffClicked, setIsDiffClicked] = useState(false);

    const clickSameBtnHandler = () => {
        setIsSameClicked(true);
        setIsDiffClicked(false);
        const choiceGender = "동성";
        props.sendChoiceGenderData(choiceGender);

    };

    const clickDiffBtnHandler = () => {
        setIsSameClicked(false);
        setIsDiffClicked(true);
        const choiceGender = "이성";
        props.sendChoiceGenderData(choiceGender);

    };

    const clickSameBtnColor = {
        backgroundColor: isSameClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isSameClicked ? "white" : "black",
    };

    const clickDiffBtnColor = {
        backgroundColor: isDiffClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isDiffClicked ? "white" : "black",
    };

    return <div className="container">
        <h2>같은 성별의 짝을 원하시나요?</h2>
        <div>
            <button 
            className="selectBtn" 
            style={clickSameBtnColor} 
            onClick={clickSameBtnHandler}>동성</button>
            <button 
            className="selectBtn" 
            style={clickDiffBtnColor} 
            onClick={clickDiffBtnHandler}>이성</button>
        </div>
    </div>;
};

export default ChoiceGender;