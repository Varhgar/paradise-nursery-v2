import styles from './ProductPage.module.css';
import PlantCard from '../../components/PlantCard/PlantCard';
import { productsByCategory } from '../../store/products';
import Header from '../../components/Header/Header';

const ProductPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        {Object.entries(productsByCategory).map(([category, plants]) => (
          <section key={category} className={styles.categorySection}>
            <h2 className={styles.categoryHeader}>{category}</h2>
            <div className={styles.cardGrid}>
              {plants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
