import styles from './BurgerButton.module.scss';

interface BurgerButtonProps {
  onClick: () => void;
}

function BurgerButton({ onClick }: BurgerButtonProps) {
  return (
    <label className={styles.burger} htmlFor="burger" onClick={onClick}>
      <input type="checkbox" id="burger" />
      <span></span>
      <span></span>
      <span></span>
    </label>
  );
}

export default BurgerButton;
