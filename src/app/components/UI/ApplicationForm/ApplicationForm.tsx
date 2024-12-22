'use client';
import { ChangeEvent, CSSProperties, FormEvent, memo, useState } from 'react';
import { useMask } from '@react-input/mask';
import Image from 'next/image';

import Button from '../Button/Button';
import type { ButtonType } from '../Button/Button';
import Typography from '../Typography/Typography';
import styles from './ApplicationForm.module.scss';
import tgLogo from '../../../../../public/images/telegram-logo.svg';
import waLogo from '../../../../../public/images/whatsapp-logo.svg';

interface ApplicationFormProps {
  buttonType?: ButtonType;
  sx?: CSSProperties;
}

const initialFormData = {
  feedback_name: '',
  feedback_number: '',
  feedback_comments: '',
  // feedback_messengers_tg: false,
  // feedback_messengers_wa: false,
  contactMethods: [] as string[],
};

const initialErrors = {
  contactMethods: '',
};

function ApplicationForm({ buttonType = 'primary', sx }: ApplicationFormProps) {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  const inputPhoneRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      contactMethods: checked
        ? [...prevState.contactMethods, value]
        : prevState.contactMethods.filter((method) => method !== value),
    }));
  };

  const validateForm = () => {
    const newErrors = {
      contactMethods: formData.contactMethods.length
        ? ''
        : 'Выберите хотя бы один способ связи',
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const parsedFormData = {
        feedback_name: formData.feedback_name,
        feedback_telephone: formData.feedback_number,
        feedback_comments: formData.feedback_comments,
        feedback_messengers_tg: formData.contactMethods.includes('telegram'),
        feedback_messengers_wa: formData.contactMethods.includes('whatsapp'),
      };
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/start/feedback`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(parsedFormData),
          }
        );

        if (response.ok) {
          const result = await response.json();
          console.log('Успешно отправлено:', result);
          setFormData(initialFormData);
        } else {
          console.error('Ошибка при отправке формы:', response.statusText);
        }
      } catch (error) {
        console.error('Ошибка:', error);
      }
    }
  };

  const renderContactMethod = (
    value: string,
    imageSrc: string,
    altText: string
  ) => (
    <label className={styles.checkboxLabel}>
      <label className={styles.checkBox}>
        <input
          type="checkbox"
          name="contactMethod"
          value={value}
          onChange={handleCheckboxChange}
          checked={formData.contactMethods.includes(value)}
        />
        <div className={styles.transition}></div>
      </label>
      <Image src={imageSrc} alt={altText} width={60} height={60} />
    </label>
  );

  return (
    <form style={sx} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_fields}>
        <div className={styles.field}>
          <input
            id="feedback_name"
            name="feedback_name"
            type="text"
            aria-label="ФИО"
            value={formData.feedback_name}
            onChange={handleChange}
            placeholder="ФИО"
            className={styles.input_name}
            required
          />
        </div>

        <div className={styles.field}>
          <input
            id="feedback_number"
            name="feedback_number"
            type="tel"
            aria-label="Номер телефона"
            ref={inputPhoneRef}
            value={formData.feedback_number}
            onChange={handleChange}
            className={styles.input_phone}
            required
          />
        </div>

        <div className={styles.field}>
          <textarea
            id="feedback_comments"
            name="feedback_comments"
            aria-label="Запрос"
            value={formData.feedback_comments}
            onChange={handleChange}
            placeholder="Кратко опишите свой запрос..."
            required
          />
        </div>
      </div>

      <div className={styles.form_feedbackWays}>
        <span>Выберите способ связаться с вами:</span>

        <div className={styles.checkboxGroup}>
          {renderContactMethod(
            'telegram',
            tgLogo,
            'Свяжитесь с нами через Telegram'
          )}
          {renderContactMethod(
            'whatsapp',
            waLogo,
            'Свяжитесь с нами через WhatsApp'
          )}
        </div>
        {errors.contactMethods && (
          <span className={styles.error}>{errors.contactMethods}</span>
        )}
      </div>

      <div className={styles.form_buttonSection}>
        <Button
          typeButton={buttonType}
          type="submit"
          style={{ width: '100%', textAlign: 'center', padding: '12px 0' }}
        >
          Отправить заявку
        </Button>

        <Typography variant="caption">
          <span className={styles.policy}>
            Нажимая кнопку «Оставить заявку», вы соглашаетесь с<br />
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              политикой конфиденциальности
            </a>
          </span>
        </Typography>
      </div>
    </form>
  );
}

export default memo(ApplicationForm);
