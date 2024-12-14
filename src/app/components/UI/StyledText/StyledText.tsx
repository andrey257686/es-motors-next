import styles from './StyledText.module.scss';

type StyledTextProps = {
  firstWord: string;
  secondWord: string;
};

export const StyledText = ({
  firstWord,
  secondWord,
}: StyledTextProps): JSX.Element => {
  return (
    <>
      <span className={styles.green}>{firstWord.toUpperCase()}</span>
      <span className={styles.white}>{secondWord.toUpperCase()}</span>
    </>
  );
};
