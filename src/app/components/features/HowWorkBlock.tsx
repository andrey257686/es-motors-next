import Image from 'next/image';

import { StyledText } from '../UI/StyledText/StyledText';
import Typography from '../UI/Typography/Typography';
import Button from '../UI/Button/Button';

import styles from './HowWorkBlock.module.scss';
import stepsArrowImage from '../../../../public/images/steps_arrow2.svg';
import arrowRight from '../../../../public/images/arrow-right.svg';

interface StepProps {
  number: number;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles.step_number}>
        <p>{number}</p>
      </div>
      <div className={styles.step_description}>
        <Typography variant="subheader">{title}</Typography>
        <Typography variant="body">{description}</Typography>
      </div>
    </div>
  );
}

export default function HowWorkBlock() {
  return (
    <div className={styles.how_work}>
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
      <Typography variant="logo">
        <StyledText firstWord="ES_" secondWord="КАК РАБОТАЕМ?" />
      </Typography>
      <div className={styles.steps}>
        <Step
          number={1}
          title="Заявка"
          description="Оставьте заявку на подбор необходимых товаров нашему специалисту, заполнив форму"
        />
        <Step
          number={2}
          title="Подбор"
          description="Наш специалист свяжется с Вами, обсудит все детали, поможем с выбором и оформлением заказа"
        />
        <Step
          number={3}
          title="Оплата"
          description="Специалист поможет оплатить товар"
        />
        <Step
          number={4}
          title="Получение заказа"
          description="Получите товар в любом удобном для Вас месте"
        />
      </div>
      <div className={styles.request}>
        <Image
          src="/images/telegram-logo.svg"
          alt="Свяжитесь с нами через Telegram"
          width={80}
          height={80}
        />
        <Button
          typeButton="outline"
          // fullwidth={true}
          className={styles.request_button}
          // style={{ width: '100%', textAlign: 'center' }}
        >
          Заявка в 1 клик
        </Button>
      </div>
    </div>
  );
}
