import Image from 'next/image';

import styles from './ShopInfoBlock.module.scss';

import Typography from './UI/Typography';
import { StyledText } from './UI/StyledText';

import locationIcon from '../../../public/images/location.svg';

export default function ShopInfoBlock() {
  return (
    <div className={styles.shopInfo}>
      <Typography variant="logo">
        <StyledText firstWord="ES_" secondWord="ОФЛАЙН МАГАЗИН" />
      </Typography>
      <div className={styles.descriptionBlock}>
        <div className={styles.description_address}>
          <Image
            src={locationIcon}
            alt="Иконка локации"
            width={23}
            height={30}
          />
          <Typography variant="subheader">
            <span className={styles.description_address_text}>
              г. Воронеж, ул. Ключникова, 2
            </span>
          </Typography>
        </div>
        <div className={styles.description_main}>
          <Typography variant="body">
            Помимо нашего онлайн-сервиса подбора автозапчастей мы рады видеть
            вас в нашем офлайн-магазине автозапчастей ES_MOTORS, где вы найдете
            все необходимое для вашего автомобиля!
            <br /> <br /> У нас широкий ассортимент запчастей для различных
            марок и моделей.
            <br /> <br />В магазине вы сможете:
            <br /> <br />
          </Typography>
          <ul>
            <li>
              <Typography variant="body">
                ознакомиться с действующим ассортиментом
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                получить личную консультацию специалиста
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                приобрести автозапчасти из наличия
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                оформить заказ на доставку необходимых позиций
              </Typography>
            </li>
          </ul>
        </div>
        <div className={styles.map}></div>
      </div>
    </div>
  );
}
