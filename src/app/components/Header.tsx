import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/UI/Button';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}></Link>
        <Button typeButton="outline">Каталог товаров</Button>
        {/* <button className="header__button" aria-label="Каталог товаров">
          Каталог товаров
          <span className="header__button_gradient"></span>
        </button> */}
        <div className={styles.social}>
          <a href="#" className={styles.icon}>
            <Image
              src="/images/telegram-logo.svg"
              alt="Свяжитесь с нами через Telegram"
              width={30}
              height={30}
            />
          </a>
          <a href="#" className={styles.icon}>
            <Image
              src="/images/whatsapp-logo.png"
              alt="Свяжитесь с нами через WhatsApp"
              width={30}
              height={30}
            />
          </a>
        </div>
      </div>
    </header>
  );
}
