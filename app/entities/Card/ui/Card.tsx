import { CardProps } from '../types/CardProps';
import styles from './Card.module.scss';
import Button from '../../../shared/Button/ui/Button';
import useAuthStore from '@/app/store/ui/store';
export default function Card({ title, category, price, thumbnail }: CardProps) {
  const { isAuthenticated } = useAuthStore();
  return (
    <div className={styles.Card}>
      <img
        src={thumbnail}
        alt="Product-image"
        className={styles['Card-image']}
      />
      <strong className={styles['Card-title']}>{title}</strong>
      <div className={styles['Card-category']}>{category}</div>
      <div className={styles['Card-price']}>${price}</div>
      {isAuthenticated && (
        <Button  classname="Card-button" >{"Add to cart"}</Button>
      )}
    </div>
  );
}
