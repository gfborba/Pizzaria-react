import React, { useState } from 'react';
import styles from './Products.module.css'


    const products = {
    product1: {
        name: "Pizza de lixo",
        description: "A pizza sabor Lixo é a mais autêntica e ousada criação para paladares realmente fora da caixinha. Inspirada nos hábitos culinários dos nossos queridos amigos ratos de esgoto, essa delícia gourmet promete uma explosão de sabores que você nunca imaginou... e talvez preferisse não imaginar. Ingredientes: Uma base crocante com textura rústica (tipo uma tampa de bueiro); Molho de tomate quase vencido para aquele azedinho especial; Queijo derretido misturado com pedacinhos de casca de pizza velha encontrada em alguma lixeira; Cobertura de restos de fast food (um pedaço de batata frita aqui, um nugget mordido ali); Tiras de plástico reciclável temperadas",
        
    },
    product2: {
        name: "Pizza doce de barata",
        description: "Se você achava que já tinha experimentado todas as sobremesas possíveis, prepare-se para algo totalmente inusitado: a Pizza Doce Sabor Barata! Inspirada nos gostos exóticos dos nossos camaradas rastejantes, essa criação combina sofisticação com aquele toque crunchy-surpresa que só a natureza poderia oferecer. Ingredientes: Massa doce crocante, com uma leve crocância que lembra... bem, você sabe; Uma generosa camada de chocolate meio amargo derretido, com notas de fermentação de lugares duvidosos; Pedaços de caramelo queimado que lembram aquele cheirinho de barata ao encontrar o chinelo; Cobertura exclusiva de baratas trituradas e formigas crocantes que garantem o visual perfeito; Finalizado com um leve toque de mel de esquina para adoçar seu dia... ou não.",
        
    },
    product3: {
        name: "Suco de restinho de pia",
        description: "Para os amantes de sabores autênticos e experiências que desafiam o paladar, apresentamos o Suco de Restinho de Pia! Uma bebida única que aproveita o que a natureza (e a louça suja) têm de melhor. É sustentável, criativo e, com certeza, uma experiência que você não vai esquecer tão cedo! Ingredientes: Um leve toque de água escorrida de macarrão para aquele sabor levemente salgado e oleoso; Restos de molho de tomate misturados com gotinhas de café, porque a vida é uma mistura de sabores inesperados; Pedacinhos de alface meio murcho e cascas de cebola, porque fibra é essencial; Aquela pitada especial de óleo de fritura que sempre sobra no fundo da panela, para dar um brilho encantador na superfície; E, claro, um toque cítrico de detergente de limão, porque limpeza é fundamental até no sabor",
        
    },
    };

    function ProductsPage() {
    const [selectedProduct, setSelectedProduct] = useState("product1"); 

    const handleProductChange = (productKey) => {
        setSelectedProduct(productKey);
    };

    return (
        <div className={styles.product_container}>

            <h1>Conheça os sabores!</h1>

            <div className={styles.product_options}>
                <button onClick={() => handleProductChange("product1")}>Pizza de lixo</button>
                <button onClick={() => handleProductChange("product2")}>Pizza doce de barata</button>
                <button onClick={() => handleProductChange("product3")}>Suco de restinho de pia</button>
            </div>

        
            <div className={styles.product_info}>
                <h2>{products[selectedProduct].name}</h2>
                <p>{products[selectedProduct].description}</p>
               
            </div>
        </div>
    );
    }

export default ProductsPage;