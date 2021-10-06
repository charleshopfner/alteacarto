import { Button } from "@material-ui/core";

import styles from "./Header.module.scss";

const Header = () => (
  <header>
    <nav className={styles.headerNav}>
      <div className="logo-container">ALTEACARTO</div>
      <Button color="primary">Se connecter</Button>
    </nav>
  </header>
);

export default Header;
