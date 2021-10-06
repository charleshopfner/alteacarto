import { Container } from "@material-ui/core";
import Map from "../map/Map";

import styles from "./Main.module.scss";

const Main = () => (
  <Container className={styles.container}>
    <Map />
  </Container>
);

export default Main;
