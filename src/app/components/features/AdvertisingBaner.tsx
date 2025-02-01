import Image from 'next/image';
import styles from './AdvertisingBaner.module.scss';

import advertisingBanerImage from '../../../../public/images/advertising-baner.png';
import advertisingBanerImageTablet from '../../../../public/images/advertising-baner(tablet).png';
import advertisingBanerImageMobile from '../../../../public/images/advertising-baner(mobile).png';

function AdvertisingBaner() {
  return (
    <div className={styles.advertisingBaner} style={{ color: 'red' }}>
      <picture>
        <source
          media="(max-width: 480px)"
          srcSet={advertisingBanerImageMobile.src}
        />
        <source
          media="(max-width: 1024px)"
          srcSet={advertisingBanerImageTablet.src}
        />
        <Image
          src={advertisingBanerImage}
          alt="Реклама"
          className={styles.advertisingBanerImage}
        />
      </picture>
    </div>
  );
}

export default AdvertisingBaner;
