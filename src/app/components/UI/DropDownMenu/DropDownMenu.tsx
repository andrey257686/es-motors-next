'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/app/components/UI/Button/Button';
import styles from './DropDownMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '../Typography/Typography';

export default function DropDownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.dropdownMenu} ref={menuRef}>
      <Button typeButton="outline" onClick={toggleMenu}>
        Каталог товаров
      </Button>
      {isMenuOpen && (
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/category1" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 1"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Категория 1</Typography>
              </Link>
            </li>
            <li>
              <Link href="/category2" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 2"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Категория 2</Typography>
              </Link>
            </li>
            <li>
              <Link href="/category3" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 3"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Аккумуляторные батареи</Typography>
              </Link>
            </li>
            <li>
              <Link href="/category4" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 4"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Шины</Typography>
              </Link>
            </li>
            <li>
              <Link href="/category5" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 5"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Масла</Typography>
              </Link>
            </li>
            <li>
              <Link href="/category6" onClick={() => setIsMenuOpen(false)}>
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория 6"
                  width={25}
                  height={25}
                />
                <Typography variant="body">Инструменты</Typography>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
