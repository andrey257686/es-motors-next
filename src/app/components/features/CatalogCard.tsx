import { forwardRef } from 'react';

import Image, { StaticImageData } from 'next/image';

import styles from './CatalogCard.module.scss';
import Typography from '../UI/Typography/Typography';

type ItemType = {
  id: number;
  name: string;
  nameEn: string;
  brands: string[];
  image: {
    src: string;
    width: number;
    height: number;
  };
  imagePNG: StaticImageData;
};

type CatalogCardProps = {
  item: ItemType;
};

const CatalogCard = forwardRef<HTMLDivElement, CatalogCardProps>(
  ({ item }, ref) => {
    return (
      <div className={styles.card} ref={ref}>
        <Typography variant="header">{item.name}</Typography>
        <div className={styles.brands}>
          {item.brands.map((brand) => (
            <Typography variant="body" key={brand}>
              {brand}
            </Typography>
          ))}
        </div>
        <Image
          src={item.imagePNG}
          alt={item.name}
          className={`${styles.image} ${styles[`${item.nameEn}`]}`}
        />
        {/* <Image
          src={item.image.src}
          width={item.image.width}
          height={item.image.height}
          alt={item.name}
          className={`${styles.image} ${styles[`${item.nameEn}`]}`}
        /> */}
      </div>
    );
  }
);

CatalogCard.displayName = 'CatalogCard';

export default CatalogCard;
