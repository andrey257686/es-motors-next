'use client';

import { useState, useEffect, useRef } from 'react';
import Button from '@/app/components/UI/Button/Button';
import styles from './DropDownMenu.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import { CatalogItemBackend } from '@/app/components/UI/Header/Header';

type Props = {
  items: CatalogItemBackend[];
};

export default function DropDownMenu({ items }: Props) {
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
      <Button
        className={styles.dropdownMenu_button}
        typeButton="outline"
        onClick={toggleMenu}
      >
        Каталог товаров
      </Button>
      <label className={styles.dropdownMenu_burger}>
        <input type="checkbox" checked={isMenuOpen} onChange={toggleMenu} />
        <div className={styles.dropdownMenu_burger_checkmark}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <div
        className={`${styles.menu} ${isMenuOpen ? styles.menu_open : ''}`}
        aria-hidden={!isMenuOpen}
      >
        <ul>
          {items.map((item) => (
            <li key={item.order}>
              <Link
                href={`/category/${item.name_category}`}
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/images/gear-icon.svg"
                  alt="Категория"
                  width={25}
                  height={25}
                />
                <Typography variant="body">{item.name_category}</Typography>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
