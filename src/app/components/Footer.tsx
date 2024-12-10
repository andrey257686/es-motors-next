import styles from './Footer.module.scss';

import ApplicationForm from './ApplicationForm';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.working_hours}></div>
        <div className={styles.catalog}></div>
        <ApplicationForm buttonType="primary" />
      </div>
    </div>
  );
}
