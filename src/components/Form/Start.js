import testImg from '../../assets/cookie.jpg';
import style from './Start.module.css';
import './SameCSS/Container.css';

const Start = (props) => {
    const startHandler = () => {
        props.sendStart(true);
    };

    return <div className="container">
        <img src={testImg} className={style.mainImg} alt='mainImg'/>
        <button className={style.startBtn} onClick={startHandler}>짝꿍찾기 시작</button>
    </div>;
};

export default Start;