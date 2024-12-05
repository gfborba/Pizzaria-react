import styles from './Contact.module.css'
import OrderForm from '../project/ContactForm'
import ratolixo from '../../img/rato-lixo.png'

function Contact(){
    return (
        <div className={styles.row}>
            <img src={ratolixo} alt="pizza" className={styles.ratolixo} />
        
        <div className={styles.contact_container}>
            <h1>Fale conosco!</h1>
            <hr></hr>
            <p>Insira seus dados e entraremos em contato. Reclamações sobre a procedência do produto serão ignoradas.</p>
            <OrderForm btnText="Enviar" />
        </div>

        </div>
    )
}

export default Contact