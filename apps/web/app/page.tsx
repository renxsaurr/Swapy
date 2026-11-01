'use client';

import { useEffect, useState } from 'react';

type User = {
  id: string;
  email: string;
  displayName: string;
  createdAt: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001/api';

export default function Home() {
  const [users, setUsers] = useState<User[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${API_URL}/users`)
      .then((res) => {
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
        return res.json() as Promise<User[]>;
      })
      .then(setUsers)
      .catch((err: unknown) =>
        setError(err instanceof Error ? err.message : 'Unknown error'),
      );
  }, []);

  return (
    <main className="p-8 font-sans">
      <h1 className="text-2xl font-semibold">Swapy</h1>
      <h2 className="mt-6 text-lg font-medium">Users</h2>

      {error && <p className="mt-2 text-red-600">Error: {error}</p>}
      {!error && users === null && (
        <p className="mt-2 text-zinc-500">Loading…</p>
      )}
      {users && users.length === 0 && (
        <p className="mt-2 text-zinc-500">No users yet.</p>
      )}
      {users && users.length > 0 && (
        <ul className="mt-2 list-disc pl-6">
          {users.map((user) => (
            <li key={user.id}>
              {user.displayName} — {user.email}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}