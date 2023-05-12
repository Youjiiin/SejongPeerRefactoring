import { useState } from 'react';

import './SameCSS/Container.css';
import './SameCSS/InputText.css';

const PhoneNum = (props) => {
    const [isKaKaoInput, setIsKaKaoInput] = useState("");
    const inputKaKaoChangeHandler = (event) => {
        setIsKaKaoInput(event.target.value);

        const kakao = event.target.value;
        props.sendKakaoData(kakao);
    }
    const inputKaKaoChange = {
        border : isKaKaoInput ? "1px solid red" : "1px solid #ccc",
    }

    const [isPhoneInput, setIsPhoneInput] = useState("");
    const inputPhoneChangeHandler = (event) => {
        setIsPhoneInput(event.target.value);
        
        const phoneNum = event.target.value;
        props.sendPhoneNumData(phoneNum);
    }
    const inputPhoneChange = {
        border : isPhoneInput ? "1px solid red" : "1px solid #ccc",
    }

    return <div className="container con2">
        <h2>카톡 아이디와 전화번호를 입력해주세요</h2>
        <input type='text' 
        placeholder='카톡 아이디 입력' 
        className='inputText' 
        onChange={inputKaKaoChangeHandler} 
        value={isKaKaoInput}
        style={inputKaKaoChange}></input>

        <input type='number' 
        placeholder='전화번호 입력 (ex: 01012345678)' 
        className='inputText' 
        onChange={inputPhoneChangeHandler} 
        value={isPhoneInput}
        style={inputPhoneChange}></input>
    </div>;
};

export default PhoneNum;