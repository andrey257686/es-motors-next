import styles from './FAQ.module.scss';

import Typography from '../UI/Typography/Typography';
import { StyledText } from '../UI/StyledText/StyledText';
import Accordion from '../UI/Accordion/Accordion';

async function FAQ() {
  const questions = await getFAQ();

  return (
    <div className={styles.faq}>
      <div className={styles.faq_top}>
        <Typography as="h3" variant="logo">
          <StyledText firstWord="ES_" secondWord="ВОПРОСЫ" />
        </Typography>
        <Typography variant="subheader">
          <span className={styles.faq_description}>
            Ответили на часто задаваемые вопросы наших клиентов
          </span>
        </Typography>
      </div>

      <Accordion items={questions.faq} />
    </div>
  );
}

export default FAQ;

export async function getFAQ() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/start/accordion`,
    {
      next: { revalidate: 86400 },
      cache: 'force-cache',
    }
  );
  const faq = await res.json();

  return faq;
}
