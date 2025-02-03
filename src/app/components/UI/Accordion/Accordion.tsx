'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Accordion.module.scss';

import Typography from '@/app/components/UI/Typography/Typography';
import accordionArrowUp from '../../../../../public/images/accordion_up.svg';
import accordionArrowDown from '../../../../../public/images/accordion_down.svg';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.accordionItem} ${isOpen ? styles.active : ''}`}>
      <div
        className={styles.accordionHeader}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Typography variant="subheader">{question}</Typography>
        {isOpen ? (
          <Image src={accordionArrowUp} alt="" />
        ) : (
          <Image src={accordionArrowDown} alt="" />
        )}
      </div>
      <div className={styles.accordionContent}>
        <Typography variant="body">{answer}</Typography>
      </div>
    </div>
  );
};

function Accordion({ items }: { items: AccordionItemProps[] }) {
  return (
    <div className={styles.accordion}>
      {items.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

export default Accordion;
