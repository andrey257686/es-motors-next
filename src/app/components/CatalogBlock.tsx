import styles from './CatalogBlock.module.scss';

import { StyledText } from './UI/StyledText';
import Typography from './UI/Typography';
import Button from './UI/Button';
import CatalogCard from './CatalogCard';

import oilImage from '../../../public/images/oils.png';
import tiresImage from '../../../public/images/tires.png';
import carChemistryImage from '../../../public/images/car_chemistry.png';
import toolsImage from '../../../public/images/tools.png';
import accessoriesImage from '../../../public/images/accessories.png';
import accumsImage from '../../../public/images/accums.png';

const arrayCatalog = [
  {
    id: 1,
    name: 'Масла',
    nameEn: 'oils',
    brands: ['Bosch', 'Pirelli', 'Viking', 'Castrol'],
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
    brands: ['Continental', 'Hankook', 'Mirage', 'Goodyear'],
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
    brands: ['Astra', 'Hankook', 'Atas', 'Makita'],
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
    brands: ['Bosch', 'Pirelli', 'Viking', 'Castrol'],
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
    brands: ['Bosch', 'Pirelli', 'Viking', 'Castrol'],
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
    brands: ['Varta', 'Exide', 'Topla', 'Akom'],
    image: {
      src: '/images/accums.png',
      width: 352,
      height: 325,
    },
    imagePNG: accumsImage,
  },
];

export default function CatalogBlock() {
  return (
    <div className={styles.catalog}>
      <div className={styles.top_catalog}>
        <Typography variant="logo">
          <StyledText firstWord="ES_" secondWord="КАТАЛОГ ТОВАРОВ" />
        </Typography>
        <Button typeButton="outline">Смореть весь каталог</Button>
      </div>
      <div className={styles.catalog_list}>
        {arrayCatalog.map((item, idx) =>
          idx % 3 === 0 ? (
            <div key={item.id} className={styles.row}>
              <CatalogCard item={arrayCatalog[idx]}></CatalogCard>
              <CatalogCard item={arrayCatalog[idx + 1]}></CatalogCard>
              <CatalogCard item={arrayCatalog[idx + 2]}></CatalogCard>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
