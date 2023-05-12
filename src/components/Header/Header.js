import style from './Header.module.css';
import MenuIcon from './MenuIcon';

const Header = (props) => {
    return(
        <header className={style.header}>
        <div className={style.menu}>
            <MenuIcon />
        </div>
            <div className={style.title}><span>Sejong Peer</span></div>
        </header>
    );
};

export default Header;