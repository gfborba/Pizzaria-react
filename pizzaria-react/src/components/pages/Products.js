import styles from './Products.module.css'
import OrdersForm from '../../components/project/OrderForm'

function Products(){
    return (
        <div className={styles.products_container}>
            <h1>Monte sua pizza!</h1>
            <p>Misture os ingredientes e monte a pizza mais nojenta que conseguir.</p>
            <OrdersForm />
        </div>
    )
}

export default Products