import { useState } from 'react';

import Start from './Start';
import Gender from './Gender';
import ChoiceGender from './ChoiceGender';
import Grade from './Grade';
import Major from './Major';
import GradeDiff from './GradeDiff';
import StudentNum from './StudentNum';
import PhoneNum from './PhoneNum';
import Final from './Final';
import ProgressBar from './ProgressBar';

import style from './Matching.module.css';

const Matching = () => {
    const [slide, setSlide] = useState(0);
    const [visible, setVisible] = useState(false);

    const [gender, setGender] = useState('');
    const [choiceGender, setChoiceGender] = useState('');
    const [grade, setGrade] = useState('');
    const [major, setMajor] = useState('');
    const [gradeDiff, setGradeDiff] = useState('');
    const [studentNum, setStudentNum] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [kakao, setKakao] = useState('');

    const MoveNext = () => {
        setSlide(slide + 1);
        console.log("다음 페이지 이동 " + slide);
        if ( slide >= 8) {
            setSlide(8);
        }
        setVisible(true);
    };

    const MoveBefore = () => {
        setSlide(slide - 1);
        console.log("이전 페이지 이동 " + slide);
        if ( slide <= 0){
            setSlide(0);
        }
    };

    const Slide = {
        transform: "translateX(" + (-356 * slide) + "px)"
    };
    const VislbleBtn = {
        display : visible ? "flex" : "none"
    };

    const GenderData = (gender) => {
        console.log("성별 : " + gender);
        setGender(gender);
        setSlide(slide + 1);
    };
    const GenderChoiceData = (choiceGender) => {
        console.log("동성이성 : " + choiceGender);
        setChoiceGender(choiceGender);
        setSlide(slide + 1);
    };
    const GradeData = (grade) => {
        console.log("어떤 짝 : " + grade);
        setGrade(grade);
        setSlide(slide + 1);
    };
    const MajorData = (major) => {
        console.log("범위 : " + major);
        setMajor(major);
        setSlide(slide + 1);
    };
    const GradeDiffData = (gradeDiff) => {
        console.log("학년차이 : " + gradeDiff);
        setGradeDiff(gradeDiff);
        setSlide(slide + 1);
    };
    const StudentNumData = (studentNum) => {
        console.log("학번차이 : " + studentNum);
        setStudentNum(studentNum);
        setSlide(slide + 1);
    };
    const PhoneNumData = (phoneNum) => {
        console.log("핸드폰 : " + phoneNum);
        setPhoneNum(phoneNum);
    };
    const KaKaoData = (kakao) => {
        console.log("카톡 : " + kakao);
        setKakao(kakao);
    };

    return <div className={style.wrapper}>
            <div className={style.formWrapper} style={Slide}>
                <Start sendStart={MoveNext}/>
                <Gender sendGenderData={GenderData} />
                <ChoiceGender sendChoiceGenderData={GenderChoiceData}/>
                <Grade sendGradeData={GradeData}/>
                <Major sendMajorData={MajorData}/>
                <GradeDiff sendGradeDiffData={GradeDiffData}/>
                <StudentNum sendStudentNumData={StudentNumData}/>
                <PhoneNum 
                sendPhoneNumData={PhoneNumData} 
                sendKakaoData={KaKaoData}/>
                <Final 
                gender={gender} 
                choiceGender={choiceGender} 
                grade={grade} 
                major={major} 
                gradeDiff={gradeDiff} 
                studentNum={studentNum} 
                phoneNum={phoneNum} 
                kakao={kakao}/>
            </div>
            <ProgressBar 
            moveNext={MoveNext} 
            moveBefore={MoveBefore} 
            style={VislbleBtn}
            slide = {slide}
            />
        </div>;
};

export default Matching;