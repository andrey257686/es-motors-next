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
import Link from 'next/link';

export default function Cover() {
  return (
    <div className={styles.cover}>
      <div>
        <Typography as="h1" variant="title">
          <StyledText firstWord="АВТО" secondWord="ЗАПЧАСТИ" />
        </Typography>
        <Typography as="h2" variant="header">
          Мы предлагаем запчасти напрямую от производителей,
          <br />
          без наценок, которые вы встретите на СТО
        </Typography>
        <Typography
          as="h3"
          variant="subheader"
          className={styles.cover_subheader}
        >
          Подберем запчасти для вашего авто <span>от 15 минут</span>
          <br />
          <span>До 30% выгоднее</span>, чем у дилера или на СТО
        </Typography>
      </div>
      <div>
        <Link href="#how-work">
          <OpenModalButton
            typeButton="primary"
            modalContent={<FeedbackModal />}
          >
            Оставить заявку на подбор
          </OpenModalButton>
        </Link>
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
