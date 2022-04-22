import { FC } from 'react';

import { ButtonType } from 'common/enums/enums';
import styles from './styles.module.scss';

type ButtonProps = {
  label: string;
  type?: ButtonType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: FC<ButtonProps> = ({
  label,
  onClick,
  type = ButtonType.BUTTON,
}) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
