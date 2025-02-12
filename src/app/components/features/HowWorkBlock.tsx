import Image from 'next/image';

import { StyledText } from '../UI/StyledText/StyledText';
import Typography from '../UI/Typography/Typography';
import Button from '../UI/Button/Button';
import Link from 'next/link';
// import OpenModalButton from '../UI/Modal/OpenModalButton';
// import FeedbackModal from '../UI/FeedbackModal/FeedbackModal';

import styles from './HowWorkBlock.module.scss';
import stepsArrowImage from '../../../../public/images/steps_arrow2.svg';
import arrowRight from '../../../../public/images/arrow-right.svg';
import { Socials, StepProps } from '@/app/types/types';

function Step({ number, title, description }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.step_number}>
        <p>{number}</p>
      </div>
      <div className={styles.step_description}>
        <Typography variant="subheader" className={styles.step_title}>
          {title}
        </Typography>
        <Typography variant="body">{description}</Typography>
      </div>
    </div>
  );
}

export default async function HowWorkBlock() {
  const socials: Socials = await getSocials();
  return (
    <div className={styles.how_work} id="how-work">
      <Image
        src={stepsArrowImage}
        alt="Изогнутая стрелка"
        className={styles.steps_arrow}
      />
      <Image
        src={arrowRight}
        alt="Стрелка вправо"
        className={styles.arrow_right}
      />
      <Typography as="h3" variant="logo">
        <StyledText firstWord="ES_" secondWord="КАК РАБОТАЕМ?" />
      </Typography>
      <div className={styles.steps}>
        <Step
          number={1}
          title="Заявка"
          description="Оставьте заявку на подбор необходимых товаров нашему специалисту"
        />
        <Step
          number={2}
          title="Подбор"
          description="Наш специалист даст обратную связь и поможет с оформлением заказа"
        />
        <Step
          number={3}
          title="Оплата"
          description="Определение сроков доставки и оплата товара"
        />
        <Step
          number={4}
          title="Получение заказа"
          description="Доставка товара любым удобным для вас способом"
        />
      </div>
      <div className={styles.request}>
        <Image
          src="/images/telegram-logo.svg"
          alt="Свяжитесь с нами через Telegram"
          width={80}
          height={80}
        />
        <Link
          href={socials.social_tg}
          className={styles.request_link}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button typeButton="outline" className={styles.request_button}>
            Оставить заявку
          </Button>
        </Link>

        {/* <OpenModalButton
          typeButton="outline"
          modalContent={<FeedbackModal />}
          className={styles.request_button}
        >
          Оставить заявку
        </OpenModalButton> */}
      </div>
    </div>
  );
}

export async function getSocials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/start/social`, {
    next: { revalidate: 86400 },
  });
  const socials = await res.json();

  return socials;
}
