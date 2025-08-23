import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  // Temporarily remove Redux logic
  const totalCount = 0; // Placeholder until cart is set up

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">🌿 Paradise Nursery</Link>
      </div>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className={styles.cart}>
          🛒 <span className={styles.count}>{totalCount}</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

