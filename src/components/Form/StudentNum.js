import { useState } from 'react';

import up from '../../assets/up.png';
import down from '../../assets/down.png';

import './SameCSS/Container.css';
import './SameCSS/Select.css';

const StudentNum = (props) => {
    //selectbox 열기
    const [isClicked, setIsClicked] = useState(false);
    const [isChage, setIsChange] = useState(false);
    const selectClickedHandler = () => {
        setIsClicked(!isClicked);
        setIsImgUp(!isImgUp);
    };
    const clickSelectDisplay = {
        display: isClicked ? "block" : "none",
    };

    //select box에서 option 선택시 value값 넣기
    const [buttonValue, setButtonValue] = useState("학번 차이 선택");
    const btnValueHandler = (event) => {
        setButtonValue(event.target.value);
        setIsClicked(false); //클릭시 닫히도록
        setIsImgUp(false);
        setIsChange(true);

        const studentNum = event.target.value;
        props.sendStudentNumData(studentNum);
    };

    // 이미지 변경을 위한 상태 변수
    const [isImgUp, setIsImgUp] = useState(false);

    const changeValue = {
        border: isChage ? "1px solid red" : "1px solid #ccc",
    };

    return <div className="container sel">
        <h2>학번 차이는 얼마까지 허용할까요?</h2>
        <div className="select-wrapper">
            <button className='select' onClick={selectClickedHandler} style={changeValue}>
            <div className='selectDiv'>
                <span>{buttonValue}</span>
                <img src={isImgUp ? up : down}  className='arrow' alt='arrow'/>
            </div>
            </button>

            <ul className='listbox' style={clickSelectDisplay}>
                <li><button className='list' value="동기" 
                onClick={btnValueHandler}>동기</button></li>
                <li><button className='list' value="1학번" 
                onClick={btnValueHandler}>1학번</button></li>
                <li><button className='list' value="2학번" 
                onClick={btnValueHandler}>2학번</button></li>
                <li><button className='list' value="3학번" 
                onClick={btnValueHandler}>3학번</button></li>
                <li><button className='list' value="4학번" 
                onClick={btnValueHandler}>4학번</button></li>
                <li><button className='list last' value="상관없음" onClick={btnValueHandler}>상관없음</button></li>
            </ul>
        </div>
    </div>;
};

export default StudentNum;