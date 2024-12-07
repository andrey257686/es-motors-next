import styles from './Cover.module.scss';
import Image from 'next/image';

import Button from './UI/Button';
import Typography from './UI/Typography';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div>
        <Typography variant="title">
          <span className={`${styles.green} ${styles.heading}`}>АВТО</span>
          <span className={styles.heading}>ЗАПЧАСТИ</span>
        </Typography>
        <Typography variant="header" sx={{ width: '50%' }}>
          Качественный сервис по подбору и продаже автозапчастей по всей России
        </Typography>
      </div>
      <div>
        <Button typeButton="primary">Оставить заявку на подбор</Button>
      </div>
      <Image
        src="/images/cover-auto-cropped-2.png"
        className={styles.auto}
        alt="Автомобиль"
        width={1818}
        height={1034}
        // width={1593}
        // height={719}
      />
    </div>
  );
}
