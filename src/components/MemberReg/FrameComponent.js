import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <header className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.frameContainer}>
          <div className={styles.navigationSvgrepocomWrapper}>
            <img
              className={styles.navigationSvgrepocomIcon}
              loading="lazy"
              alt=""
              src="/navigation-svgrepocom.svg"
            />
          </div>
          <div className={styles.carecallLogoParent}>
            <img
              className={styles.carecallLogoIcon}
              loading="lazy"
              alt=""
              src="/carecall-logo@2x.png"
            />
            <div className={styles.connectedCareWrapper}>
              <div className={styles.connectedCare}>
                <h1 className={styles.carecall}>
                  <span>Care</span>
                  <span className={styles.call}>Call</span>
                </h1>
                <div className={styles.headerB}>
                  <b className={styles.connectedContinuousCare}>
                    Connected. Continuous. Care
                  </b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileCircleIcon}>
          <h1 className={styles.memberRegistrationPortal}>
            Member Registration Portal
          </h1>
        </div>
      </div>
      <div className={styles.profileCircleSvgrepocomWrapper}>
        <img
          className={styles.profileCircleSvgrepocomIcon}
          loading="lazy"
          alt=""
          src="/profilecircle-svgrepocom.svg"
        />
      </div>
    </header>
  );
};

export default FrameComponent;
