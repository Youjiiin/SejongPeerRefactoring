import { useState } from 'react';

import './SameCSS/Container.css';
import './SameCSS/Btn3.css';

const Major = (props) => {
    const [isMajorClicked, setIsMajorClicked] = useState(false);
    const [isCollegeClicked, setIsCollegeClicked] = useState(false);
    const [isAnyClicked, setIsAnyClicked] = useState(false);

    const clickMajorBtnHandler = () => {
        setIsMajorClicked(!isMajorClicked);
        setIsCollegeClicked(false);
        setIsAnyClicked(false);

        const major = "우리 학과 짝";
        props.sendMajorData(major);

    };

    const clickCollegeBtnHandler = () => {
        setIsMajorClicked(false);
        setIsCollegeClicked(!isCollegeClicked);
        setIsAnyClicked(false);

        const major = "우리 단과대 짝";
        props.sendMajorData(major);

    };

    const clickAnyBtnHandler = () => {
        setIsMajorClicked(false);
        setIsCollegeClicked(false);
        setIsAnyClicked(!isAnyClicked);

        const major = "상관없음";
        props.sendMajorData(major);

    };


    const clickMajorBtnColor = {
        backgroundColor: isMajorClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isMajorClicked ? "white" : "black",
    };

    const clickCollegeBtnColor = {
        backgroundColor: isCollegeClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isCollegeClicked ? "white" : "black",
    };

    const clickAnyBtnColor = {
        backgroundColor: isAnyClicked ? "rgba(255, 0, 0, 0.7)" : "white",
        color: isAnyClicked ? "white" : "black",
    };

    return <div className="container con3">
        <h2>어떤 범위에서 찾길 원하시나요?</h2>
        <div>
            <button 
            className="selectBtn3" 
            style={clickMajorBtnColor} 
            onClick={clickMajorBtnHandler}>우리 학과 짝</button>
            <button 
            className="selectBtn3"  
            style={clickCollegeBtnColor} 
            onClick={clickCollegeBtnHandler}>우리 단과대 짝</button>
            <button 
            className="selectBtn3"  
            style={clickAnyBtnColor} 
            onClick={clickAnyBtnHandler}>상관없음</button>
        </div>
    </div>;
};

export default Major;