import { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = (props) => {
    const [page, setPage] = useState(0);

    const moveRightHandler = () => {
        props.moveNext(true);
    };
    const moveLeftHandler = () => {
        props.moveBefore(true);
    };

    return <div className={styles.progressBarWrapper} style={props.style}>
        <div className={styles.controllerWrapper}>
            <button className={styles.controller} onClick={moveLeftHandler}>뒤로</button>
            <button className={styles.controller} onClick={moveRightHandler}>다음</button>
        </div>
        <div className={styles.barWrapper}>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
            <div className={styles.progress}></div>
        </div>
    </div>;
};

export default ProgressBar;