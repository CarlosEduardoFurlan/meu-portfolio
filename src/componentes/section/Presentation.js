import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'

function Presentation() {
    return (
        <div className={styles.presentation} id='Presentation' >
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou Cadu!</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras.Como <br/>
                Product Manager, eu tenho o compromisso de resolver <br/>
                problemascomplexos e trazer resultados excepcionais para os <br/>
                negócios.Meus projetos já geraram milhões de reais em receita <br/>
                anual estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/CarlosEduardoFurlan' text='Conecte-se comigo!!'/>
        </div>
    )
}

export default Presentation