import styles from "../styles/Intro.module.css";
import Image from "next/image";
import Circle from './Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      <Circle backgroundColor="#b0ff49" top="-50vh" left="-50vh" />
      <Circle backgroundColor="#b0ff49" top="-80vh" right="-70vh" />
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
          src="/img/avocode.png"
          width="100%"
          height="100%"
          layout="fill"
          // objectFit="cover" 
          alt=""
        />
      </div>
    </div>
  );
};

export default Intro;