import Link from 'next/link';
import Image from 'next/image';
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div className={styles.carL}>
          <h1 className={styles.title}>AVOCODE CREATIVES.</h1>
          <h1 className={styles.linkTitle}>
            <Link href="/contact" className={styles.link} passHref>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image 
                src="/img/link.png" 
                width="40px" 
                height="40px" 
                alt=""
              />
            </Link>
          </h1>
        </div>
        <div className={styles.carS}>
          <div className={styles.cardItem}>
            12 ADAM STREET NY <br /> USA
          </div>
          <div className={styles.cardItem}>
            CONTACT@LANEY.DEV <br /> 213 5532 73622
          </div>
        </div>
        <div className={styles.carS}>
          <div className={styles.cardItem}>
            FOLLOW US:
            <br /> pm522.tistory.com
          </div>
          <div className={styles.cardItem}>
            @ 2022 LANEY INTERACTIVE 
            <br /> 
            ALL RIGHTS RESERVED
          </div>
        </div>
    </div>
  )
};

export default Footer;