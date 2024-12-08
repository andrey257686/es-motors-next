import styles from './Cover.module.scss';
import Image from 'next/image';

import Button from './UI/Button';
import Typography from './UI/Typography';
import { StyledText } from './UI/StyledText';
import coverImage from '../../../public/images/cover-auto-cropped-2.png';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div>
        <Typography variant="title">
          <StyledText firstWord="АВТО" secondWord="ЗАПЧАСТИ" />
        </Typography>
        <Typography variant="header" sx={{ width: '50%' }}>
          Качественный сервис по подбору и продаже автозапчастей по всей России
        </Typography>
      </div>
      <div>
        <Button typeButton="primary">Оставить заявку на подбор</Button>
      </div>
      <Image src={coverImage} className={styles.auto} alt="Автомобиль" />
    </div>
  );
}
