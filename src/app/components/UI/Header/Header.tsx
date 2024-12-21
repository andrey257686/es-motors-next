import Image from 'next/image';
import Link from 'next/link';
// import Button from '@/app/components/UI/Button/Button';
import DropDownMenu from '@/app/components/UI/DropDownMenu/DropDownMenu';
import styles from './Header.module.scss';

interface Socials {
  social_tg: string;
  social_whatsapp: string;
}

export default async function Header() {
  const socials: Socials = await getSocials();
  console.log(socials);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link aria-hidden="true" href="/" className={styles.logo}></Link>
        {/* <Button typeButton="outline">Каталог товаров</Button> */}
        <DropDownMenu />
        <div className={styles.social}>
          <a href={socials.social_tg} className={styles.icon}>
            <Image
              src="/images/telegram-logo.svg"
              alt="Свяжитесь с нами через Telegram"
              fill={true}
              // width={30}
              // height={30}
            />
          </a>
          <a href={socials.social_whatsapp} className={styles.icon}>
            <Image
              src="/images/whatsapp-logo.svg"
              alt="Свяжитесь с нами через WhatsApp"
              fill={true}
              // width={30}
              // height={30}
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export async function getSocials() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/start/social`, {
    next: { revalidate: 86400 },
  });
  const socials = await res.json();

  return socials;
}
