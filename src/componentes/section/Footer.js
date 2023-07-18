import styles from './Footer.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href='https://www.linkedin.com/in/carlos-eduardo-furlan-8ba21b129/'><FaLinkedin size={30}/></a></li>
                <li><a href='https://github.com/CarlosEduardoFurlan'><FaGithub size={30}/></a></li>
            </ul>
            <p>carloseduardofurlan78@gmail.com</p>
            <p>Carlos Eduardo Furlan © 2023</p>
        </div>
    )
}

export default Footer