import Image from 'next/image';

import styles from './FeedbackModal.module.scss';

import ApplicationForm from '@/app/components/ApplicationForm';
import Typography from '@/app/components/UI/Typography';

export default function FeedbackModal() {
  return (
    <div className={styles.feedbackModal}>
      <div className={styles.content}>
        <Typography variant="header">
          ПОЛУЧИТЕ БЕСПЛАТНЫЙ ПОДБОР ПРЯМО СЕЙЧАС
        </Typography>
        <Typography variant="body">
          Оставьте заявку, мы свяжемся с вами и проконсультируем по любым
          вопросам
        </Typography>
        <Image
          src="/images/feedback_arrow.svg"
          alt="Заполните форму и мы свяжемся с вами"
          width={255}
          height={57}
        />
      </div>
      <div className={styles.form}>
        <ApplicationForm buttonType="secondary" />
      </div>
    </div>
  );
}
