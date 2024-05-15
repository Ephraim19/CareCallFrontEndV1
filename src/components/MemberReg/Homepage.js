import FrameComponent from "./FrameComponent";
import styles from "./Homepage.module.css";

const HOMEPAGE = () => {
  return (
    <div className={styles.homePage}>
      <FrameComponent />
      <main className={styles.frameParent}>
        <div className={styles.frameChild} >eeeee</div>
        <div className={styles.frameItem} >pppppppp</div>
        <div className={styles.frameInner} >hhhhhhhh</div>
      </main>
    </div>
  );
};

export default HOMEPAGE;
