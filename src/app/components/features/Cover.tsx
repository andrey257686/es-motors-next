import styles from './Cover.module.scss';
import Image from 'next/image';

import Button from '../UI/Button/Button';
import Typography from '../UI/Typography/Typography';
import { StyledText } from '../UI/StyledText/StyledText';
import coverImage from '../../../../public/images/cover-auto-orig-min.png';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div>
        <Typography variant="title">
          <StyledText firstWord="АВТО" secondWord="ЗАПЧАСТИ" />
        </Typography>
        <Typography variant="header">
          Качественный сервис по подбору и продаже
          <br />
          автозапчастей по всей России
        </Typography>
      </div>
      <div>
        <Button typeButton="primary">Оставить заявку на подбор</Button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={coverImage}
          className={styles.auto}
          loading="eager"
          placeholder="blur"
          alt="Автомобиль"
          fill={true}
        />
      </div>
    </div>
  );
}
