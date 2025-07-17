import { ButtonProps } from '../types/ButtonProps';
import styles from './Button.module.scss';

export default function Button({
  children,
  classname,
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button className={styles[classname]} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
