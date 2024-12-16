import Image from 'next/image';
import styles from './page.module.scss';

import Cover from '@/app/components/features/Cover';
import CatalogBlock from '@/app/components/features/CatalogBlock';
import HowWorkBlock from './components/features/HowWorkBlock';
import AdvantagesBlock from './components/features/AdvatagesBlock';
import ShopInfoBlock from './components/features/ShopInfoBlock';
import ModalClientTimer from './components/UI/Modal/ModalClientTimer';
import ChatButton from './components/UI/ChatButton/ChatButton';

import backgroundSpiralRed from '../../public/images/background-spiral-red.svg';
import backgroundSpiralGreen from '../../public/images/background-spiral-green.svg';
import { GlobalModal } from './components/UI/Modal/GlobalModal';

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.background}>
        <Image
          src={backgroundSpiralRed}
          alt="Спираль с красным цветом"
          className={styles.backgroundSpiralRed}
        />

        <Image
          src={backgroundSpiralGreen}
          alt="Спираль с зелёным цветом"
          className={styles.backgroundSpiralGreen}
        />

        <div
          className={`${styles.glare} ${styles.glare_green} ${styles.glare_green_big}`}
        ></div>
        <div
          className={`${styles.glare} ${styles.glare_green} ${styles.glare_green_medium}`}
        ></div>
        <div
          className={`${styles.glare} ${styles.glare_red} ${styles.glare_red_big}`}
        ></div>
        <div
          className={`${styles.glare} ${styles.glare_red} ${styles.glare_red_medium}`}
        ></div>
      </div>
      <Cover />
      <CatalogBlock />
      <HowWorkBlock />
      <AdvantagesBlock />
      <ShopInfoBlock />
      <GlobalModal />
      <ModalClientTimer />
      <ChatButton />
    </div>
  );
}
