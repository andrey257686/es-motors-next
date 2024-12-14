import Image from 'next/image';

import styles from './AdvantagesBlock.module.scss';

import Typography from '../UI/Typography/Typography';
import { StyledText } from '../UI/StyledText/StyledText';
import chunkArray from '../../utils/chunkArray';

const adavantageArray = [
  {
    id: 1,
    title: 'Широкий ассортимент',
    description:
      'Разнообразные автозапчасти, включая детали двигателя, трансмиссии, тормозной системы, подвески, кузовные элементы, электронику и аксессуары.',
    icon: '/images/cart.svg',
  },
  {
    id: 2,
    title: 'Качество продукции',
    description:
      'В наличии как оригинальные запчасти от производителей, так и качественные аналоги, что позволяет покупателям выбирать в зависимости от бюджета и предпочтений.',
    icon: '/images/quality.svg',
  },
  {
    id: 3,
    title: 'Гарантия и возврат',
    description:
      'Предоставление гарантии на запчасти и возможность возврата или обмена товара в случае неисправности или неверного выбора.',
    icon: '/images/box.svg',
  },
  {
    id: 4,
    title: 'Онлайн-заказ',
    description:
      'Возможность заказа через интернет с доставкой на дом или самовывозом.',
    icon: '/images/earth.svg',
  },
  {
    id: 5,
    title: 'Лучшие цены',
    description:
      'Прямая работа с поставщиками позволяет нам держать лучшие цены на рынке автозапчастей.',
    icon: '/images/ruble.svg',
  },
  {
    id: 6,
    title: 'Персональные консультации',
    description:
      'Опытные консультанты помогут клиентам подобрать нужные запчасти, ответят на вопросы и дадут рекомендации по замене и установке..',
    icon: '/images/people.svg',
  },
];

export default function AdvantagesBlock() {
  const chunkedArray = chunkArray(adavantageArray, 3);

  return (
    <div className={styles.advantages}>
      <div className={styles.advantages_top}>
        <Typography variant="logo">
          <StyledText firstWord="ES_" secondWord="ПРЕИМУЩЕСТВА" />
        </Typography>
        <Typography variant="subheader">
          <span className={styles.advantages_description}>
            Сервис по подбору автозапчастей на автомобили любых марок и годов
            выпуска
          </span>
        </Typography>
      </div>
      <div className={styles.advantages_list}>
        {chunkedArray.map((chunk, idx) => (
          <div key={`row-${idx}`} className={styles.advantages_row}>
            {idx % 2 !== 0 && <div className={styles.advantage_empty}></div>}
            {chunk.map((item) => (
              <div
                key={item.id}
                className={
                  item.id === 2 || item.id % 4 === 0
                    ? `${styles.advantage} ${styles.advantage_white}`
                    : styles.advantage
                }
              >
                <div className={styles.advantage_top}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className={styles.advantage_icon}
                  />
                  <Typography variant="header">{item.title}</Typography>
                </div>
                <Typography variant="body">{item.description}</Typography>
              </div>
            ))}
            {idx % 2 === 0 && <div className={styles.advantage_empty}></div>}
          </div>
        ))}
        {/* {adavantageArray.map((item, idx) =>
          idx % 3 === 0 ? (
            <div key={item.id} className={styles.advantage_row}>
              <div className={styles.advantage}>
                <div className={styles.advantage_top}>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={56}
                    height={56}
                    className={styles.advantage_icon}
                  />
                  <Typography variant="header">{item.title}</Typography>
                </div>
                <Typography variant="body">{item.description}</Typography>
              </div>
            </div>
          ) : null
        )} */}
      </div>
    </div>
  );
}
