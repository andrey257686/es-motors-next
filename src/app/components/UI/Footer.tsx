import Image from 'next/image';
import Link from 'next/link';

import styles from './Footer.module.scss';

import ApplicationForm from '../ApplicationForm';
import Typography from './Typography';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.line}></div>
      <div className={styles.container}>
        <div className={styles.working_hours}>
          <Link href="/" className={styles.logo}></Link>
          <div className={styles.working_hours_description}>
            <Typography variant="subheader">
              Режим работы
              <br />
              офлайн магазина:
            </Typography>
            <div className={styles.working_hours_lists}>
              <ul className={styles.list_white}>
                <li></li>
                <li></li>
                <li>
                  <Typography variant="body">10:00 - 20:00</Typography>
                </li>
                <li></li>
                <li></li>
              </ul>
              <ul className={styles.list_green}>
                <li>
                  <Typography variant="body">10:00 - 17:00</Typography>
                </li>
                <li>
                  <Typography variant="body">10:00 - 15:00</Typography>
                </li>
              </ul>
            </div>
            <div className={styles.working_hours_address}>
              <Image
                src="/images/location.svg"
                alt="Иконка локации"
                width={30}
                height={30}
              />
              <Typography variant="body">
                г. Воронеж, ул. Ключникова, 2
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.catalog}>
          <Typography variant="subheader">КАТАЛОГ</Typography>
          <ul>
            <li>
              <Link href="/#">Автохимия</Link>
            </li>
            <li>
              <Link href="/#">Аккумуляторы</Link>
            </li>
            <li>
              <Link href="/#">Аксессуары</Link>
            </li>
            <li>
              <Link href="/#">Диски</Link>
            </li>
            <li>
              <Link href="/#">Масла</Link>
            </li>
            <li>
              <Link href="/#">Шины</Link>
            </li>
          </ul>
        </div>
        <div className={styles.feedback_form}>
          <Typography variant="subheader">ПОДБОР СПЕЦИАЛИСТОМ</Typography>
          <ApplicationForm buttonType="primary_accent" />
        </div>
        <div className={styles.copyright}>
          <Typography variant="caption">
            © 2024, ES_Motors, ИП Сухоруких Е.В.
          </Typography>
          <Typography variant="caption">ИНН 366229717204</Typography>
          <Typography variant="caption">ОГРН 322366800002694</Typography>
          <Typography variant="caption">
            <Link href="#">Политика конфиденциальности</Link>
          </Typography>
          <Typography variant="caption">
            <Link href="#">Пользовательское соглашение</Link>
          </Typography>
        </div>
      </div>
    </footer>
  );
}
