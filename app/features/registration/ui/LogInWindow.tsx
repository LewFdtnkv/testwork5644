'use client';

import { useState, useEffect } from 'react';
import Input from '@/app/shared/Input/ui/Input';
import styles from './LogInWindow.module.scss';
import Button from '../../../shared/Button/ui/Button';
import { InputData } from '../data/InputData';
import useAuthStore from '../../../store/ui/store';
import { useRouter } from 'next/navigation';

export default function LogInWindow() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { isAuthenticated, validateToken, login } = useAuthStore();

  useEffect(() => {
    if (validateToken()) {
      router.push('/');
    }
  }, [validateToken, router]);

  const handleSignIn = async () => {
    if (password.length < 3 || username.length < 3) {
      setError('Password or username must be at least 3 characters long');
      return;
    }

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error || 'Something went wrong');
        return;
      }

      const { token } = await response.json();
      login(token, username);
      router.push('/');
    } catch (error) {
      console.error('Error during sign in:', error);
      setError('An error occurred during login. Please try again later.');
    }
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <div className={styles.LogInWindow}>
      <h1 className={styles['LogInWindow-title']}>Login</h1>

      {InputData.map((input, index) => (
        <Input
          key={index}
          placeholderText={input.placeholderText}
          classname={input.classname}
          type={input.type}
          value={input.placeholderText === 'Username' ? username : password}
          onChange={(e) =>
            input.placeholderText === 'Username'
              ? setUsername(e.target.value)
              : setPassword(e.target.value)
          }
        />
      ))}

      {error && <p className={styles.error}>{error}</p>}

      <Button
        classname="LogInWindow-button"
        onClick={handleSignIn}
      >Login</Button>
    </div>
  );
}
