// app/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Login dummy, ganti dengan API backend kamu
    if (email === 'admin@example.com' && password === '123456') {
      router.push('/home'); // redirect setelah login sukses
    } else {
      setError('Email atau password salah');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md"
      >
        <h1 className="mb-4 text-2xl font-bold text-center">Login</h1>

        {error && (
          <p className="mb-2 text-center text-sm text-red-500">{error}</p>
        )}

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-white hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
