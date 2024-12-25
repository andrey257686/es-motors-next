import Image from 'next/image';

import styles from './AdvantagesBlock.module.scss';

import Typography from '../UI/Typography/Typography';
import { StyledText } from '../UI/StyledText/StyledText';
import chunkArray from '../../utils/chunkArray';
import { AdvantageItem } from '@/app/types/types';

export default async function AdvantagesBlock() {
  const advantages: AdvantageItem[] = await getAdvantages();
  const chunkedArray = chunkArray<AdvantageItem>(advantages, 3);

  return (
    <div className={styles.advantages}>
      <div className={styles.advantages_top}>
        <Typography as="h3" variant="logo">
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
        {/* {advantages.map((item, idx) => (
          <div
            key={idx}
            className={
              idx % 4 === 1
                ? `${styles.advantage} ${styles.advantage_white}`
                : styles.advantage
            }
          >
            <div className={styles.advantage_top}>
              <Image
                src={item.icon_advantages}
                alt={item.title_advantages}
                width={56}
                height={56}
                className={styles.advantage_icon}
              />
              <Typography variant="header">{item.title_advantages}</Typography>
            </div>
            <Typography variant="body">{item.inside_advantages}</Typography>
          </div>
        ))} */}
        {chunkedArray.map((chunk, idx) => (
          <div key={`row-${idx}`} className={styles.advantages_row}>
            {idx % 2 !== 0 && <div className={styles.advantage_empty}></div>}
            {chunk.map((item, itemIdx) => {
              const key = idx * chunk.length + itemIdx + 1;
              return (
                <div
                  key={key}
                  className={
                    key === 2 || key % 4 === 0
                      ? `${styles.advantage} ${styles.advantage_white}`
                      : styles.advantage
                  }
                >
                  <div className={styles.advantage_top}>
                    <Image
                      src={item.icon_advantages}
                      alt={item.title_advantages}
                      width={56}
                      height={56}
                      className={styles.advantage_icon}
                    />
                    <Typography variant="header">
                      {item.title_advantages}
                    </Typography>
                  </div>
                  <Typography variant="body">
                    {item.inside_advantages}
                  </Typography>
                </div>
              );
            })}
            {idx % 2 === 0 && <div className={styles.advantage_empty}></div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getAdvantages() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/start/advantages`,
    {
      next: { revalidate: 86400 },
    }
  );
  const advantages = await res.json();

  return advantages;
}
