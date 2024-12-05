import styles from './Home.module.css'
import pizzarato from '../../img/pizza-rato.png'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo à Pizzaria <span>Ratos</span>.</h1>
            <p>Se delicie com a melhor pizza do esgoto!</p>
            <img src={pizzarato} alt="pizza" />
        </section>
    )
}

export default Home