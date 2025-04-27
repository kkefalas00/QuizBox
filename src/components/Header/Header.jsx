import styles from './header.module.css';
import quiz from '../../images/7423259.jpg';

const Header = () => {
    return (
        <div className={styles.image}>
            <img src={quiz} alt='image_quiz'/>
        </div>
    )
}

export default Header;