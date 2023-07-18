import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Card from '../elements/Card'
import lpdnc from '../../Image/projects/lpdnc.svg'

function Projects() {
    return (
        <div className={styles.projects} id='Projects'>
            <h1>Projetos</h1>
            <section>
                <Card
                img={lpdnc} 
                title="Landing Page - DNC"
                tech="HTML, CSS E JS" 
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
                repo="https://github.com/CarlosEduardoFurlan/Projeto1-Landing-Page-DNC" 
                site="https://escola-dnc-landing-page.netlify.app/"
                />
                <Card
                img={lpdnc} 
                title="Landing Page - DNC"
                tech="HTML, CSS E JS" 
                description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia"
                repo="https://github.com/CarlosEduardoFurlan/Projeto1-Landing-Page-DNC" 
                site="https://escola-dnc-landing-page.netlify.app/"
                />
            </section>
            <ButtonB text='Acesse meu repositório' link='https://github.com/CarlosEduardoFurlan'/> 
        </div>
    )
}

export default Projects