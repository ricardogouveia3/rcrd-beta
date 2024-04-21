import styles from "./SlideMain.module.css";

export default function Home() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Ricardo Gouveia</h1>
      <h2 className={styles.subtitle}>
        <span>developer</span> & <span>designer</span>
      </h2>
    </section>
  );
}
