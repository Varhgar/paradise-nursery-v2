import styles from './LandingPage.module.css';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h1 className={styles.title}>Paradise Nursery</h1>
        <p className={styles.description}>
          Welcome to Paradise Nursery, your go-to destination for beautiful, healthy houseplants.
          Explore our curated selection and bring nature into your home.
        </p>
        <button className={styles.button} onClick={() => navigate('/products')}>
          Get Started
        </button>
      </div>
      <div className={styles.right}>
        <p className={styles.about}>
          Paradise Nursery has been nurturing homes with greenery for over a decade. Our mission is
          to bring joy, tranquility, and a touch of nature into every space. Whether you're a
          seasoned plant parent or just starting out, we have something special for you.
        </p>
      </div>
    </div>
  );
}

export default LandingPage;


