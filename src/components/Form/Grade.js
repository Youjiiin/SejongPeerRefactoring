import { useState } from 'react';

import './SameCSS/Container.css';
import './SameCSS/Btn3.css';

const Grade = (props) => {
    const [isSeniorClicked, setIsSeniorClicked] = useState(false);
    const [isJuniorClicked, setIsJuniorClicked] = useState(false);
    const [isMateClicked, setIsMateClicked] = useState(false);

    const clickSeniorBtnHandler = () => {
        setIsSeniorClicked(true);
        setIsJuniorClicked(false);
        setIsMateClicked(false);

        const grade = "짝선배";
        props.sendGradeData(grade);

    };

    const clickJuniorBtnHandler = () => {
        setIsSeniorClicked(false);
        setIsJuniorClicked(true);
        setIsMateClicked(false);

        const grade = "짝후배";
        props.sendGradeData(grade);

    };
    const clickMateBtnHandler = () => {
        setIsSeniorClicked(false);
        setIsJuniorClicked(false);
        setIsMateClicked(true);

        const grade = "짝동기";
        props.sendGradeData(grade);

    };


    const clickSeniorBtnColor = {
        backgroundColor: isSeniorClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isSeniorClicked ? "white" : "black",
    };

    const clickJuniorBtnColor = {
        backgroundColor: isJuniorClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isJuniorClicked ? "white" : "black",
    };

    const clickMateBtnColor = {
        backgroundColor: isMateClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isMateClicked ? "white" : "black",
    };

    return <div className="container con3">
        <h2>어떤 짝을 원하시나요?</h2>
        <div>
            <button 
            className="selectBtn3" 
            style={clickSeniorBtnColor} 
            onClick={clickSeniorBtnHandler}>짝선배</button>
            <button 
            className="selectBtn3"  
            style={clickJuniorBtnColor} 
            onClick={clickJuniorBtnHandler}>짝후배</button>
            <button 
            className="selectBtn3"  
            style={clickMateBtnColor} 
            onClick={clickMateBtnHandler}>짝동기</button>
        </div>
    </div>;
};

export default Grade;