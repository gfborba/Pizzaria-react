import styles from './About.module.css'

function About(){
    return (
        <section className={styles.about_container}>
        <h1>Sobre a <span>Ratos</span></h1>
        <div className={styles.about}>
            <p>
            Bem-vindo à Pizzaria Ratos, o lugar onde os limites do bom gosto (e do senso comum) são desafiados todos os dias!

            Inspirados pelos verdadeiros gourmets da natureza – ratos de esgoto e baratas urbanas – criamos sabores únicos que prometem uma experiência inesquecível (literalmente, você vai lembrar disso por muito tempo).

            Aqui, a criatividade é o ingrediente principal: de pizzas salgadas como a icônica Sabor Lixo, até sobremesas ousadas como a Pizza Doce Sabor Barata, tudo é feito com carinho, coragem e talvez um pouco de irresponsabilidade.

            Nossa missão? Trazer diversão e muito humor para a mesa, provando que a comida não precisa ser bonita ou convencional para ser... bem, interessante.
            </p>
        </div>
        
    </section>

    )
}

export default About