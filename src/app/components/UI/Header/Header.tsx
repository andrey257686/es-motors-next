import Image from 'next/image';
import Link from 'next/link';
// import DropDownMenu from '@/app/components/UI/DropDownMenu/DropDownMenu';
import styles from './Header.module.scss';

// import { Socials, CatalogItemBackend } from '@/app/types/types';
import { Socials } from '@/app/types/types';

export default async function Header() {
  const socials: Socials = await getSocials();
  // const catalog: CatalogItemBackend[] = await getCatalog();
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link aria-hidden="true" href="/" className={styles.logo}></Link>
        {/* <DropDownMenu items={catalog} /> */}
        <div className={styles.social}>
          <a href={socials.social_tg} className={styles.icon}>
            <Image
              src="/images/telegram-logo.svg"
              alt="Свяжитесь с нами через Telegram"
              fill={true}
            />
          </a>
          <a href={socials.social_whatsapp} className={styles.icon}>
            <Image
              src="/images/whatsapp-logo.svg"
              alt="Свяжитесь с нами через WhatsApp"
              fill={true}
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

export async function getCatalog() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/start/catalog`, {
    next: { revalidate: 86400 },
    cache: 'force-cache',
  });
  const catalog = await res.json();

  return catalog;
}
