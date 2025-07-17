import { InputProps } from '../types/InputProps';
import styles from './Input.module.scss';

export default function Input({
  placeholderText,
  classname,
  value,
  onChange,
  type = 'text',
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholderText}
      value={value}
      onChange={onChange}
      className={classname ? styles[classname] : undefined}
    />
  );
}
