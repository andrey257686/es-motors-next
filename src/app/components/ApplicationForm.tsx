'use client';
import { CSSProperties, useState } from 'react';
import { useMask } from '@react-input/mask';
import Image from 'next/image';

import Button from './UI/Button';
import type { ButtonType } from './UI/Button';
import Typography from './UI/Typography';
import styles from './ApplicationForm.module.scss';
import tgLogo from '../../../public/images/telegram-logo-big.svg';
import waLogo from '../../../public/images/whatsapp-logo-big.svg';

interface ApplicationFormProps {
  buttonType?: ButtonType;
  sx?: CSSProperties;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({
  buttonType = 'primary',
  sx,
}) => {
  const [formData, setFormData] = useState<{
    fullName: string;
    phoneNumber: string;
    request: string;
    contactMethods: string[];
  }>({
    fullName: '',
    phoneNumber: '',
    request: '',
    contactMethods: [],
  });

  const [errors, setErrors] = useState<{
    fullName: string;
    phoneNumber: string;
    contactMethods: string;
  }>({
    fullName: '',
    phoneNumber: '',
    contactMethods: '',
  });

  const inputPhoneRef = useMask({
    mask: '+7 (___) ___-__-__',
    replacement: { _: /\d/ },
    showMask: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setFormData((prevState) => {
      const updatedMethods = checked
        ? [...prevState.contactMethods, value]
        : prevState.contactMethods.filter((method) => method !== value);

      return { ...prevState, contactMethods: updatedMethods };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      fullName: formData.fullName ? '' : 'Укажите ФИО',
      phoneNumber: formData.phoneNumber ? '' : 'Укажите номер телефона',
      contactMethods:
        formData.contactMethods.length !== 0
          ? ''
          : 'Выберите хотя бы один способ связи',
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).some((error) => error)) {
      console.log('Отправляем данные:', formData);
    }
  };

  return (
    <form style={sx} className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form_fields}>
        <div className={styles.field}>
          <input
            id="fullName"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="ФИО"
            className={styles.input_name}
            required
          />
          {errors.fullName && (
            <span className={styles.error}>{errors.fullName}</span>
          )}
        </div>

        <div className={styles.field}>
          <input
            id="phoneNumber"
            name="phoneNumber"
            type="tel"
            ref={inputPhoneRef}
            value={formData.phoneNumber}
            onChange={handleChange}
            className={styles.input_phone}
            required
          />
          {errors.phoneNumber && (
            <span className={styles.error}>{errors.phoneNumber}</span>
          )}
        </div>

        <div className={styles.field}>
          <textarea
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            placeholder="Кратко опишите свой запрос..."
            required
          />
        </div>
      </div>

      <div className={styles.form_feedbackWays}>
        <span>Выберите способ связаться с вами:</span>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <label className={styles.checkBox}>
              <input
                type="checkbox"
                name="contactMethod"
                value="telegram"
                onChange={handleCheckboxChange}
                checked={formData.contactMethods.includes('telegram')}
              />
              <div className={styles.transition}></div>
            </label>
            <Image
              src={tgLogo}
              alt="Свяжитесь с нами через Telegram"
              width={60}
              height={60}
            />
          </label>
          <label className={styles.checkboxLabel}>
            <label className={styles.checkBox}>
              <input
                type="checkbox"
                name="contactMethod"
                value="whatsapp"
                onChange={handleCheckboxChange}
                checked={formData.contactMethods.includes('whatsapp')}
              />
              <div className={styles.transition}></div>
            </label>
            <Image
              src={waLogo}
              alt="Свяжитесь с нами через Telegram"
              width={60}
              height={60}
            />
          </label>
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
              политикой конфиденциальности
            </a>
          </span>
        </Typography>
      </div>
    </form>
  );
};

export default ApplicationForm;
