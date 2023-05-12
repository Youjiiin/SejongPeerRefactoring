import styles from './Final.module.css';
import './SameCSS/Container.css';

const Final = (props) => {
    
    return <div className='container fin'>
        <h2>입력하신 정보를 확인해주세요</h2>
        <div className={styles.wrapper}>
            <div className={styles.flex}>

                <div className={styles.infoWrapperHalf}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.complete}></div>
                        <span>자신의 성별</span>
                    </div>
                    <input 
                    className={styles.textWrapperHalf} 
                    value={props.gender}
                    type='text'
                    readOnly></input>
                </div>

                <div className={styles.infoWrapperHalf}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.complete}></div>
                        <span>짝성별</span>
                    </div>
                    <div className={styles.textWrapperHalf}>
                    {props.choiceGender}
                    </div>
                </div>

            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.complete}></div>
                    <span>탐색범위</span>
                </div>
                <div className={styles.textWrapper}>
                {props.major}
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.complete}></div>
                    <span>짝종류</span>
                </div>
                <div className={styles.textWrapper}>
                {props.grade}
                </div>
            </div>

            <div className={styles.flex}>
                <div className={styles.infoWrapperHalf}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.complete}></div>
                        <span>학년 범위</span>
                    </div>
                    <div className={styles.textWrapperHalf}>
                    {props.gradeDiff}
                    </div>
                </div>

                <div className={styles.infoWrapperHalf}>
                    <div className={styles.titleWrapper}>
                        <div className={styles.complete}></div>
                        <span>학번범위</span>
                    </div>
                    <div className={styles.textWrapperHalf}>
                    {props.studentNum}
                    </div>
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.complete}></div>
                    <span>카카오톡 아이디</span>
                </div>
                <div className={styles.textWrapper}>
                {props.kakao}
                </div>
            </div>

            <div className={styles.infoWrapper}>
                <div className={styles.titleWrapper}>
                    <div className={styles.complete}></div>
                    <span>전화번호</span>
                </div>
                <div className={styles.textWrapper}>
                {props.phoneNum}
                </div>
            </div>
        </div>
    </div>;
};

export default Final;