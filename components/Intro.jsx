import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#8AE68E" top="-70vh" right="-60vh" />
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brand}>AVOCODE</span> DIGITAL PRODUCT AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for message based on their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          src="/img/Avocode.png"
          width="90%"
          height="60%"
          layout="responsive"
          // objectFit="cover" 
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;