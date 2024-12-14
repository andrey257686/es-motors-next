import Image from 'next/image';

import { StyledText } from '../UI/StyledText/StyledText';
import Typography from '../UI/Typography/Typography';
import Button from '../UI/Button/Button';

import styles from './HowWorkBlock.module.scss';
import stepsArrowImage from '../../../../public/images/steps_arrow2.svg';
import arrowRight from '../../../../public/images/arrow-right.svg';

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
        <div className={styles.step}>
          <div className={styles.step_number}>
            <p>1</p>
          </div>
          <div className={styles.step_description}>
            <Typography variant="subheader">Заявка</Typography>
            <Typography variant="body">
              Оставьте заявку на подбор необходимых товаров нашему специалисту,
              заполнив форму
            </Typography>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <p>2</p>
          </div>
          <div className={styles.step_description}>
            <Typography variant="subheader">Подбор</Typography>
            <Typography variant="body">
              Наш специалист свяжется с Вами, обсудит все детали, поможем с
              выбором и оформлением заказа
            </Typography>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <p>3</p>
          </div>
          <div className={styles.step_description}>
            <Typography variant="subheader">Оплата</Typography>
            <Typography variant="body">
              Специалист поможет оплатить товар
            </Typography>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.step_number}>
            <p>4</p>
          </div>
          <div className={styles.step_description}>
            <Typography variant="subheader">Получение заказа</Typography>
            <Typography variant="body">
              Получите товар в любом удобном для Вас месте
            </Typography>
          </div>
        </div>
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
          style={{ width: '100%', textAlign: 'center' }}
        >
          Заявка в 1 клик
        </Button>
      </div>
    </div>
  );
}
