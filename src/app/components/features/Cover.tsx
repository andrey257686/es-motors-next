import styles from './Cover.module.scss';
import Image from 'next/image';

// import Button from '../UI/Button/Button';
import Typography from '../UI/Typography/Typography';
import { StyledText } from '../UI/StyledText/StyledText';
import coverImage from '../../../../public/images/cover-auto-orig-min.png';
import headlightLeftImage from '../../../../public/images/headlight-1.svg';
import headlightRightImage from '../../../../public/images/headlight-2.svg';
import OpenModalButton from '../UI/Modal/OpenModalButton';
import FeedbackModal from '../UI/FeedbackModal/FeedbackModal';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div>
        <Typography as="h1" variant="title">
          <StyledText firstWord="АВТО" secondWord="ЗАПЧАСТИ" />
        </Typography>
        <Typography as="h2" variant="header">
          Качественный сервис по подбору и продаже
          <br />
          автозапчастей по всей России
        </Typography>
      </div>
      <div>
        <OpenModalButton typeButton="primary" modalContent={<FeedbackModal />}>
          Оставить заявку на подбор
        </OpenModalButton>
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
        <Image
          src={headlightLeftImage}
          className={styles.headlight_left}
          loading="eager"
          alt="Лампа"
          width={185}
          height={104}
        />
        <Image
          src={headlightRightImage}
          className={styles.headlight_right}
          loading="eager"
          alt="Лампа"
          width={348}
          height={105}
        />
      </div>
    </div>
  );
}
