'use client';
import { CardProps } from '@/app/entities/Card';
import { useState, useEffect } from 'react';
import Card from '../../../entities/Card/ui/Card';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const [products, setProducts] = useState<CardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=12');
        if (!response.ok) throw new Error('Failed to fetch data');

        const data = await response.json();
        setProducts(data.products as CardProps[]);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.loader}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>Error: {error}</p>
        <button onClick={() => window.location.reload()}>Try again</button>
      </div>
    );
  }

  return (
    <div className={styles.product}>
      <h1 className={styles['Product-title']}>Latest products</h1>
      <div className={styles['Product-list']}>
        {products.map((product) => (
          <Card
            key={product.id}
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            id={product.id}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
