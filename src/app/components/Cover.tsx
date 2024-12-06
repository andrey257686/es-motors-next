import styles from './Cover.module.scss';
import Image from 'next/image';

import Button from './UI/Button';
import Typography from './UI/Typography';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <Typography variant="title">
        <span className={styles.green}>АВТО</span>
        <span>ЗАПЧАСТИ</span>
      </Typography>
      <Typography variant="header">
        Качественный сервис по подбору и продаже автозапчастей по всей России
      </Typography>
      {/* <div className={styles.description}>
        <p>
          Качественный сервис по подбору и продаже автозапчастей по всей России
        </p>
      </div> */}
      <Button>Оставить заявку на подбор</Button>
      <Image
        src="/images/cover-auto-cropped.png"
        className={styles.auto}
        alt="Автомобиль"
        // layout="fill"
        // fill={true}
        width={1593}
        height={719}
      />
    </div>
  );
}
