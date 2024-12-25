import styles from './CatalogBlock.module.scss';

import { StyledText } from '../UI/StyledText/StyledText';
import Typography from '../UI/Typography/Typography';
import Button from '../UI/Button/Button';
import CatalogCard from './CatalogCard';
import chunkArray from '../../utils/chunkArray';

import oilImage from '../../../../public/images/oils.png';
import tiresImage from '../../../../public/images/tires.png';
import carChemistryImage from '../../../../public/images/car_chemistry.png';
import toolsImage from '../../../../public/images/tools.png';
import accessoriesImage from '../../../../public/images/accessories.png';
import accumsImage from '../../../../public/images/accums.png';
import Link from 'next/link';
import { CatalogItem } from '@/app/types/types';

const arrayCatalog: CatalogItem[] = [
  {
    id: 1,
    name: 'Масла',
    nameEn: 'oils',
    brands: ['Лукойл', 'CASTROL', 'MOBIL', 'GAZPROMNEF'],
    image: {
      src: '/images/oils.png',
      width: 650,
      height: 382,
    },
    imagePNG: oilImage,
  },
  {
    id: 2,
    name: 'Шины',
    nameEn: 'tires',
    brands: ['Michelin', 'Bridgeston', 'Yokohama', 'Continental'],
    image: {
      src: '/images/tires.png',
      width: 501,
      height: 459,
    },
    imagePNG: tiresImage,
  },
  {
    id: 3,
    name: 'Автохимия',
    nameEn: 'car_chemistry',
    brands: ['Sonax', 'Chemical Guys', 'CarPro', 'Adams Polishes'],
    image: {
      src: '/images/car_chemistry.png',
      width: 652,
      height: 555,
    },
    imagePNG: carChemistryImage,
  },
  {
    id: 4,
    name: 'Инструменты',
    nameEn: 'tools',
    brands: ['STELS', 'Inforce', 'Jonnesway', 'Ombra'],
    image: {
      src: '/images/tools.png',
      width: 445,
      height: 375,
    },
    imagePNG: toolsImage,
  },
  {
    id: 5,
    name: 'Аксессуары',
    nameEn: 'accessories',
    brands: [
      'Garmin Dash Cam 55',
      'CARCHET TPMS',
      'GPS Spy Tec',
      'Easy One Touch 4',
    ],
    image: {
      src: '/images/accessories.png',
      width: 698,
      height: 614,
    },
    imagePNG: accessoriesImage,
  },
  {
    id: 6,
    name: 'Аккумуляторы',
    nameEn: 'accums',
    brands: [
      'MONBAT Premium',
      'FORSE',
      'TESLA Premium Energy',
      'Smart Element',
    ],
    image: {
      src: '/images/accums.png',
      width: 352,
      height: 325,
    },
    imagePNG: accumsImage,
  },
];

export default async function CatalogBlock() {
  const chunkedArray = chunkArray<CatalogItem>(arrayCatalog, 3);

  return (
    <div className={styles.catalog}>
      <div className={styles.top_catalog}>
        <Typography variant="logo">
          <StyledText firstWord="ES_" secondWord="КАТАЛОГ ТОВАРОВ" />
        </Typography>
        <Link href="/catalog" className={styles.catalog_link}>
          <Button typeButton="outline">Смотреть весь каталог</Button>
        </Link>
      </div>
      <div className={styles.catalog_list}>
        {chunkedArray.map((chunk, idx) => (
          <div key={`row-${idx}`} className={styles.row}>
            {chunk.map((item) => (
              <CatalogCard key={item.id} item={item} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
